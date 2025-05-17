import { useEffect, useState } from "react";
import debounce from "lodash.debounce"

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrolled(window.scrollY > 50);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, section) => {
    e.preventDefault();
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      className={`fixed top-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-slate-950/90 py-3" : "bg-slate-950/80 py-4"
      } backdrop-blur-md border-b border-slate-800 md:hidden`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-around">
          {["home", "about", "projects", "debugger", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => handleNavClick(e, section)}
                className={`text-xs sm:text-sm uppercase tracking-wider px-2 py-3 transition-colors ${
                  activeSection === section
                    ? "text-orange-400 font-medium"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {/* Mobile-friendly icons with labels */}
                <div className="flex flex-col items-center">
                  <span className="hidden sm:inline">{section}</span>
                  <span className="sm:hidden text-lg">
                    {
                      {
                        home: "🏠",
                        about: "👤",
                        projects: "💼",
                        debugger: "🐞",
                        contact: "📩",
                      }[section]
                    }
                  </span>
                </div>
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
