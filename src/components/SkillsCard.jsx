import { Link } from "react-router-dom";
import "../styles/SkillsCard.scss";

const SkillsCard = ({ title, description, link, linkText }) => {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      <Link to={link} className="card__link">
        {linkText}
      </Link>
    </div>
  );
};

export default SkillsCard;
