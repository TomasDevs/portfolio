import SkillsCard from "../components/SkillsCard";

const Skills = () => {
  return (
    <div className="skills-page">
      <h2 className="skills-page__title">Skills Overview</h2>
      <div className="skills-page__cards">
        <SkillsCard
          title="Tooling"
          description="Explore the tools and libraries I use for development, including frameworks, package managers, and build tools."
          link="/tooling"
          linkText="Learn more"
        />

        <SkillsCard
          title="Uses"
          description="A collection of applications, extensions, and workflows I use in my daily work as a developer."
          link="/uses"
          linkText="Learn more"
        />

        <SkillsCard
          title="Timeline"
          description="View my professional journey and key milestones, from education to work experience and major projects."
          link="/timeline"
          linkText="Learn more"
        />
      </div>
    </div>
  );
};

export default Skills;
