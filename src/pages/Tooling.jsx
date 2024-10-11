import SkillsCard from "../components/SkillsCard";

const Tooling = () => {
  return (
    <div className="skills-page">
      <h2 className="skills-page__title">Tooling</h2>
      <section className="skills-page__section">
        <h3 className="skills-page__subtitle">
          Languages & Libraries / Frameworks
        </h3>
        <div className="skills-page__cards">
          <SkillsCard
            title="HTML5"
            description="The standard markup language for creating web pages."
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
          />

          <SkillsCard
            title="CSS3"
            description="A style sheet language used for describing the presentation of a document written in HTML."
            link="https://developer.mozilla.org/en-US/docs/Web/CSS"
          />

          <SkillsCard
            title="SCSS"
            description="A powerful CSS extension language with features like variables, nesting, and mixins."
            link="https://sass-lang.com/"
          />

          <SkillsCard
            title="Tailwind CSS"
            description="A utility-first CSS framework for quickly building custom designs."
            link="https://tailwindcss.com/"
          />

          <SkillsCard
            title="Bootstrap"
            description="A popular CSS framework for developing responsive and mobile-first websites."
            link="https://getbootstrap.com/"
          />

          <SkillsCard
            title="JavaScript"
            description="A style sheet language used for describing the presentation of a document written in HTML."
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />

          <SkillsCard
            title="TypeScript"
            description="A typed superset of JavaScript that compiles to plain JavaScript."
            link="https://www.typescriptlang.org/"
          />

          <SkillsCard
            title="React"
            description="A JavaScript library for building user interfaces."
            link="https://react.dev/"
          />

          <SkillsCard
            title="Node.js"
            description="A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building server-side applications."
            link="https://nodejs.org/"
          />

          <SkillsCard
            title="Express.js"
            description="A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
            link="https://expressjs.com/"
          />
        </div>
      </section>
      <section className="skills-page__section">
        <h3 className="skills-page__subtitle">Tools</h3>
        <div className="skills-page__cards">
          <SkillsCard
            title="Vite"
            description="A build tool that aims to provide a faster and leaner development experience for modern web projects."
            link="https://vite.dev/"
          />

          <SkillsCard
            title="Prettier"
            description="An opinionated code formatter that enforces a consistent code style."
            link="/tooling/tools"
          />

          <SkillsCard
            title="Git"
            description="A distributed version control system to track code changes and collaborate with others."
            link="https://git-scm.com/"
          />

          <SkillsCard
            title="GitHub"
            description="A platform for hosting and reviewing code, managing projects, and collaborating."
            link="https://github.com/"
          />

          <SkillsCard
            title="Webpack"
            description="A module bundler for modern JavaScript applications."
            link="https://webpack.js.org/"
          />

          <SkillsCard
            title="ESLint"
            description="A tool for identifying and fixing problems in JavaScript code."
            link="https://eslint.org/"
          />

          <SkillsCard
            title="WSL"
            description="A compatibility layer for running Linux binary executables natively on Windows."
            link="https://docs.microsoft.com/en-us/windows/wsl/"
          />
        </div>
      </section>

      <section className="skills-page__section">
        <h3 className="skills-page__subtitle">Packages</h3>
        <div className="skills-page__cards">
          <SkillsCard
            title="npm"
            description="The default package manager for Node.js, used to manage dependencies in JavaScript projects."
            link="https://www.npmjs.com/"
          />

          <SkillsCard
            title="Yarn"
            description="A fast, reliable, and secure alternative package manager to npm, optimized for managing JavaScript dependencies."
            link="https://yarnpkg.com/"
          />

          <SkillsCard
            title="Axios"
            description="A popular JavaScript library for making HTTP requests from the browser and Node.js."
            link="https://axios-http.com/"
          />
        </div>
      </section>

      <section className="skills-page__section">
        <h3 className="skills-page__subtitle">Databases</h3>
        <div className="skills-page__cards">
          <SkillsCard
            title="MySQL"
            description="An open-source relational database management system."
            link="https://www.mysql.com/"
          />

          <SkillsCard
            title="PostgreSQL"
            description="A powerful, open-source object-relational database system."
            link="https://www.postgresql.org/"
          />
        </div>
      </section>

      <section className="skills-page__section">
        <h3 className="skills-page__subtitle">Deployment</h3>
        <div className="skills-page__cards">
          <SkillsCard
            title="Netlify"
            description="An intuitive Git-based workflow and powerful serverless platform."
            link="https://www.netlify.com/"
          />

          <SkillsCard
            title="Vercel"
            description="A cloud platform for static sites and Serverless Functions that fits perfectly with your workflow."
            link="https://vercel.com/"
          />
        </div>
      </section>
    </div>
  );
};

export default Tooling;
