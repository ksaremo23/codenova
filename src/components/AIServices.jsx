import { aiServices } from "../constants";

const AIServices = () => {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24 px-4" id="ai-services">
      <div className="max-w-5xl mx-auto text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xs sm:text-sm font-medium px-3 py-1 uppercase inline-block mb-4">
          AI Services
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide font-bold">
          Done-for-you AI Automation for{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Philippine Teams
          </span>
        </h2>
        <p className="text-neutral-300 max-w-3xl mx-auto mt-4 text-base sm:text-lg">
          Each engagement comes with strategy, technical implementation, and training so your team can scale with AI safely.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-10 max-w-6xl mx-auto">
        {aiServices.map((service, index) => (
          <article
            key={service.title}
            className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8 hover:border-orange-500/60 transition-all duration-300"
          >
            <header>
              <p className="text-xs uppercase tracking-wide text-orange-500 mb-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">{service.title}</h3>
              <p className="text-neutral-400 mt-3 text-sm sm:text-base leading-relaxed">
                {service.summary}
              </p>
            </header>
            <ul className="mt-5 space-y-2 text-sm sm:text-base text-neutral-300">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AIServices;

