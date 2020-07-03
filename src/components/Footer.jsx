import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p className="mb-1">
                &copy; Copyright MyPortfolio. All Rights Reserved
              </p>
              <div className="credits"></div>
            </div>
            <div className="col-sm-6 social text-md-right">
              <a href="https://twitter.com/">
                <span className="icofont-twitter"></span>
              </a>
              <a href="https://www.facebook.com/">
                <span className="icofont-facebook"></span>
              </a>
              <a href="https://www.google.com/">
                <span className="icofont-google-plus"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
