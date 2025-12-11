const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Real Estate Agent Website",
      description: "AI-powered landing page with chatbot integration. Increased lead capture by 40%.",
    },
    {
      title: "Restaurant Ordering System",
      description: "Modern website with automated content generation and SEO optimization.",
    },
    {
      title: "Dental Clinic Portal",
      description: "Complete website with appointment booking chatbot and patient portal.",
    },
    {
      title: "Business Coach Platform",
      description: "5-page website with lead capture forms and automated follow-up system.",
    },
    {
      title: "E-commerce Store",
      description: "Fast, modern e-commerce site with AI-powered product recommendations.",
    },
    {
      title: "SaaS Landing Page",
      description: "High-converting landing page with AI chatbot and automated testing.",
    },
  ];

  return (
    <div className="mt-16 sm:mt-20 lg:mt-24 px-4" id="portfolio">
      <div className="text-center mb-12">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xs sm:text-sm font-medium px-3 py-1 uppercase inline-block mb-4">
          Portfolio
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center my-6 sm:my-8 tracking-wide font-bold">
          Our Recent{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Work
          </span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto mt-4">
          See how we've helped businesses build faster, smarter websites with AI automation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 sm:p-8 hover:border-orange-500/50 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

