import "../styles/global.scss";
import "../styles/Tabsbar.scss";
import TabsbarItem from "./TabsbarItem";

const Tabsbar = () => {
  return (
    <div className="tabsbar">
      <div className="tabsbar__tabs">
        <ul className="tabsbar">
          <TabsbarItem to="/" icon="/icons/icon-react.svg" name="home.jsx" />
          <TabsbarItem
            to="/about"
            icon="/icons/icon-html.svg"
            name="about.html"
          />
          <TabsbarItem
            to="/contact"
            icon="/icons/icon-css.svg"
            name="contact.css"
          />
          <TabsbarItem
            to="/projects"
            icon="/icons/icon-js.svg"
            name="projects.js"
          />
          <TabsbarItem
            to="/skills"
            icon="/icons/icon-ts.svg"
            name="skills.ts"
          />
          <TabsbarItem
            to="/articles"
            icon="/icons/icon-json.svg"
            name="articles.json"
          />
          <TabsbarItem
            to="/github"
            icon="/icons/icon-md.svg"
            name="github.md"
          />
        </ul>
      </div>
    </div>
  );
};

export default Tabsbar;
