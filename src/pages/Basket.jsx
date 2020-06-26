import React from "react";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";

import "../assets/css/books.css";

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: ProductList.filter((product) => {
        if (this.shipIds.includes(String(product.id))) {
          return true;
        } else return false;
      }),
    };
  }

  currentProduct;
  shipIds = localStorage.getItem("shopCart").split(",");

  deleteProduct = (productId) => {
    let shipIdsArray = localStorage.getItem("shopCart").split(",");

    shipIdsArray = shipIdsArray.filter((array) => {
      if (array == productId) {
        return false;
      } else return true;
    });

    const productList = this.state.productList.filter((product) => {
      if (product.id == productId) {
        return false;
      } else return true;
    });

    this.setState({
      productList: productList,
    });
    localStorage.setItem("shopCart", shipIdsArray);
  };

  render() {
    return (
      <>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Список книг</h1>
          </div>
        </section>

        <div className="container mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">Назва книги</th>
                      <th scope="col">Наявність</th>

                      <th scope="col" className="text-right">
                        Ціна
                      </th>
                      <th> </th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.productList.map((currentProduct, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <img src={require(`${currentProduct.imgSrc}`)} />{" "}
                          </td>
                          <td>{currentProduct.name}</td>
                          <td>In stock</td>

                          <td className="text-right">
                            {currentProduct.cost} ГРН
                          </td>
                          <td className="text-right">
                            <button className="btn btn-sm btn-danger">
                              <i
                                className="fa fa-trash"
                                onClick={() =>
                                  this.deleteProduct(currentProduct.id)
                                }
                              >
                                Видалити
                              </i>
                            </button>{" "}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2">
              <div className="row">
                <div className="col-sm-12  col-md-6">
                  <button className="btn btn-block btn-light" onClick={`/`}>
                    <Link to="/">Продовжити покупки</Link>
                  </button>
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                  <button className="btn btn-lg btn-block btn-success text-uppercase">
                    Оплатити
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Basket;
