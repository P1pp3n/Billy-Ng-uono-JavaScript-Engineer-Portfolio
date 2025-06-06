import { useState } from "react";

export default function Footer() {
  const [clickCount, setClickCount] = useState(0);
  const [showEgg, setShowEgg] = useState(false);

  const handleCoffeeClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 3) {
      setShowEgg(true);
      setTimeout(() => setShowEgg(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-900/80 py-12 border-t border-slate-800 ml-16 md:ml-48 pl-6 pr-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links - Now with proper visibility */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-400 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          {/* Copyright + Easter Egg */}
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-sm">
              Made with <span className="text-orange-400">♥</span> and
              <button
                onClick={handleCoffeeClick}
                className="ml-1 text-orange-400 hover:underline focus:outline-none"
              >
                excessive caffeine
              </button>
            </p>
            {showEgg && (
              <p className="text-xs text-orange-400 mt-1 animate-bounce">
                console.log("☕ x 3 + 2 energy drinks");
              </p>
            )}
            <p className="text-slate-600 text-sm mt-2">
              © {new Date().getFullYear()} Billy.js. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
