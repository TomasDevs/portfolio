import "../styles/global.scss";
import "../styles/Tabsbar.scss";
import { NavLink } from "react-router-dom";

const Tabsbar = () => {
  return (
    <div className="tabsbar">
      <div className="tabsbar__tabs">
        <ul className="tabsbar">
          <li className="tabsbar__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "tabsbar__link -active" : "tabsbar__link"
              }>
              <img src="/icons/icon-react.svg" width={20} alt="React icon" />
              <span className="tabsbar__name">home.jsx</span>
            </NavLink>
          </li>

          <li className="tabsbar__item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "tabsbar__link -active" : "tabsbar__link"
              }>
              <img src="/icons/icon-html.svg" width={20} alt="HTML icon" />
              <span className="tabsbar__name">about.html</span>
            </NavLink>
          </li>

          <li className="tabsbar__item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "tabsbar__link -active" : "tabsbar__link"
              }>
              <img src="/icons/icon-css.svg" width={20} alt="CSS icon" />
              <span className="tabsbar__name">contact.css</span>
            </NavLink>
          </li>

          <li className="tabsbar__item">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "tabsbar__link -active" : "tabsbar__link"
              }>
              <img src="/icons/icon-js.svg" width={20} alt="JavaScript icon" />
              <span className="tabsbar__name">projects.js</span>
            </NavLink>
          </li>

          <li className="tabsbar__item">
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                isActive ? "tabsbar__link -active" : "tabsbar__link"
              }>
              <img src="/icons/icon-json.svg" width={20} alt="JSON icon" />
              <span className="tabsbar__name">articles.json</span>
            </NavLink>
          </li>

          <li className="tabsbar__item">
            <NavLink
              to="/github"
              className={({ isActive }) =>
                isActive ? "tabsbar__link -active" : "tabsbar__link"
              }>
              <img src="/icons/icon-md.svg" width={20} alt="Markdown icon" />
              <span className="tabsbar__name">github.md</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabsbar;
