import React from "react";
import { ProductList } from "./ProductList";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "../assets/css/books.css";

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
  const saveProduct = () => {
    let storage = localStorage.getItem("shopCart");
    storage = (storage && storage.split(",")) || [];
    console.log(storage);
    if (!storage.includes(`${currentProduct.id}`)) {
      storage.push(`${currentProduct.id}`);
      localStorage.setItem("shopCart", storage);
    }

    console.log(storage);
  };

  const productList = ProductList;
  return (
    <>
      <main id="main">
        <div className="site-section">
          <div className="site-section pb-0">
            <div className="container">
              <div className="row align-items-stretch">
                <div
                  className="col-md-8 aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <img
                    src={require(`${currentProduct.imgSrc}`)}
                    alt="Image"
                    className="img-fluid toppic"
                  />
                </div>
                <div
                  className="col-md-3 ml-auto aos-init aos-animate name"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="sticky-content">
                    <h3 className="h3">{currentProduct.name}</h3>
                    <p className="mb-4 "></p>

                    <div className="mb-5">
                      <p>{currentProduct.descr}</p>
                    </div>

                    <p>
                      <Link
                        to="/basket"
                        className="readmore"
                        onClick={saveProduct}
                      >
                        Вартість: {currentProduct.cost} грн
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="container">
                  <div className="row justify-content-center text-center mb-4">
                    <div className="col-5">
                      <h3 className="h3 heading new">Більше книг</h3>
                    </div>

                    <div
                      className="row aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      {productList.map((value, index) => {
                        return (
                          <div className="item web col-sm-6 col-md-4 col-lg-3">
                            <Link
                              to={`/product/${value.id}`}
                              className="item-wrap fancybox"
                              onClick={goTop()}
                            >
                              <div className="work-info">
                                <h3>{value.name}</h3>
                                <span>{value.about}</span>
                              </div>
                              <img
                                className="img-fluid"
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
