import Titlebar from "./components/TitleBar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Titlebar />
      <Layout />
      <Footer />
    </Router>
  );
};

export default App;
