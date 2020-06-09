import React from "react";

export default function Container() {
  return (
    <div class="site-section">
      <div class="container">
        <div class="row justify-content-center text-center mb-4">
          <div class="col-5">
            <h3 class="h3 heading">My Clients</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo
              inventore.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-4 col-sm-4 col-md-2">
            <a href="foo" class="client-logo">
              <img
                src={require("./img/logo-adobe.png")}
                alt="Image"
                class="img-fluid"
              />
            </a>
          </div>
          <div class="col-4 col-sm-4 col-md-2">
            <a href="foo" class="client-logo">
              <img
                src={require("./img/logo-uber.png")}
                alt="Image"
                class="img-fluid"
              />
            </a>
          </div>
          <div class="col-4 col-sm-4 col-md-2">
            <a href="foo" class="client-logo">
              <img src={require("./img/logo-apple.png")} class="img-fluid" />
            </a>
          </div>
          <div class="col-4 col-sm-4 col-md-2">
            <a href="foo" class="client-logo">
              <img
                src={require("./img/logo-netflix.png")}
                alt="Image"
                class="img-fluid"
              />
            </a>
          </div>
          <div class="col-4 col-sm-4 col-md-2">
            <a href="foo" class="client-logo">
              <img
                src={require("./img/logo-nike.png")}
                alt="Image"
                class="img-fluid"
              />
            </a>
          </div>
          <div class="col-4 col-sm-4 col-md-2">
            <a href="foo" class="client-logo">
              <img
                src={require("./img/logo-google.png")}
                alt="Image"
                class="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
