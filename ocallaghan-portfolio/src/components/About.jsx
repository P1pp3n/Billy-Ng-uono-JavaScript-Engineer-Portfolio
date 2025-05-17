import { useRef, useEffect } from "react";
import Button from "./Button";

export default function About({ id }) {
  const codeRef = useRef(null);

  // Typewriter effect for code snippet
  useEffect(() => {
    const code = `const billy = {
  coreSkills: ['JavaScript', 'React', 'Node.js'],
  focusAreas: [
    'Reducing e-commerce cart abandonment',
    'Fixing SaaS dashboard bottlenecks',
    'Debugging performance-critical apps'
  ],
  philosophy: 'Ship solutions → Measure impact → Iterate',
  availableForFreelance: ${new Date().getFullYear() + 1}
};`;

    let i = 0;
    const type = () => {
      if (codeRef.current && i < code.length) {
        codeRef.current.textContent = code.substring(0, i + 1);
        i++;
        setTimeout(type, i % 10 === 0 ? 50 : 10); // Randomize typing speed
      }
    };

    const timer = setTimeout(type, 1000); // Delay start

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id={id} className="min-h-screen py-20 px-6 ml-16 md:ml-48">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-400 mb-6">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Bio */}
          <div className="space-y-6">
            <p className="text-slate-300">
              I'm Billy, a{" "}
              <span className="text-orange-400">JavaScript specialist</span> who
              builds tools that solve real business problems—not just pretty
              UIs.
            </p>

            <p className="text-slate-300">
              After seeing too many companies struggle with{" "}
              <span className="text-orange-400">avoidable technical debt</span>,
              I focus on solutions that deliver measurable impact:
            </p>

            <ul className="list-disc list-inside text-slate-400 space-y-2 pl-4">
              <li>22% faster checkouts for e-commerce stores</li>
              <li>15% reduction in SaaS user churn</li>
              <li>40% fewer support tickets through proactive debugging</li>
            </ul>

            <div className="pt-4">
              <Button
                href="#contact"
                text="Need this kind of impact?"
                variant="outline"
              />
            </div>
          </div>

          {/* Interactive Code Block */}
          <div className="bg-slate-900 rounded-lg border border-slate-700 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-slate-500 ml-2">about-me.js</span>
            </div>

            <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
              <code ref={codeRef} className="whitespace-pre"></code>
            </pre>

            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  codeRef.current?.textContent || ""
                )
              }
              className="mt-4 text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded text-orange-400 transition"
            >
              Copy Code
            </button>
          </div>
        </div>

        {/* Skills Visualization */}
        <div className="mt-16">
          <h3 className="text-xl font-medium text-slate-200 mb-6">
            Problem-Solving Toolkit
          </h3>
          <div className="flex flex-wrap gap-4">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Chrome Extensions",
              "Performance Debugging",
              "Stripe API",
              "Firebase",
              "Data Visualization",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-orange-400 hover:bg-slate-800 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
