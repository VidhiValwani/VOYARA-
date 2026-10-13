import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HiddenIndia from "./components/HiddenIndia";
import ExploreByInterest from "./components/ExploreByInterest";
import FeaturedExperience from "./components/FeaturedExperience";

import PlanTrip from "./pages/PlanTrip";
import DestinationDetails from "./pages/DestinationDetails";
import DiscoverIndia from "./pages/DiscoverIndia";
import Experiences from "./pages/Experiences";
import About from "./pages/About";
import International from "./pages/International";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import HooksDemo from "./pages/HooksDemo";
import { TravelProvider } from "./context/TravelContext";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";

import RealTimeNotifications from "./components/RealTimeNotifications";

/* Scroll to top whenever route changes */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* Home Page */
function Home() {
  return (
    <>
      <Hero />
      <HiddenIndia />
      <ExploreByInterest />
      <FeaturedExperience />
      <RealTimeNotifications />
    </>
  );
}

function App() {
  return (
    <TravelProvider>
      <ThemeProvider>
        <BrowserRouter>
          <ScrollToTop />

          <Navbar />

          <Routes>
            {/* Homepage */}
            <Route path="/" element={<Home />} />

            {/* Trip Planner */}
            <Route path="/plan-trip" element={<PlanTrip />} />

            {/* Destination Details */}
            <Route
              path="/destinations/:slug"
              element={<DestinationDetails />}
            />

            {/* Discover India */}
            <Route path="/discover-india" element={<DiscoverIndia />} />

            {/* Experiences */}
            <Route path="/experiences" element={<Experiences />} />

            {/* Hooks Demo */}
            <Route path="/hooks-demo" element={<HooksDemo />} />

            {/* About */}
            <Route path="/about" element={<About />} />

            {/* International */}
            <Route path="/international" element={<International />} />

            {/* Authentication */}
            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<SignUp />} />

            <Route path="/profile" element={<Profile />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </TravelProvider>
  );
}

export default App;
