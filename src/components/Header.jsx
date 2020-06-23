import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar navbar-light custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            Сайт Андрія Любки.
          </a>

          <a
            href="#"
            className="burger"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            <span></span>
          </a>
        </div>
      </nav>
    </>
  );
}
export default Header;
