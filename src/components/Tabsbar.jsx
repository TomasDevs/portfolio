import "../styles/global.scss";
import "../styles/Tabsbar.scss";

const Tabsbar = () => {
  return (
    <div className="tabsbar">
      <div className="tabsbar__tabs">
        <ul className="tabsbar">
          <li className="tabsbar__item">
            <img src="/icons/icon-react.svg" width={20} alt="React icon" />
            <span className="tabsbar__name">home.jsx</span>
          </li>
          <li className="tabsbar__item">
            <img src="/icons/icon-html.svg" width={20} alt="HTML icon" />
            <span className="tabsbar__name">about.html</span>
          </li>
          <li className="tabsbar__item">
            <img src="/icons/icon-css.svg" width={20} alt="CSS icon" />
            <span className="tabsbar__name">contact.css</span>
          </li>
          <li className="tabsbar__item">
            <img src="/icons/icon-js.svg" width={20} alt="JavaScript icon" />
            <span className="tabsbar__name">projects.js</span>
          </li>
          <li className="tabsbar__item">
            <img src="/icons/icon-json.svg" width={20} alt="JSON icon" />

            <span className="tabsbar__name">articles.json</span>
          </li>
          <li className="tabsbar__item">
            <img src="/icons/icon-md.svg" width={20} alt="Markdown icon" />
            <span className="tabsbar__name">github.md</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabsbar;
