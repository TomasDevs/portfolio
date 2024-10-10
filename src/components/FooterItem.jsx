const FooterItem = ({ icon, label }) => {
  return (
    <li className="footer-list__item">
      {icon}
      <span>{label}</span>
    </li>
  );
};

export default FooterItem;
