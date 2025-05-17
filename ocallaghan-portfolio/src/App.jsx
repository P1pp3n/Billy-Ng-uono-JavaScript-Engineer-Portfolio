import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex">
      {/* Left Column - Navigation */}
      <Sidebar activeSection={activeSection} />

      {/* Right Column - Content */}
      <div className="flex-1 overflow-y-auto">
        <Navbar activeSection={activeSection} />
        <MainContent setActiveSection={setActiveSection} />
        <Footer />
      </div>
    </div>
  );
}
