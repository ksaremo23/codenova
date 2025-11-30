import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhatWeDo from "../components/WhatWeDo";
import FeatureSection from "../components/FeatureSection";
import AIServices from "../components/AIServices";
import AIChatbot from "../components/AIChatbot";
import Workflow from "../components/Workflow";
import Portfolio from "../components/Portfolio";
import BlogSection from "../components/BlogSection";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />
      <main>
        <HeroSection />
        <WhatWeDo />
        <FeatureSection />
        <AIServices />
        <AIChatbot />
        <Workflow />
        <Portfolio />
        <BlogSection />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;

