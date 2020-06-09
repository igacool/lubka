import React from "react";

function Container3() {
  return (
    <div class="site-section pt-0">
      <div class="container">
        <div class="owl-carousel testimonial-carousel">
          <div class="testimonial-wrap">
            <div class="testimonial">
              <img
                src={require("./img/person_1.jpg")}
                alt="Image"
                class="img-fluid"
              />
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam necessitatibus incidunt ut officiis explicabo
                  inventore.
                </p>
              </blockquote>
              <p>&mdash; Jean Hicks</p>
            </div>
          </div>

          <div class="testimonial-wrap">
            <div class="testimonial">
              <img
                src={require("./img/person_2.jpg")}
                alt="Image"
                class="img-fluid"
              />
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam necessitatibus incidunt ut officiis explicabo
                  inventore.
                </p>
              </blockquote>
              <p>&mdash; Chris Stanworth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Container3;
