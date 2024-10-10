import { NavLink } from "react-router-dom";

const ExplorerItem = ({ to, icon, name }) => {
  return (
    <li className="explorer__item">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "explorer__link -active" : "explorer__link"
        }>
        <img src={icon} width={20} alt={`${name} icon`} />
        <span className="explorer__name">{name}</span>
      </NavLink>
    </li>
  );
};

export default ExplorerItem;
