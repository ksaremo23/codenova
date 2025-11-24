import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-16 sm:mt-20 lg:mt-24 tracking-wide px-4">
      <div className="text-center mb-8 sm:mb-12">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xs sm:text-sm font-medium px-3 py-1 uppercase inline-block mb-4">
          Social Proof
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center my-6 sm:my-8 font-bold">
          What People are{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Saying
          </span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-auto mt-4 font-medium">
          Cleaner UI, faster performance, and higher conversions—all powered by AI.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full">
            <div className="bg-neutral-900 rounded-lg p-6 sm:p-8 text-sm sm:text-base border border-neutral-800 hover:border-neutral-700 transition-all duration-300 h-full flex flex-col">
              <p className="text-neutral-300 leading-relaxed mb-6 flex-grow">{testimonial.text}</p>
              <div className="flex items-center mt-auto">
                <img
                  className="w-12 h-12 sm:w-14 sm:h-14 mr-4 rounded-full border-2 border-neutral-700 object-cover"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6 className="font-semibold text-base sm:text-lg">{testimonial.user}</h6>
                  <span className="text-xs sm:text-sm text-neutral-500 italic">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
