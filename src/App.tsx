import { useState, useEffect } from "react";
import Main from "./components/Main";
import FadeIn from "./components/FadeIn";
import "./index.scss";
import Education from "./components/Education";
import Navigation from "./components/Navigation";
import Expertise from "./components/Expertise";
import Timeline from "./components/Timeline";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reference from "./components/Reference";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Reference />
        <Education />
        <Timeline />
        <Project />
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
