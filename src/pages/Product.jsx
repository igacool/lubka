import React from "react";
import { ProductList } from "./ProductList";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Product() {
  const { id } = useParams();

  let currentProduct;

  for (let i = 0; i < ProductList.length; i++) {
    if (ProductList[i].id == id) {
      currentProduct = ProductList[i];
    }
  }

  const goTop = () => {
    window.scrollTo(0, 0);
  };

  const productList = ProductList;
  return (
    <>
      <main id="main">
        <div class="site-section">
          <div class="site-section pb-0">
            <div class="container">
              <div class="row align-items-stretch">
                <div class="col-md-8 aos-init aos-animate" data-aos="fade-up">
                  <img
                    src={require(`${currentProduct.imgSrc}`)}
                    alt="Image"
                    class="img-fluid"
                  />
                </div>
                <div
                  class="col-md-3 ml-auto aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div class="sticky-content">
                    <h3 class="h3">{currentProduct.name}</h3>
                    <p class="mb-4"></p>

                    <div class="mb-5">
                      <p>{currentProduct.descr}</p>
                    </div>

                    <p>
                      <a href="foo" class="readmore">
                        Вартість: {currentProduct.cost} грн
                      </a>
                    </p>
                  </div>
                </div>

                <div class="container">
                  <div class="row justify-content-center text-center mb-4">
                    <div class="col-5">
                      <h3 class="h3 heading">More Works</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        explicabo inventore.
                      </p>
                    </div>

                    <div
                      class="row aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      {productList.map((value, index) => {
                        return (
                          <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4">
                            <Link
                              to={`/product/${value.id}`}
                              class="item-wrap fancybox"
                              onClick={goTop()}
                            >
                              <div class="work-info">
                                <h3>{value.name}</h3>
                                <span>{value.descr}</span>
                              </div>
                              <img
                                class="img-fluid"
                                src={require(`${value.imgSrc}`)}
                              />
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Product;
