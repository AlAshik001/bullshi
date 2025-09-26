// src/App.jsx
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import MissionSection from "./components/MissionSection";
import HowToUseSection from "./components/HowToUseSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import tailwindConfig from "../tailwind.config";
function App() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <ServicesSection />
      <MissionSection />
      <HowToUseSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
