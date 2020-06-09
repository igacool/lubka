import React from "react";

function Footer() {
  return (
    <>
      <footer class="footer" role="contentinfo">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <p class="mb-1">
                &copy; Copyright MyPortfolio. All Rights Reserved
              </p>
              <div class="credits"></div>
            </div>
            <div class="col-sm-6 social text-md-right">
              <a href="foo">
                <span class="icofont-twitter"></span>
              </a>
              <a href="foo">
                <span class="icofont-facebook"></span>
              </a>
              <a href="foo">
                <span class="icofont-dribbble"></span>
              </a>
              <a href="foo">
                <span class="icofont-behance"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
