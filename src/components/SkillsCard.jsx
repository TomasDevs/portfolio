import "../styles/SkillsCard.scss";

const SkillsCard = ({ title, description, link, svg }) => {
  return (
    <a href={link} className="card">
      {svg && <div className="card__icon">{svg}</div>}
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </a>
  );
};

export default SkillsCard;
