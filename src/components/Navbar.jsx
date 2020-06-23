import React from "react";

import "../assets/css/books.css";

function Navbar() {
  return (
    <>
      <div className="container"></div>
      <div className="row mb-5 align-items-center">
        <div className="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
          <h2 className="hello">Hey, I'm Johan Stanworth</h2>
          <p className="mb-0">
            Freelance Creative &amp; Professional Graphics Designer
          </p>
        </div>
        <div
          className="col-md-12 col-lg-6 text-left text-lg-right"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div id="filters" className="filters">
            <a href="foo" data-filter="*" className="active">
              All
            </a>
            <a href="foo" data-filter=".web">
              Web
            </a>
            <a href="foo" data-filter=".design">
              Design
            </a>
            <a href="foo" data-filter=".branding">
              Branding
            </a>
            <a href="foo" data-filter=".photography">
              Photography
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
