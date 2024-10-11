import SkillsCard from "../components/SkillsCard";

const Uses = () => {
  return (
    <div className="skills-page">
      <h2 className="skills-page__title">Uses</h2>
      <section className="skills-page__section">
        <h3 className="skills-page__subtitle">Apps</h3>
        <div className="skills-page__cards">
          <SkillsCard
            title="Visual Studio Code"
            description="A source-code editor developed by Microsoft for Windows, Linux, and macOS."
            link="https://code.visualstudio.com/"
          />

          <SkillsCard
            title="Brave"
            description="A free and open-source web browser developed by Brave Software, Inc."
            link="https://brave.com/"
          />

          <SkillsCard
            title="Figma"
            description="A web-based vector graphics editor and prototyping tool."
            link="https://www.figma.com/"
          />

          <SkillsCard
            title="Slack"
            description="A proprietary business communication platform developed by Slack Technologies."
            link="https://slack.com/"
          />

          <SkillsCard
            title="Notion"
            description="A note-taking and collaboration application with markdown support."
            link="https://www.notion.so/"
          />

          <SkillsCard
            title="Postman"
            description="A collaboration platform for API development."
            link="https://www.postman.com/"
          />
        </div>
      </section>
      <section className="skills-page__section">
        <h3 className="skills-page__subtitle">Extensions</h3>
        <div className="skills-page__cards">
          <SkillsCard
            title="Github Copilot"
            description="An AI pair programmer that helps you write code faster."
            link="https://copilot.github.com/"
          />

          <SkillsCard
            title="GitLens"
            description="Supercharge the Git capabilities built into Visual Studio Code."
            link="https://gitlens.amod.io/"
          />

          <SkillsCard
            title="Live Server"
            description="Launch a development local server with live reload feature for static & dynamic pages."
            link="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
          />

          <SkillsCard
            title="Better Comments"
            description="Improve your code commenting by annotating with alert, informational, TODOs, and more."
            link="https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments"
          />

          <SkillsCard
            title="get-svg-icons"
            description="Quickly search for SVG icons and insert them into your code."
            link="https://marketplace.visualstudio.com/items?itemName=dderevjanik.get-svg-icons"
          />

          <SkillsCard
            title="Prettier"
            description="An opinionated code formatter that enforces a consistent code style."
            link="https://prettier.io/"
          />

          <SkillsCard
            title="Tailwind CSS IntelliSense"
            description="Intelligent Tailwind CSS tooling for Visual Studio Code."
            link="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
          />
        </div>
      </section>

      <section className="skills-page__section">
        <h3 className="skills-page__subtitle">Themes & Fonts</h3>
        <div className="skills-page__cards">
          <SkillsCard
            title="Dark Modern"
            description="A dark theme for Visual Studio Code."
            link="https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme"
          />

          <SkillsCard
            title="Dracula"
            description="A dark theme for Visual Studio Code."
            link="https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula"
          />

          <SkillsCard
            title="Roboto"
            description="A sans-serif typeface family developed by Google as the system font for Android."
            link="https://fonts.google.com/specimen/Roboto"
          />

          <SkillsCard
            title="Inter"
            description="A typeface carefully crafted & designed for computer screens."
            link="https://rsms.me/inter/"
          />

          <SkillsCard
            title="JetBrains Mono"
            description="A typeface for developers that makes it easier to read code."
            link="https://www.jetbrains.com/lp/mono/"
          />

          <SkillsCard
            title="Poppins"
            description="A geometric sans-serif typeface that embodies simplicity and modernity."
            link="https://fonts.google.com/specimen/Poppins"
          />

          <SkillsCard
            title="Teko"
            description="A geometric sans-serif typeface that embodies simplicity and modernity."
            link="https://fonts.google.com/specimen/Teko"
          />

          <SkillsCard
            title="Nunito"
            description="A geometric sans-serif typeface that embodies simplicity and modernity."
            link="https://fonts.google.com/specimen/Nunito"
          />
        </div>
      </section>
    </div>
  );
};

export default Uses;
