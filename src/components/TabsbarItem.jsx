import { NavLink } from "react-router-dom";

const TabsbarItem = ({ to, icon, name }) => {
  return (
    <li className="tabsbar__item">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "tabsbar__link -active" : "tabsbar__link"
        }>
        <img
          className="tabsbar__icon"
          src={icon}
          width={20}
          alt={`${name} icon`}
        />
        <span className="tabsbar__name">{name}</span>
      </NavLink>
    </li>
  );
};

export default TabsbarItem;
