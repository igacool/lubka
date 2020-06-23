import React from "react";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";

const Main = () => {
  const productList = ProductList;
  return (
    <>
      <div
        id="portfolio-grid"
        className="row no-gutter"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {productList.map((value, index) => {
          return (
            <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
              <Link to={`/product/${value.id}`} className="item-wrap fancybox">
                <div className="work-info">
                  <h3>{value.name}</h3>
                  <span>{value.about}</span>
                </div>
                <img className="img-fluid" src={require(`${value.imgSrc}`)} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Main;
