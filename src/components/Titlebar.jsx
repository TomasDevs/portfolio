import "../styles/global.scss";
import "../styles/Titlebar.scss";

const Titlebar = () => {
  return (
    <div className="titlebar">
      <div className="titlebar__logo">
        <img
          src="/icons/icon-vs-code.svg"
          width={20}
          height={20}
          alt="Logo Visual Studio Code"
        />
      </div>

      <ul className="titlebar__menu">
        <li className="titlebar__menu-item">File</li>
        <li className="titlebar__menu-item">Edit</li>
        <li className="titlebar__menu-item">Selection</li>
        <li className="titlebar__menu-item">View</li>
        <li className="titlebar__menu-item">Go</li>
        <li className="titlebar__menu-item">Run</li>
        <li className="titlebar__menu-item">Terminal</li>
        <li className="titlebar__menu-item">Help</li>
      </ul>

      <div className="titlebar__name">Tomas Stveracek - portfolio</div>

      <div className="titlebar__buttons">
        <button
          className="titlebar__button minimize"
          aria-label="Minimize"></button>
        <button
          className="titlebar__button maximize"
          aria-label="Maximize"></button>
        <button className="titlebar__button close" aria-label="Close"></button>
      </div>
    </div>
  );
};

export default Titlebar;
