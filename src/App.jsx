import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhatWeDo from "./components/WhatWeDo";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />
      <main>
        <HeroSection />
        <WhatWeDo />
        <FeatureSection />
        <Workflow />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
