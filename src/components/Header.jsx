import React from "react";

function Header() {
  return (
    <>
      <nav class="navbar navbar-light custom-navbar">
        <div class="container">
          <a class="navbar-brand" href="/">
            Сайт Андрія Любки.
          </a>

          <a
            href="#"
            class="burger"
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
