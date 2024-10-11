import "../styles/SkillsCard.scss";

const SkillsCard = ({ title, description, link }) => {
  return (
    <a href={link} className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </a>
  );
};

export default SkillsCard;
