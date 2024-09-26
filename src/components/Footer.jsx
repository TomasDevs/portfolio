import "../styles/global.scss";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <ul className="footer-list">
          <li className="footer-list__item">main</li>
          <li className="footer-list__item">Lanchpad</li>
        </ul>
      </div>

      <div className="footer__right">
        <ul className="footer-list">
          <li className="footer-list__item">Watch Sass</li>
          <li className="footer-list__item">UTF-8</li>
          <li className="footer-list__item">JavaScript JSX</li>
          <li className="footer-list__item">Go Live</li>
          <li className="footer-list__item">Prettier</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
