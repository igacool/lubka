import React from "react";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";
import "../assets/css/books.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: ProductList,
    };
  }

  filterList = (filterType) => {
    if (filterType == "ProductList") {
      this.setState({
        productList: ProductList,
      });
    } else
      this.setState({
        productList: ProductList.filter((product) => {
          if (product.type == filterType) {
            return true;
          } else return false;
        }),
      });
  };

  currentProduct;

  render() {
    return (
      <>
        <div>
          <div
            className="col-md-12 col-lg-12 text-right"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div id="filters" className="filters" >
              <a
                className="active"
                data-filter="*"
                onClick={() => {
                  this.filterList("ProductList");
                }}
              >
                Всі книги
              </a>

              <a
                className="active"
                data-filter="*"
                onClick={() => {
                  this.filterList("novel");
                }}
              >
                Романи
              </a>

              <a
                className="active"
                data-filter="*"
                onClick={() => {
                  this.filterList("translation");
                }}
              >
                Переклади
              </a>
            </div>
          </div>
          <div
            id="portfolio-grid"
            className="row no-gutter"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {this.state.productList.map((value, index) => {
              return (
                <div
                  className="item web col-sm-6 col-md-4 col-lg-4 mb-4"
                  key={index}
                >
                  <Link
                    to={`/product/${value.id}`}
                    className="item-wrap fancybox"
                  >
                    <div className="work-info">
                      <h3>{value.name}</h3>
                      <span>{value.about}</span>
                    </div>
                    <img
                      className="img-fluid"
                      alt="pic"
                      src={require(`${value.imgSrc}`)}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default Main;
