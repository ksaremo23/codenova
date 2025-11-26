import { Sparkles, ClipboardCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-8 sm:mt-12 lg:mt-20 pb-12">
      <div className="flex items-center gap-2 mb-4 px-4">
        <Sparkles className="text-orange-500" size={24} />
        <span className="text-sm sm:text-base text-orange-500 font-semibold uppercase tracking-wide">
          AI-Powered Development
        </span>
      </div>
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center tracking-wide font-bold leading-tight px-4">
        AI Chatbot for Business Philippines &{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text block sm:inline">
          Taguig AI Services
        </span>
        <br className="hidden sm:block" />
        <span className="block sm:inline">That Scale Your Company Faster</span>
      </h1>
      <p className="mt-6 sm:mt-8 lg:mt-10 text-lg sm:text-xl lg:text-2xl text-center text-neutral-300 max-w-4xl px-4 leading-relaxed font-medium">
        Websites, chatbots, and AI automation for business delivered 2–5× faster by a dedicated AI agency in Taguig—perfect for founders who need an AI powered website builder and on-demand Philippine experts.
      </p>
      <p className="mt-4 text-base sm:text-lg text-center text-neutral-400 max-w-3xl px-4">
        Hire front-end developer Philippines talent plus an automation team that keeps your funnels, bots, and marketing assets fresh.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-8 sm:my-10 px-4 w-full">
        <a
          href="#contact"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-8 sm:px-10 rounded-md hover:from-orange-600 hover:to-orange-900 transition-all duration-200 text-center w-full sm:w-auto font-medium flex items-center justify-center gap-2 text-lg"
        >
          <ClipboardCheck size={20} />
          Book a Free Audit
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 px-4 max-w-5xl w-full">
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 sm:p-6 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">2–5×</div>
          <div className="text-sm sm:text-base text-neutral-400">Faster Delivery</div>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 sm:p-6 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">24/7</div>
          <div className="text-sm sm:text-base text-neutral-400">AI Automation</div>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 sm:p-6 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">50%+</div>
          <div className="text-sm sm:text-base text-neutral-400">Cost Savings</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
