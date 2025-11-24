import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 py-3 backdrop-blur-lg border-b transition-all duration-300 ${
      scrolled ? "bg-neutral-900/95 border-neutral-700" : "bg-neutral-900/80 border-neutral-700/80"
    }`}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-8 w-8 sm:h-10 sm:w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-lg sm:text-xl tracking-tight font-semibold">
              Code<span className="text-orange-500">Nova</span> AI
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-8 xl:space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  className="text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-6 xl:space-x-8 items-center">
            <a 
              href="#" 
              className="py-2 px-4 border border-neutral-600 rounded-md hover:border-neutral-400 transition-colors duration-200"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md hover:from-orange-600 hover:to-orange-900 transition-all duration-200"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden">
            <button 
              onClick={toggleNavbar}
              className="p-2 text-neutral-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed inset-0 top-[73px] z-40 bg-neutral-900 w-full h-screen p-8 flex flex-col justify-start items-center lg:hidden animate-in slide-in-from-top">
            <ul className="w-full space-y-4 text-center">
              {navItems.map((item, index) => (
                <li key={index} className="py-3">
                  <a 
                    href={item.href}
                    onClick={closeNavbar}
                    className="text-xl text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4 mt-8 w-full max-w-xs">
              <a 
                href="#" 
                onClick={closeNavbar}
                className="py-3 px-4 border border-neutral-600 rounded-md text-center hover:border-neutral-400 transition-colors duration-200"
              >
                Sign In
              </a>
              <a
                href="#"
                onClick={closeNavbar}
                className="py-3 px-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-center hover:from-orange-600 hover:to-orange-900 transition-all duration-200"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
