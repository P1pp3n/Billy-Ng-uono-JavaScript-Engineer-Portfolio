import { useEffect, useRef } from "react";
import  debounce  from "lodash.debounce";

export default function Sidebar({ activeSection }) {
  const indicatorRef = useRef(null);
  const sidebarRef = useRef(null);

  const sections = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "👨‍💻" },
    { id: "projects", label: "Work", icon: "💻" },
    { id: "debugger", label: "Debugger", icon: "🐞" },
    { id: "contact", label: "Contact", icon: "📩" },
  ];

  // Enhanced indicator positioning
  useEffect(() => {
    const activeIndex = sections.findIndex((s) => s.id === activeSection);
    if (indicatorRef.current && activeIndex >= 0) {
      indicatorRef.current.style.transform = `translateY(${
        activeIndex * 56
      }px)`;

      // Auto-scroll sidebar if active item is out of view
      const sidebar = sidebarRef.current;
      const activeItem = sidebar?.querySelector(`a[href="#${activeSection}"]`);
      if (activeItem) {
        const itemTop = activeItem.offsetTop;
        const itemHeight = activeItem.offsetHeight;
        const sidebarHeight = sidebar.offsetHeight;

        if (
          itemTop < sidebar.scrollTop ||
          itemTop + itemHeight > sidebar.scrollTop + sidebarHeight
        ) {
          sidebar.scrollTo({
            top: itemTop - sidebarHeight / 2 + itemHeight / 2,
            behavior: "smooth",
          });
        }
      }
    }
  }, [activeSection]);

  // Smooth scroll handler
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      ref={sidebarRef}
      className="w-16 md:w-48 fixed h-full border-r border-slate-800 flex flex-col items-center pt-32 bg-slate-950/50 backdrop-blur-lg z-20 overflow-y-auto custom-scrollbar"
    >
      <div className="relative min-h-[calc(5*56px)] w-full">
        {" "}
        {/* Adjusted for 5 items */}
        <div
          ref={indicatorRef}
          className="absolute left-0 w-1 h-14 bg-orange-400 rounded-r transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"
          style={{ transform: "translateY(0px)" }}
        />
        <nav className="flex flex-col gap-2 pl-6 pb-8">
          {" "}
          {/* Added padding-bottom */}
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleNavClick(e, section.id)}
              className={`group flex items-center h-14 w-full pr-4 ${
                activeSection === section.id
                  ? "text-orange-400"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <span className="text-xl mr-3 flex-shrink-0">{section.icon}</span>
              <span className="hidden md:inline-block transition-all duration-300 group-hover:translate-x-1 truncate">
                {section.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
