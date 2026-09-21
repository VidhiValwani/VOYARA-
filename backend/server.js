/* global require, process */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");
const Trip = require("./models/Trip");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./models/User");
const authenticateToken = require("./middleware/authMiddleware");
const requireAdmin = require("./middleware/roleMiddleware");
const app = express();

// const rateLimit = require("express-rate-limit");
// Middleware
app.use(cors());
app.use(express.json());

// Security middleware
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later.",
});

app.use(limiter);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });

// Test route
app.get("/", (req, res) => {
  res.send("VOYARA Backend API is running");
});
app.get(
  "/api/admin",
  authenticateToken,
  requireAdmin,
  (req, res) => {
    res.json({
      message: "Welcome Admin! You have access to this route.",
      user: req.user,
    });
  }
);
app.post(
  "/api/auth/signup",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required"),

    body("email")
      .trim()
      .isEmail()
      .withMessage("Valid email is required"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const { name, email, password } = req.body;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(409).json({
          message: "User already exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({
        name,
        email,
        password: hashedPassword,
      });

      const savedUser = await user.save();

      res.status(201).json({
        message: "User registered successfully",
        user: {
          id: savedUser._id,
          name: savedUser.name,
          email: savedUser.email,
          role: savedUser.role,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);
app.post(
  "/api/auth/login",
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Valid email is required"),

    body("password")
      .notEmpty()
      .withMessage("Password is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({
          message: "Invalid email or password",
        });
      }

      const passwordMatch = await bcrypt.compare(
        password,
        user.password
      );

      if (!passwordMatch) {
        return res.status(401).json({
          message: "Invalid email or password",
        });
      }

      const token = jwt.sign(
        {
          userId: user._id,
          role: user.role,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res.json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);
// GET all trips
app.get("/api/trips", authenticateToken, async (req, res) => {
    try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new trip
app.post(
  "/api/trips",  authenticateToken,
  [
    body("destination")
      .trim()
      .notEmpty()
      .withMessage("Destination is required"),

    body("startDate")
      .notEmpty()
      .withMessage("Start date is required"),

    body("endDate")
      .notEmpty()
      .withMessage("End date is required"),

    body("travellers")
      .isInt({ min: 1 })
      .withMessage("Travellers must be at least 1"),

    body("budget")
      .isNumeric()
      .withMessage("Budget must be a number"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const trip = new Trip(req.body);
      const savedTrip = await trip.save();

      res.status(201).json(savedTrip);
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
);
// UPDATE a trip
app.put(
  "/api/trips/:id",  authenticateToken,
  [
    body("destination")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Destination cannot be empty"),

    body("startDate")
      .optional()
      .notEmpty()
      .withMessage("Start date is required"),

    body("endDate")
      .optional()
      .notEmpty()
      .withMessage("End date is required"),

    body("travellers")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Travellers must be at least 1"),

    body("budget")
      .optional()
      .isNumeric()
      .withMessage("Budget must be a number"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const updatedTrip = await Trip.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      if (!updatedTrip) {
        return res.status(404).json({
          message: "Trip not found",
        });
      }

      res.json(updatedTrip);
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
);

// DELETE a trip
app.delete("/api/trips/:id",   authenticateToken, async (req, res) => {
  try {
    const deletedTrip = await Trip.findByIdAndDelete(req.params.id);

    if (!deletedTrip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    res.json({ message: "Trip deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
