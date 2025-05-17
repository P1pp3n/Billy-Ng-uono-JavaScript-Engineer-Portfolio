import { useState, useRef, useEffect } from "react";
import Button from "./Button";

export default function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    isHiring: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const terminalRef = useRef(null);

  // Terminal-like typing effect
  useEffect(() => {
    if (debugMode && terminalRef.current) {
      const messages = [
        "> Initializing contact protocol...",
        "> Establishing secure connection...",
        "> Preparing form data structures...",
        "> Ready for user input!",
      ];

      let i = 0;
      const typeMessage = () => {
        if (i < messages.length) {
          terminalRef.current.innerHTML += `<div class="text-green-400">${messages[i]}</div>`;
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          i++;
          setTimeout(typeMessage, 800);
        }
      };

      terminalRef.current.innerHTML = "";
      typeMessage();
    }
  }, [debugMode]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      alert("Message sent! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        message: "",
        isHiring: false,
      });
    }, 1500);
  };

  return (
    <section
      id={id}
      className="min-h-screen py-20 px-6 ml-16 md:ml-48 relative overflow-hidden"
    >
      {/* Debug mode toggle */}
      <button
        onClick={() => setDebugMode(!debugMode)}
        className="absolute top-6 right-6 text-xs bg-slate-800 px-2 py-1 rounded text-orange-400 hover:bg-slate-700 transition"
      >
        {debugMode ? "EXIT DEBUG" : "DEBUG MODE"}
      </button>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-400 mb-2">
          Let's Connect
        </h2>
        <p className="text-slate-400 mb-8">
          Got a problem to solve? Need a JS wizard? Let's talk.
        </p>

        {debugMode ? (
          <div
            className="bg-slate-900 rounded-lg border border-slate-700 p-4 font-mono h-96 overflow-auto"
            ref={terminalRef}
          >
            {/* Terminal content will be injected here */}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Interactive Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
                <div className="absolute right-3 top-9 text-xs text-slate-500">
                  {formData.name.length}/50
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isHiring"
                  name="isHiring"
                  checked={formData.isHiring}
                  onChange={handleChange}
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-slate-700 rounded"
                />
                <label
                  htmlFor="isHiring"
                  className="ml-2 block text-sm text-slate-300"
                >
                  Are you hiring?
                </label>
              </div>

              <Button
                type="submit"
                text={isSubmitting ? "Sending..." : "Send Message"}
                disabled={isSubmitting}
                className="w-full"
              />
            </form>

            {/* Interactive Code Preview */}
            <div className="bg-slate-900/50 rounded-lg border border-slate-700 p-6 flex flex-col">
              <h3 className="text-lg font-medium text-slate-200 mb-4">
                Message Preview
              </h3>

              <div className="flex-1 bg-slate-800 rounded-md p-4 overflow-auto">
                <pre className="text-sm text-slate-300 font-mono">
                  <code>
                    {`// Message Configuration\n`}
                    {`const contactRequest = {\n`}
                    {`  from: "${formData.name || "Anonymous"}",\n`}
                    {`  email: "${formData.email || "not-provided"}",\n`}
                    {`  message: ${JSON.stringify(formData.message || "")},\n`}
                    {`  isHiring: ${formData.isHiring},\n`}
                    {`  timestamp: "${new Date().toISOString()}"\n`}
                    {`}`}
                  </code>
                </pre>
              </div>

              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      JSON.stringify(formData, null, 2)
                    )
                  }
                  className="text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded text-orange-400 transition"
                >
                  Copy as JSON
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Easter Egg - Only visible when hiring is checked */}
        {formData.isHiring && !debugMode && (
          <div className="mt-8 p-4 bg-orange-400/10 border border-orange-400/30 rounded-lg animate-pulse">
            <p className="text-orange-400 text-center">
              🎉 Woohoo! I'm currently available for new opportunities. Let's
              chat!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
