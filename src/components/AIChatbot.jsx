import { chatbotBenefits } from "../constants";

const AIChatbot = () => {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24 px-4 bg-neutral-950/40 border-y border-neutral-800" id="ai-chatbot">
      <div className="max-w-5xl mx-auto text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xs sm:text-sm font-medium px-3 py-1 uppercase inline-block mb-4">
          AI Chatbot for Small Business
        </span>
        <h2 className="text-2xl sm:4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
          Conversational AI that{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Increases Sales
          </span>
        </h2>
        <p className="text-neutral-300 mt-4 max-w-3xl mx-auto text-base sm:text-lg">
          We design, train, and maintain bilingual AI chatbots that guide shoppers, respond to prospects, and schedule appointments for Philippine SMEs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mt-10">
        {chatbotBenefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 hover:border-orange-500/60 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              <span className="text-sm text-orange-400 font-medium">{benefit.stat}</span>
            </div>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-neutral-400 text-sm sm:text-base mb-4">
          Need a demo? We'll build a working chatbot on your data in under 5 days.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-8 rounded-lg text-white font-medium hover:from-orange-600 hover:to-orange-900 transition-all duration-200"
        >
          Book AI Chatbot Strategy Call
        </a>
      </div>
    </section>
  );
};

export default AIChatbot;

