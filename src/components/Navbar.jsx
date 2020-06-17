import React from "react";

import "../assets/css/books.css";

function Navbar() {
  return (
    <>
      <div class="container"></div>
      <div class="row mb-5 align-items-center">
        <div class="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
          <h2 class="hello">Hey, I'm Johan Stanworth</h2>
          <p class="mb-0">
            Freelance Creative &amp; Professional Graphics Designer
          </p>
        </div>
        <div
          class="col-md-12 col-lg-6 text-left text-lg-right"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div id="filters" class="filters">
            <a href="foo" data-filter="*" class="active">
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
