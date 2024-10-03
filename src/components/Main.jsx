import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Articles from "../pages/Articles";
import Github from "../pages/Github";
import "../styles/Main.scss";

const Main = () => {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/github" element={<Github />} />
      </Routes>
    </main>
  );
};
export default Main;
