import { useEffect, useState } from "react";
import Button from "./Button";

export default function Header() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const phrases = [
      "e-commerce checkouts",
      "SaaS dashboards",
      "conversion rates",
    ];
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;

    const type = () => {
      if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase.push(phrases[i][j]);
          j++;
          setTypedText(currentPhrase.join(""));
        }

        if (isDeleting && j >= 0) {
          currentPhrase.pop();
          j--;
          setTypedText(currentPhrase.join(""));
        }

        if (j === phrases[i].length) isDeleting = true;
        if (isDeleting && j === 0) {
          currentPhrase = [];
          isDeleting = false;
          i = i === phrases.length - 1 ? 0 : i + 1;
        }
      }
      setTimeout(type, isDeleting ? 50 : 100);
    };

    type();
  }, []);

  return (
    <header id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
          I fix{" "}
          <span className="text-orange-400 border-b-2 border-dashed border-orange-400">
            {typedText}
          </span>
          <span className="animate-pulse">|</span> with JavaScript
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto md:mx-0 mb-8">
          Building solutions that increase conversions by 20%+ for online
          stores.
        </p>
        <Button href="#projects" text="See My Work →" />
      </div>
    </header>
  );
}
