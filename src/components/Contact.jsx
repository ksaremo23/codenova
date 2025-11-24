import { Calendar, Mail, MessageSquare, Sparkles } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/meowovwn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error", error);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mt-16 sm:mt-20 lg:mt-24 px-4" id="contact">
      <div className="text-center mb-12">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xs sm:text-sm font-medium px-3 py-1 uppercase inline-block mb-4">
          Get Started
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center my-6 sm:my-8 tracking-wide font-bold">
          Want to See{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            What's Possible?
          </span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-auto mt-4 font-medium">
          Request a free video audit of your current website.
        </p>
        <p className="text-neutral-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
          Book a free consultation or send us a message. We'll respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
            <MessageSquare className="text-orange-500" size={24} />
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
              >
                <option value="">Select a service</option>
                <option value="landing-page">AI-Powered Landing Page</option>
                <option value="business-website">5-Page Business Website</option>
                <option value="chatbot">AI Chatbot Integration</option>
                <option value="revamp">Website Revamp + Speed</option>
                <option value="maintenance">Monthly Maintenance</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-900 transition-all duration-200 font-medium flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={status === "loading"}
            >
              <Mail size={20} />
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            <p
              className={`text-sm mt-4 ${
                status === "success"
                  ? "text-green-400"
                  : status === "error"
                  ? "text-red-400"
                  : "text-neutral-500"
              }`}
              aria-live="polite"
            >
              {status === "success" &&
                "Thanks! We'll send the video audit to your inbox within 24 hours."}
              {status === "error" &&
                "Something went wrong. Please try again or email us directly."}
              {status === "idle" &&
                "We usually respond within a few hours during business days."}
            </p>
          </form>
        </div>

        {/* Calendly Booking */}
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="text-orange-500" size={24} />
            Request Free Video Audit
          </h3>
          <p className="text-neutral-400 mb-6">
            Get a personalized video audit of your current website. We'll show you exactly what's possible with AI-powered development and how we can help you grow faster.
          </p>
          
          {/* Calendly Embed - Replace with your actual Calendly URL */}
          <div className="bg-neutral-800 rounded-lg p-8 text-center border border-neutral-700">
            <Sparkles className="mx-auto mb-4 text-orange-500" size={48} />
            <p className="text-neutral-300 mb-4 font-medium">
              Book your free video audit
            </p>
            <a
              href="https://calendly.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-900 transition-all duration-200 font-medium"
            >
              <Calendar size={20} />
              Book Free Audit
            </a>
            <p className="text-xs text-neutral-500 mt-4">
              Replace the Calendly URL in Contact.jsx with your actual link
            </p>
          </div>

          {/* Alternative: Direct Calendly embed */}
          {/* 
          <div className="calendly-inline-widget" 
               data-url="https://calendly.com/your-username" 
               style={{minWidth: '320px', height: '630px'}}>
          </div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          */}
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-12 text-center">
        <p className="text-neutral-400 mb-4">Or reach out directly:</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="mailto:hello@codenovaai.com"
            className="flex items-center gap-2 text-neutral-300 hover:text-orange-500 transition-colors"
          >
            <Mail size={20} />
            hello@codenovaai.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

