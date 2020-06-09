import React from "react";
import About from "./page1/About";
import Contacts from "./page2/Contacts";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import "./assets/vendor/icofont/icofont.min.css";
import "./assets/vendor/line-awesome/css/line-awesome.min.css";
import "./assets/vendor/owlcarousel/assets/owl.carousel.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        {/* <Route path="/portfolio" component={Portfolio} /> */}
        {/* <Route path="/" component={Portfolio} /> */}
        <Route exact path="/Header" component={Header} />
        <Route exact path="/Footer" component={Footer} />
        <Route exact path="/Navbar" component={Navbar} />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
