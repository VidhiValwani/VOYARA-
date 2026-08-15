import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HiddenIndia from "./components/HiddenIndia"
import ExploreByInterest from "./components/ExploreByInterest"
import FeaturedExperience from "./components/FeaturedExperience"
import PlanTrip from "./pages/PlanTrip"

function Home() {
  return (
    <>
      <Hero />
      <HiddenIndia />
      <ExploreByInterest />
      <FeaturedExperience />
    </>
  )
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

      </Routes>

    </BrowserRouter>
  )
}

export default App