import { NavLink } from "react-router-dom";

const SidebarItem = ({ to, icon, className }) => {
  return (
    <li className={`sidebar__item ${className ? className : ""}`}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "sidebar__link -active" : "sidebar__link"
        }>
        {icon}
      </NavLink>
    </li>
  );
};

export default SidebarItem;
