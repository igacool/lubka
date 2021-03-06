import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Basket from "./pages/Basket";

import "./assets/vendor/icofont/icofont.min.css";
import "./assets/vendor/line-awesome/css/line-awesome.min.css";
import "./assets/vendor/owlcarousel/assets/owl.carousel.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/books.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/" component={Main} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
