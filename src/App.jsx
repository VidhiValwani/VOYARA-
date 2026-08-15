import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HiddenIndia from "./components/HiddenIndia"
import ExploreByInterest from "./components/ExploreByInterest"
import FeaturedExperience from "./components/FeaturedExperience"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <HiddenIndia />
        <ExploreByInterest />
        <FeaturedExperience />
      </main>
    </>
  )
}

export default App