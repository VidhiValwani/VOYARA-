/* global require, process */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");
const Trip = require("./models/Trip");

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

// GET all trips
app.get("/api/trips", async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new trip
app.post(
  "/api/trips",
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
  "/api/trips/:id",
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
app.delete("/api/trips/:id", async (req, res) => {
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
