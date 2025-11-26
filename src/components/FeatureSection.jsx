import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-16 sm:mt-20 lg:mt-24 border-b border-neutral-800 pb-16 sm:pb-20 lg:pb-24" id="services">
      <div className="text-center px-4">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xs sm:text-sm font-medium px-3 py-1 uppercase inline-block">
          Services
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 sm:mt-8 lg:mt-12 tracking-wide font-bold">
          Taguig{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            AI Services & Automation
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-12 lg:mt-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-lg hover:bg-neutral-900/50 transition-all duration-300 border border-neutral-800">
          <div className="flex-shrink-0 flex h-16 w-16 p-3 bg-neutral-900 text-orange-500 justify-center items-center rounded-full border border-orange-500/20 mb-4">
            {features[0].icon}
          </div>
          <h5 className="text-lg sm:text-xl font-semibold mb-2">AI Powered Website Builder</h5>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Launch or revamp your site with an AI powered website builder workflow that keeps Philippine brands fast, modern, and conversion-ready.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-lg hover:bg-neutral-900/50 transition-all duration-300 border border-neutral-800">
          <div className="flex-shrink-0 flex h-16 w-16 p-3 bg-neutral-900 text-orange-500 justify-center items-center rounded-full border border-orange-500/20 mb-4">
            {features[1].icon}
          </div>
          <h5 className="text-lg sm:text-xl font-semibold mb-2">AI Chatbot for Business Philippines</h5>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            We deploy multilingual chatbots that qualify leads, book calls, and automate FAQs for businesses across the Philippines.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-lg hover:bg-neutral-900/50 transition-all duration-300 border border-neutral-800">
          <div className="flex-shrink-0 flex h-16 w-16 p-3 bg-neutral-900 text-orange-500 justify-center items-center rounded-full border border-orange-500/20 mb-4">
            {features[3].icon}
          </div>
          <h5 className="text-lg sm:text-xl font-semibold mb-2">Website Revamp & UX Optimization</h5>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Modernize your existing site with AI automation for business playbooks, CRO experiments, and analytics.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-lg hover:bg-neutral-900/50 transition-all duration-300 border border-neutral-800">
          <div className="flex-shrink-0 flex h-16 w-16 p-3 bg-neutral-900 text-orange-500 justify-center items-center rounded-full border border-orange-500/20 mb-4">
            {features[3].icon}
          </div>
          <h5 className="text-lg sm:text-xl font-semibold mb-2">Hire Front-End Developer Philippines</h5>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Retain our Manila-based front-end and AI automation squad for ongoing releases, analytics, and Taguig AI services on demand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
