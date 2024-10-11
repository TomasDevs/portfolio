import "../styles/global.scss";
import "../styles/Explorer.scss";
import { useState } from "react";
import ExplorerItem from "./ExplorerItem";

const Explorer = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="explorer-section">
      <h2 className="explorer__title">Explorer</h2>
      <div className="explorer__portfolio">
        <h3 className="explorer__portfolio-title" onClick={handleToggle}>
          <img
            src="/icons/arrow-down.svg"
            width={20}
            alt="Arrow toggle"
            className={`explorer__arrow ${isOpen ? "-open" : "-closed"}`}
          />
          Portfolio
        </h3>
        <ul className={`explorer__list ${isOpen ? "" : "-collapsed"}`}>
          <ExplorerItem to="/" icon="/icons/icon-react.svg" name="home.jsx" />
          <ExplorerItem
            to="/about"
            icon="/icons/icon-html.svg"
            name="about.html"
          />
          <ExplorerItem
            to="/contact"
            icon="/icons/icon-css.svg"
            name="contact.css"
          />
          <ExplorerItem
            to="/projects"
            icon="/icons/icon-js.svg"
            name="projects.js"
          />
          <ExplorerItem
            to="/skills"
            icon="/icons/icon-ts.svg"
            name="skills.js"
          />
          <ExplorerItem
            to="/articles"
            icon="/icons/icon-json.svg"
            name="articles.json"
          />
          <ExplorerItem
            to="/github"
            icon="/icons/icon-md.svg"
            name="github.md"
          />
        </ul>
      </div>
    </section>
  );
};

export default Explorer;
