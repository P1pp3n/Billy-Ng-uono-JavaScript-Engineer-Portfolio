import Button from "./Button";

const projects = [
  {
    title: "1-Click Checkout Extension",
    metrics: ["+22% conversions", "-3s checkout time"],
    problem: "70% cart abandonment due to complex flows",
    solution: "Chrome Extension that bypasses unnecessary steps",
    tech: "JavaScript, Stripe API, Chrome Manifest V3",
  },
  {
    title: "Cart Recovery Widget",
    metrics: ["15% recovery rate", "$28K saved"],
    problem: "Users leave without purchasing",
    solution: "Exit-intent popup with personalized offer",
    tech: "JavaScript, Firebase, CSS Animations",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 text-center">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-orange-400 mb-3">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.map((metric, i) => (
                  <span
                    key={i}
                    className="bg-orange-400/10 text-orange-400 px-3 py-1 rounded-full text-sm"
                  >
                    {metric}
                  </span>
                ))}
              </div>
              <p className="text-slate-300 mb-2">
                <strong className="text-slate-100">Problem:</strong>{" "}
                {project.problem}
              </p>
              <p className="text-slate-300 mb-4">
                <strong className="text-slate-100">Solution:</strong>{" "}
                {project.solution}
              </p>
              <p className="text-slate-400 text-sm mb-6">
                <strong>Tech:</strong> {project.tech}
              </p>
              <Button text="View Case Study" variant="ghost" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
