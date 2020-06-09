import React from "react";

const Contacts = () => {
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
                <li>
                  <a href="about.html">About Me</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="works.html">Works</a>
                </li>
                <li class="active">
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
      <div>
        <main id="main">
          <div class="site-section pb-0 site-portfolio">
            <div class="container">
              <div class="row mb-5 align-items-end">
                <div class="col-md-6" data-aos="fade-up">
                  <h2>Contact</h2>
                  <p class="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam necessitatibus incidunt ut officiis explicabo
                    inventore.
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-5 mb-md-0" data-aos="fade-up">
                  <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    class="php-email-form"
                  >
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label for="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          id="name"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                        />
                        <div class="validate"></div>
                      </div>
                      <div class="col-md-6 form-group">
                        <label for="name">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          data-rule="email"
                          data-msg="Please enter a valid email"
                        />
                        <div class="validate"></div>
                      </div>
                      <div class="col-md-12 form-group">
                        <label for="name">Subject</label>
                        <input
                          type="text"
                          class="form-control"
                          name="subject"
                          id="subject"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 8 chars of subject"
                        />
                        <div class="validate"></div>
                      </div>
                      <div class="col-md-12 form-group">
                        <label for="name">Message</label>
                        <textarea
                          class="form-control"
                          name="message"
                          cols="30"
                          rows="10"
                          data-rule="required"
                          data-msg="Please write something for us"
                        ></textarea>
                        <div class="validate"></div>
                      </div>

                      <div class="col-md-12 mb-3">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      </div>

                      <div class="col-md-6 form-group">
                        <input
                          type="submit"
                          class="readmore d-block w-100"
                          value="Send Message"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="col-md-4 ml-auto order-2" data-aos="fade-up">
                <ul class="list-unstyled">
                  <li class="mb-3">
                    <strong class="d-block mb-1">Address</strong>
                    <span>
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li class="mb-3">
                    <strong class="d-block mb-1">Phone</strong>
                    <span>+1 232 3235 324</span>
                  </li>
                  <li class="mb-3">
                    <strong class="d-block mb-1">Email</strong>
                    <span>youremail@domain.com</span>
                  </li>
                </ul>
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
    </div>
  );
};

export default Contacts;
