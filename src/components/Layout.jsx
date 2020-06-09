import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Main from "./Main";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <Main />
      {children}
      <br />
      <Footer />
    </>
  );
};

export default Layout;
