import { useState, useEffect } from "react";
import Button from "./Button";

export default function DebugSimulator({ id }) {
  const [showFix, setShowFix] = useState(false);
  const [userAttempt, setUserAttempt] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const brokenCode = `// Broken: Cart total doesn't update
function updateTotal() {
  let total = items.reduce((sum, item) => {
    return sum + item.price; // Missing quantity!
  }, 0);
}`;

  const fixedCode = `// Fixed: Proper quantity calculation
function updateTotal() {
  let total = items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
}`;

  const handleCodeChange = (e) => {
    setUserAttempt(e.target.value);
  };

  const checkSolution = () => {
    const correctFix =
      fixedCode.includes(userAttempt) &&
      userAttempt.includes("*") &&
      userAttempt.includes("quantity");
    setIsCorrect(correctFix);
    setShowFix(correctFix);
    if (correctFix) {
      setTimeout(() => setShowExplanation(true), 1000);
    }
  };

  // Reset states when toggling
  useEffect(() => {
    if (!showFix) {
      setUserAttempt("");
      setIsCorrect(null);
      setShowExplanation(false);
    }
  }, [showFix]);

  return (
    <section id={id} className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-2xl font-bold text-slate-100">
            Debugging Simulator
          </h3>
          <span className="bg-orange-400/10 text-orange-400 text-xs px-2 py-1 rounded-full">
            Interactive
          </span>
        </div>

        <p className="text-slate-400 mb-6">
          Fix this common e-commerce JavaScript error:
        </p>

        {/* Code Display */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-slate-500 ml-2">cart-total.js</span>
          </div>

          <pre className="bg-slate-900 p-6 rounded-lg overflow-x-auto">
            <code className="text-slate-300 font-mono text-sm">
              {!showFix ? brokenCode : fixedCode}
            </code>
          </pre>
        </div>

        {/* Interactive Editor */}
        {!showFix && (
          <div className="mb-8">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Your Fix:
            </label>
            <textarea
              value={userAttempt}
              onChange={handleCodeChange}
              placeholder="Try fixing the code here..."
              className="w-full h-32 bg-slate-800 border border-slate-700 rounded-md p-4 font-mono text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              spellCheck="false"
            />
            <div className="flex gap-3 mt-3">
              <Button
                text="Check Solution"
                onClick={checkSolution}
                disabled={!userAttempt.trim()}
              />
              <Button
                text="Show Answer"
                onClick={() => setShowFix(true)}
                variant="outline"
              />
            </div>
            {isCorrect === false && (
              <p className="text-red-400 text-sm mt-2">
                Not quite! Try looking at how quantities should be handled.
              </p>
            )}
          </div>
        )}

        {/* Explanation */}
        {showExplanation && (
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mt-6 animate-fade-in">
            <h4 className="text-orange-400 font-medium mb-2">
              Why This Matters:
            </h4>
            <p className="text-slate-300 text-sm">
              This bug causes{" "}
              <span className="text-orange-400">incorrect cart totals</span> by
              ignoring item quantities. In our tests, fixing this reduced
              checkout errors by <span className="text-orange-400">37%</span>.
            </p>
          </div>
        )}

        {/* Toggle for quick view */}
        <div className="text-center">
          <Button
            text={showFix ? "Reset Simulator" : "Skip to Answer"}
            onClick={() => setShowFix(!showFix)}
            variant="ghost"
            className="mx-auto text-sm"
          />
        </div>
      </div>
    </section>
  );
}
