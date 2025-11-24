import { CheckCircle2 } from "lucide-react";
import { oneTimeProjects, monthlyPlans } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-16 sm:mt-20 lg:mt-24 px-4" id="pricing">
      <div className="text-center mb-12">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xs sm:text-sm font-medium px-3 py-1 uppercase inline-block mb-4">
          Pricing
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center my-6 sm:my-8 tracking-wide font-bold">
          Simple, Transparent{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Pricing
          </span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto mt-4">
          Choose from one-time projects or monthly recurring plans. All prices include AI-powered development and automation.
        </p>
      </div>

      {/* One-Time Projects */}
      <div className="mb-16 sm:mb-20">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">One-Time Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {oneTimeProjects.map((project, index) => (
            <div 
              key={index} 
              className="p-6 sm:p-8 border border-neutral-700 rounded-xl hover:border-orange-500/50 transition-all duration-300 bg-neutral-900/30"
            >
              <h4 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4">{project.price}</p>
              <p className="text-sm text-neutral-400 mb-4">{project.description}</p>
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5 mr-2" size={16} />
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex justify-center items-center text-center w-full py-2.5 px-4 text-sm font-medium rounded-lg border border-neutral-600 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-200"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Recurring Plans */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Monthly Recurring Plans</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {monthlyPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-6 sm:p-8 lg:p-10 border rounded-xl transition-all duration-300 ${
                plan.popular 
                  ? "border-orange-500/50 bg-neutral-900/50 scale-105 sm:scale-105 lg:scale-110 shadow-lg shadow-orange-500/10" 
                  : "border-neutral-700 hover:border-neutral-600"
              }`}
            >
              <div className="flex items-baseline justify-between mb-6">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {plan.title}
                </p>
                {plan.popular && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xs sm:text-sm font-semibold">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="mb-6 sm:mb-8">
                <span className="text-4xl sm:text-5xl font-bold mr-2">{plan.price}</span>
                <span className="text-neutral-400 text-sm sm:text-base">{plan.period}</span>
              </p>
              <ul className="space-y-4 mb-8 sm:mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5 mr-3" size={20} />
                    <span className="text-sm sm:text-base text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`inline-flex justify-center items-center text-center w-full py-3 sm:py-4 px-5 tracking-tight text-base sm:text-lg font-medium rounded-lg transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-600 hover:to-orange-900 text-white"
                    : "border border-neutral-600 hover:border-neutral-400 hover:bg-neutral-800"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* One-Time Extras */}
      <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">One-Time Add-ons</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-6 border border-neutral-700 rounded-lg text-center">
            <h4 className="font-semibold mb-2">Logo + Brand Kit</h4>
            <p className="text-orange-500 font-bold text-xl">$60 - $300</p>
          </div>
          <div className="p-6 border border-neutral-700 rounded-lg text-center">
            <h4 className="font-semibold mb-2">SEO Keyword Research</h4>
            <p className="text-orange-500 font-bold text-xl">$100 - $400</p>
          </div>
          <div className="p-6 border border-neutral-700 rounded-lg text-center">
            <h4 className="font-semibold mb-2">Speed Performance Overhaul</h4>
            <p className="text-orange-500 font-bold text-xl">$150 - $600</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
