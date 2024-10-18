import React, { useEffect } from "react";
import Titlebar from "./components/TitleBar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import MobileWarning from "./components/MobileWarning";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  useEffect(() => {
    // Check, if the user has a theme preference
    const savedTheme = localStorage.getItem("theme") || "dark";
    // Set the theme
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <Router>
      <Titlebar />
      <Layout />
      <Footer />
      <MobileWarning />
    </Router>
  );
};

export default App;
