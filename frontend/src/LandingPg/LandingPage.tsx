import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CallToAction from "./components/CallToAction";
import Footersection from "./components/Footer";

function LandingPage() {
  return (
     <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CallToAction />
      <Footersection />
    </>
  )
}

export default LandingPage;