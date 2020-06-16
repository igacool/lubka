import React from "react";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";

const Main = () => {
  const productList = ProductList;
  return (
    <>
      <div
        id="portfolio-grid"
        class="row no-gutter"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {productList.map((value, index) => {
          return (
            <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4">
              <Link to={`/product/${value.id}`} class="item-wrap fancybox">
                <div class="work-info">
                  <h3>{value.name}</h3>
                  <span>{value.descr}</span>
                </div>
                <img class="img-fluid" src={require(`${value.imgSrc}`)} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Main;
