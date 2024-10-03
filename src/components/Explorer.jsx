import "../styles/global.scss";
import "../styles/Explorer.scss";
import { NavLink } from "react-router-dom";

const Explorer = () => {
  return (
    <section className="explorer-section">
      <h2>Explorer</h2>
      <div className="explorer__portfolio">
        Portfolio
        <ul className="explorer">
          <li className="explorer__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "explorer__link -active" : "explorer__link"
              }>
              <img src="/icons/icon-react.svg" width={20} alt="React icon" />
              <span className="explorer__name">home.jsx</span>
            </NavLink>
          </li>

          <li className="explorer__item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "explorer__link -active" : "explorer__link"
              }>
              <img src="/icons/icon-html.svg" width={20} alt="HTML icon" />
              <span className="explorer__name">about.html</span>
            </NavLink>
          </li>

          <li className="explorer__item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "explorer__link -active" : "explorer__link"
              }>
              <img src="/icons/icon-css.svg" width={20} alt="CSS icon" />
              <span className="explorer__name">contact.css</span>
            </NavLink>
          </li>

          <li className="explorer__item">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "explorer__link -active" : "explorer__link"
              }>
              <img src="/icons/icon-js.svg" width={20} alt="JavaScript icon" />
              <span className="explorer__name">projects.js</span>
            </NavLink>
          </li>

          <li className="explorer__item">
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                isActive ? "explorer__link -active" : "explorer__link"
              }>
              <img src="/icons/icon-json.svg" width={20} alt="JSON icon" />
              <span className="explorer__name">articles.json</span>
            </NavLink>
          </li>

          <li className="explorer__item">
            <NavLink
              to="/github"
              className={({ isActive }) =>
                isActive ? "explorer__link -active" : "explorer__link"
              }>
              <img src="/icons/icon-md.svg" width={20} alt="Markdown icon" />
              <span className="explorer__name">github.md</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Explorer;
