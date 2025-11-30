import { Link } from "react-router-dom";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-16 sm:mt-20 lg:mt-24 border-t py-8 sm:py-10 lg:py-12 border-neutral-700">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 px-4">
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Resources</h3>
          <ul className="space-y-2 sm:space-y-3">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm sm:text-base text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Platform</h3>
          <ul className="space-y-2 sm:space-y-3">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm sm:text-base text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Community</h3>
          <ul className="space-y-2 sm:space-y-3">
            {communityLinks.map((link, index) => (
              <li key={index}>
                {link.href === "#" && link.text === "Blog" ? (
                  <Link
                    to="/blog"
                    className="text-sm sm:text-base text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.text}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-neutral-800 text-center px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img className="h-6 w-6" src={logo} alt="CodeNova AI agency Philippines icon" />
          <span className="text-base font-semibold">
            Code<span className="text-orange-500">Nova</span> AI
          </span>
        </div>
        <p className="text-sm sm:text-base text-neutral-500 mb-2">
          Taguig AI services, AI automation for business, and hire front-end developer Philippines retainers.
        </p>
        <p className="text-xs sm:text-sm text-neutral-600">
          © {new Date().getFullYear()} CodeNova AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
