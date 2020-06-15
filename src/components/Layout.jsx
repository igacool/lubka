import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <br />
      <Footer />
    </>
  );
};

export default Layout;
