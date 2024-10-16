import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Articles from "../pages/Articles";
import Github from "../pages/Github";
import Tooling from "../pages/Tooling";
import Uses from "../pages/Uses";
import Timeline from "../pages/Timeline";
import Settings from "../pages/Settings";

import "../styles/Main.scss";

const Main = () => {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/github" element={<Github />} />
        <Route path="/tooling" element={<Tooling />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </main>
  );
};
export default Main;
