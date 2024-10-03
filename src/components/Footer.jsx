import "../styles/global.scss";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <ul className="footer-list">
          <li className="footer-list__item">main</li>
          <li className="footer-list__item">Lanchpad</li>
          <li className="footer-list__item -error">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z"></path>
            </svg>
            <span className="error">0</span>
          </li>
          <li className="footer-list__item -warning">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg">
              <title>warning</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="invisible_box" data-name="invisible box">
                  <rect width="48" height="48" fill="none" />
                </g>
                <g id="icons_Q2" data-name="icons Q2">
                  <g>
                    <path d="M24,9,40.6,39H7.5L24,9M2.3,40A2,2,0,0,0,4,43H44a2,2,0,0,0,1.7-3L25.7,4a2,2,0,0,0-3.4,0Z" />
                    <path d="M22,19v9a2,2,0,0,0,4,0V19a2,2,0,0,0-4,0Z" />
                    <circle cx="24" cy="34" r="2" />
                  </g>
                </g>
              </g>
            </svg>
            <span className="warning">0</span>
          </li>
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
