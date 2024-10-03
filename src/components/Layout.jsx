import Sidebar from "./Sidebar";
import Explorer from "./Explorer";
import Tabsbar from "./Tabsbar";
import Main from "./Main";
import "../styles/Layout.scss";

const Layout = () => {
  return (
    <section className="layout">
      <Sidebar />
      <Explorer />
      <div className="layout__inner">
        <Tabsbar />
        <Main />
      </div>
    </section>
  );
};
export default Layout;
