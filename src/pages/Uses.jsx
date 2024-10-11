import SkillsCard from "../components/SkillsCard";

const Uses = () => {
  return (
    <div className="uses-page">
      <h2 className="uses-page__title">Uses Overview</h2>
      <div className="uses-page__cards">
        <SkillsCard
          title="Apps"
          description="The applications I use daily, like VS Code, Figma, Brave browser."
          link="/uses/apps"
          linkText="See apps"
        />

        <SkillsCard
          title="Extensions"
          description="Some of the best VS Code extensions I use for development."
          link="/uses/extensions"
          linkText="See extensions"
        />

        <SkillsCard
          title="Themes & Fonts"
          description="The dark mode theme and fonts that make my workspace comfortable."
          link="/uses/themes"
          linkText="See themes"
        />
      </div>
    </div>
  );
};

export default Uses;
