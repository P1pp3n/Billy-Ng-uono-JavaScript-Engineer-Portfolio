import { useEffect, useRef } from "react";
import Header from "./Header";
import Projects from "./Projects";
import DebugSimulator from "./DebugSimulator";
import Contact from "./Contact";
import About from "./About";

export default function MainContent({ setActiveSection }) {
  const sectionRefs = useRef({});

  // Configure sections
  const sections = [
    { id: "home", component: <Header id="home" /> },
    { id: "about", component: <About id="about" /> },
    { id: "projects", component: <Projects id="projects" /> },
    { id: "debugger", component: <DebugSimulator id="debugger" /> },
    { id: "contact", component: <Contact id="contact" /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null;
        let highestRatio = 0;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > highestRatio) {
            highestRatio = entry.intersectionRatio;
            mostVisible = entry.target.id;
          }
        });

        if (mostVisible && highestRatio > 0.3) {
          setActiveSection(mostVisible);
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 1.0],
        rootMargin: "-90px 0px -40% 0px", // Tighter detection zone
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Set ref callback for each section
  const setSectionRef = (id) => (ref) => {
    sectionRefs.current[id] = ref;
  };

  return (
    <main className="ml-16 md:ml-48 pl-4 pr-6 scroll-smooth">
      {sections.map(({ id, component }) => (
        <div
          key={id}
          id={id}
          ref={setSectionRef(id)}
          className="min-h-screen flex items-center py-20 first:pt-0 last:pb-0"
        >
          {component}
        </div>
      ))}
    </main>
  );
}
