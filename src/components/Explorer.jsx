import "../styles/global.scss";
import "../styles/Explorer.scss";

const Explorer = () => {
  return (
    <section className="explorer-section">
      <h2>Explorer</h2>
      <div className="explorer__portfolio">
        Portfolio
        <ul className="explorer">
          <li className="explorer__item">
            <img src="/icons/icon-react.svg" width={20} alt="React icon" />
            <span className="explorer__name">home.jsx</span>
          </li>
          <li className="explorer__item">
            <img src="/icons/icon-html.svg" width={20} alt="HTML icon" />
            <span className="explorer__name">about.html</span>
          </li>
          <li className="explorer__item">
            <img src="/icons/icon-css.svg" width={20} alt="CSS icon" />
            <span className="explorer__name">contact.css</span>
          </li>
          <li className="explorer__item">
            <img src="/icons/icon-js.svg" width={20} alt="JavaScript icon" />
            <span className="explorer__name">projects.js</span>
          </li>
          <li className="explorer__item">
            <img src="/icons/icon-json.svg" width={20} alt="JSON icon" />

            <span className="explorer__name">articles.json</span>
          </li>
          <li className="explorer__item">
            <img src="/icons/icon-md.svg" width={20} alt="Markdown icon" />
            <span className="explorer__name">github.md</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Explorer;
