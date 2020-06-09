import React from "react";

const About = () => {
  return (
    <div>
      <div class="collapse navbar-collapse custom-navmenu" id="main-navbar">
        <div class="container py-2 py-md-5">
          <div class="row align-items-start">
            <div class="col-md-2">
              <ul class="custom-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li class="active">
                  <a href="about.html">About Me</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="works.html">Works</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 d-none d-md-block  mr-auto">
              <div class="tweet d-flex">
                <span class="icofont-twitter text-white mt-2 mr-3"></span>
                <div>
                  <p>
                    <em>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam necessitatibus incidunt ut officiis explicabo
                      inventore. <a href="foo">t.co/v82jsk</a>
                    </em>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-none d-md-block">
              <h3>Hire Me</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam necessitatibus incidunt ut officiis explicabo
                inventore. <a href="foo">myemail@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-light custom-navbar">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            MyPortfolio.
          </a>

          <a
            href="foo"
            class="burger"
            data-toggle="collapse"
            data-target="foomain-navbar"
          >
            <span></span>
          </a>
        </div>
      </nav>
      <main id="main">
        <div class="site-section pb-0 site-portfolio">
          <div class="container">
            <div class="row mb-5 align-items-end">
              <div class="col-md-6" data-aos="fade-up">
                <h2>About Me</h2>
                <p class="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam necessitatibus incidunt ut officiis explicabo
                  inventore.
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4 ml-auto order-2" data-aos="fade-up">
                <h3 class="h3 mb-4">Skills</h3>
                <ul class="list-unstyled">
                  <li class="mb-3">
                    <div class="d-flex mb-1">
                      <strong>WordPress</strong>
                      <span class="ml-auto">80%</span>
                    </div>
                    <div class="progress custom-progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex mb-1">
                      <strong>Photoshop</strong>
                      <span class="ml-auto">96%</span>
                    </div>
                    <div class="progress custom-progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "96%" }}
                        aria-valuenow="96"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex mb-1">
                      <strong>HTML5/CSS3</strong>
                      <span class="ml-auto">99%</span>
                    </div>
                    <div class="progress custom-progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "99%" }}
                        aria-valuenow="99"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex mb-1">
                      <strong>Veu</strong>
                      <span class="ml-auto">87%</span>
                    </div>
                    <div class="progress custom-progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "87%" }}
                        aria-valuenow="87"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex mb-1">
                      <strong>Angular</strong>
                      <span class="ml-auto">85%</span>
                    </div>
                    <div class="progress custom-progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex mb-1">
                      <strong>React</strong>
                      <span class="ml-auto">88%</span>
                    </div>
                    <div class="progress custom-progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "88%" }}
                        aria-valuenow="88"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="col-md-7 mb-5 mb-md-0" data-aos="fade-up">
                <p>
                  <img
                    src={require("../img/person_1_sq.jpg")}
                    alt="Image"
                    class="img-fluid"
                  />
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor dignissimos delectus minima reprehenderit molestias illo
                  dolorem et, odio!
                </p>
                <p>
                  Fuga fugit distinctio delectus iure vitae consequatur
                  excepturi, mollitia, consectetur molestias sapiente rem
                  consequuntur, illum adipisci, sed obcaecati!
                </p>
                <p>
                  Ex, dolorem qui voluptas reprehenderit provident, ad ipsum
                  iure a consequatur voluptatem incidunt nobis. Vitae reiciendis
                  quae ex.
                </p>
                <p>
                  Optio consectetur culpa nemo, fugit pariatur veniam voluptate
                  laudantium rerum fuga dolor in maiores ea nisi voluptatibus.
                  Minus?
                </p>
                <p>
                  <a href="foo" class="readmore">
                    Download my CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="footer mt-5 pt-5" role="contentinfo">
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
    </div>
  );
};

export default About;
