import SkillsCard from "../components/SkillsCard";
import "../styles/Skills.scss";

const Skills = () => {
  return (
    <div className="skills-page">
      <h2 className="skills-page__title">Skills Overview</h2>
      <div className="skills-page__cards">
        <SkillsCard
          title="Tooling"
          description="Explore the tools and libraries I use for development, including frameworks, package managers, and build tools."
          link="/tooling"
        />

        <SkillsCard
          title="Uses"
          description="A collection of applications, extensions, and workflows I use in my daily work as a developer."
          link="/uses"
        />

        <SkillsCard
          title="Timeline"
          description="An overview of key milestones from recent years."
          link="/timeline"
        />
      </div>
    </div>
  );
};

export default Skills;
