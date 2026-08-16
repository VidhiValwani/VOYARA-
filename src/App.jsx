import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <HiddenIndia />
      <ExploreByInterest />
      <FeaturedExperience />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Trip Planner */}
        <Route path="/plan-trip" element={<PlanTrip />} />

        {/* Destination Details */}
        <Route path="/destinations/:slug" element={<DestinationDetails />} />

        <Route path="/discover-india" element={<DiscoverIndia />} />

        <Route path="/experiences" element={<Experiences />} />
        <Route path="/about" element={<About />} />
        <Route path="/international" element={<International />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
