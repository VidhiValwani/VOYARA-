import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HiddenIndia from "./components/HiddenIndia"
import Experiences from "./components/ExploreByInterest"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <HiddenIndia />
        <Experiences />
      </main>
    </>
  )
}

export default App