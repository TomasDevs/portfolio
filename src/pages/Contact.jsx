import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <pre>
        <code>
          <span className="line-number">1</span>{" "}
          <span className="selector">.contact</span> {"{"} {"\n"}
          <span className="line-number">2</span> &nbsp;&nbsp;
          <span className="property">website</span>:{" "}
          <a href="https://web.com/" className="value">
            https://web.com/
          </a>
          ; {"\n"}
          <span className="line-number">3</span> &nbsp;&nbsp;
          <span className="property">codepen</span>:{" "}
          <a href="https://codepen.io/username" className="value">
            https://codepen.io/username
          </a>
          ; {"\n"}
          <span className="line-number">4</span> &nbsp;&nbsp;
          <span className="property">polywork</span>:{" "}
          <a href="https://polywork.com/username" className="value">
            https://polywork.com/username
          </a>
          ; {"\n"}
          <span className="line-number">5</span> &nbsp;&nbsp;
          <span className="property">linkedin</span>:{" "}
          <a href="https://linkedin.com/in/username" className="value">
            https://linkedin.com/in/username
          </a>
          ; {"\n"}
          <span className="line-number">6</span> &nbsp;&nbsp;
          <span className="property">github</span>:{" "}
          <a href="https://github.com/username" className="value">
            https://github.com/username
          </a>
          ; {"\n"}
          <span className="line-number">7</span> &nbsp;&nbsp;
          <span className="property">email</span>:{" "}
          <a href="mailto:user@email.com" className="value">
            user@email.com
          </a>
          ; {"\n"}
          <span className="line-number">8</span> {"}"}
        </code>
      </pre>
    </div>
  );
};

export default Contact;
