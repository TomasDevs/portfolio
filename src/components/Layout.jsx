import Sidebar from "./Sidebar";
import Explorer from "./Explorer";
import Tabsbar from "./Tabsbar";
import "../styles/Layout.scss";

const Layout = () => {
  return (
    <section className="layout">
      <Sidebar />
      <Explorer />
      <div className="layout__inner">
        <Tabsbar />
        <main className="layout__content"></main>
      </div>
    </section>
  );
};
export default Layout;
