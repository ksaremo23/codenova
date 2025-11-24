import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-16 sm:mt-20 lg:mt-24 px-4" id="services">
      <div className="text-center mb-8">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xs sm:text-sm font-medium px-3 py-1 uppercase inline-block mb-4">
          Why Choose Us
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-6 tracking-wide font-bold">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            CodeNova AI
          </span>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-12 mt-10 sm:mt-12 lg:mt-16">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <img 
            src={codeImg} 
            alt="AI Automation" 
            className="w-full h-auto rounded-lg border border-neutral-700 shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 pt-4 lg:pt-12 order-1 lg:order-2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-8 sm:mb-10 lg:mb-12">
              <div className="flex-shrink-0 text-orange-500 mx-4 sm:mx-6 bg-neutral-900 h-12 w-12 sm:h-14 sm:w-14 p-3 justify-center items-center rounded-full border border-orange-500/20">
                {item.icon}
              </div>
              <div className="flex-1">
                <h5 className="mt-1 mb-2 sm:mb-3 text-lg sm:text-xl font-semibold">{item.title}</h5>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
