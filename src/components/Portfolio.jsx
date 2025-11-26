import { ExternalLink } from "lucide-react";
import { niches } from "../constants";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Real Estate Agent Website",
      description: "AI-powered landing page with chatbot integration. Increased lead capture by 40%.",
      tech: "React, Tailwind, AI Chatbot",
      category: "Real Estate",
    },
    {
      title: "Restaurant Ordering System",
      description: "Modern website with automated content generation and SEO optimization.",
      tech: "Next.js, Tailwind, AI Content",
      category: "Restaurant",
    },
    {
      title: "Dental Clinic Portal",
      description: "Complete website with appointment booking chatbot and patient portal.",
      tech: "React, AI Chatbot, Automation",
      category: "Healthcare",
    },
    {
      title: "Business Coach Platform",
      description: "5-page website with lead capture forms and automated follow-up system.",
      tech: "Next.js, Tailwind, AI Integration",
      category: "Coaching",
    },
    {
      title: "E-commerce Store",
      description: "Fast, modern e-commerce site with AI-powered product recommendations.",
      tech: "React, E-commerce, AI Features",
      category: "E-commerce",
    },
    {
      title: "SaaS Landing Page",
      description: "High-converting landing page with AI chatbot and automated testing.",
      tech: "Next.js, AI Chatbot, Automation",
      category: "SaaS",
    },
  ];

  return (
    <div className="mt-16 sm:mt-20 lg:mt-24 px-4" id="portfolio">
      <div className="text-center mb-12">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xs sm:text-sm font-medium px-3 py-1 uppercase inline-block mb-4">
          Portfolio
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center my-6 sm:my-8 tracking-wide font-bold">
          AI Agency Philippines Results for{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Real Clients
          </span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto mt-4">
          See how we've helped Taguig AI services clients and global teams build faster, smarter websites with AI automation for business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 sm:p-8 hover:border-orange-500/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs text-orange-500 font-semibold uppercase">{item.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
              </div>
              <ExternalLink className="text-neutral-600 hover:text-orange-500 transition-colors" size={20} />
            </div>
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.tech.split(", ").map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Target Niches */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">We Specialize In</h3>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {niches.map((niche, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full text-sm hover:border-orange-500/50 transition-colors"
            >
              {niche}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

