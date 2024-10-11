import SkillsCard from "./SkillsCard";
import "../styles/Tooling.scss";

const Tooling = () => {
  return (
    <div className="tooling-page">
      <h2 className="tooling-page__title">Tooling Overview</h2>
      <div className="tooling-page__cards">
        <SkillsCard
          title="Libraries & Frameworks"
          description="The main libraries and frameworks I use for web development, such as React, TailwindCSS, and others."
          link="/tooling/libraries"
          linkText="See libraries"
        />

        <SkillsCard
          title="Tools"
          description="Development tools such as Vite, Prettier, ESLint, etc."
          link="/tooling/tools"
          linkText="See tools"
        />

        <SkillsCard
          title="Package Managers"
          description="Package managers I frequently use: npm, Yarn, etc."
          link="/tooling/packages"
          linkText="See packages"
        />
      </div>
    </div>
  );
};

export default Tooling;
