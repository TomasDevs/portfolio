import "../styles/Home.scss";

const Home = () => {
  const name = "Tomas Stveracek";
  const age = new Date().getFullYear() - 1995;
  const skills = [
    "HTML5",
    "CSS3",
    "SASS",
    "TailwindCSS",
    "JavaScript",
    "React",
    "Node.js",
  ];

  return (
    <div className="home-page">
      <pre>
        <code>
          <span className="line-number">1</span>{" "}
          <span className="keyword">import</span> React{" "}
          <span className="keyword">from</span>{" "}
          <span className="string">"react"</span>; {"\n"}
          <span className="line-number">2</span> {"\n"}
          <span className="line-number">3</span>{" "}
          <span className="keyword">const</span>{" "}
          <span className="variable">Person</span> = () =&gt; {"{"} {"\n"}
          <span className="line-number">4</span> &nbsp;&nbsp;
          <span className="keyword">const</span>{" "}
          <span className="variable">name</span> ={" "}
          <span className="string">"Tomas Stveracek"</span>; {"\n"}
          <span className="line-number">5</span> &nbsp;&nbsp;
          <span className="keyword">const</span>{" "}
          <span className="variable">age</span> ={" "}
          <span className="function">new Date().getFullYear()</span> - 1995;{" "}
          {"\n"}
          <span className="line-number">6</span> &nbsp;&nbsp;
          <span className="keyword">const</span>{" "}
          <span className="variable">skills</span> ={" "}
          <span className="array">
            ["HTML5", "CSS3", "SASS", "TailwindCSS", "JavaScript", "React",
            "Node.js"]
          </span>
          ; {"\n"}
          <span className="line-number">7</span> &nbsp;&nbsp;
          <span className="keyword">return</span> ({"\n"}
          <span className="line-number">8</span> &nbsp;&nbsp;&nbsp;&nbsp;&lt;
          <span className="element">div</span>&gt;{"\n"}
          <span className="line-number">9</span>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
          <span className="element">h1</span>&gt;My name is {"{"}
          <span className="variable">name</span>
          {"}"}.&lt;/<span className="element">h1</span>&gt;{"\n"}
          <span className="line-number">10</span>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
          <span className="element">p</span>&gt;I am {"{"}
          <span className="variable">age</span>
          {"}"} years old.&lt;/<span className="element">p</span>&gt;{"\n"}
          <span className="line-number">11</span>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
          <span className="element">p</span>&gt;Skills: {"{"}
          <span className="variable">skills</span>.join(", "){"}"}.&lt;/
          <span className="element">p</span>&gt;{"\n"}
          <span className="line-number">12</span> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/
          <span className="element">div</span>&gt;{"\n"}
          <span className="line-number">13</span> &nbsp;&nbsp;); {"\n"}
          <span className="line-number">14</span> {"};"} {"\n"}
          <span className="line-number">15</span>{" "}
          <span className="keyword">export default</span>{" "}
          <span className="variable">Person</span>;
        </code>
      </pre>
    </div>
  );
};

export default Home;
