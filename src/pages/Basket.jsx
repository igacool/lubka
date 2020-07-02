import React from "react";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import "../assets/css/books.css";

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      productList: ProductList.filter((product) => {
        if (this.shipIds.includes(String(product.id))) {
          return true;
        } else return false;
      }),
    };
  }
  subtitle;
  currentProduct;
  shipIds = localStorage.getItem("shopCart").split(",");

  customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "500px",
      maxwidth: "100%",
      transform: "translate(-50%, -50%)",
      height: "400px",
      maxheight: "100%",
      position: "fixed",
    },
  };

  openModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  };

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  };

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
      modalIsOpen: true,
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
                  <button
                    className="btn btn-lg btn-block btn-success text-uppercase"
                    onClick={this.openModal}
                  >
                    Оплатити {this.state.modalIsOpen}
                  </button>
                  <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={this.customStyles}
                    contentLabel="Example Modal"
                  >
                    <button onClick={this.closeModal}>Закрити</button>

                    <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                        <small id="emailHelp" class="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          Check me out
                        </label>
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </Modal>
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
