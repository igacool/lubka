import React from "react";
import About from "./page1/About";
import Contacts from "./page2/Contacts";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./assets/vendor/icofont/icofont.min.css";
import "./assets/vendor/line-awesome/css/line-awesome.min.css";
import "./assets/vendor/owlcarousel/assets/owl.carousel.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";

import "./assets/css/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/About" component={About} />
      <Route exact path="/Contacts" component={Contacts} />
      <Route exact path="/Home" component={Home} />

      <div>
        <div>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Footer">Footer</NavLink>
          <NavLink to="/Main">Main</NavLink>
          <NavLink to="/Navbar">Navbar</NavLink>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
