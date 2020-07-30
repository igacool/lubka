import React from "react";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";

import "../assets/css/books.css";

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",

      modalIsOpen: false,
      productList: ProductList.filter((product) => {
        if (this.shipIds.includes(String(product.id))) {
          return true;
        } else return false;
      }),
      emailDetails: {
        firstName: "",
        phoneNumber: "",
        city: "",
        post: "",
        signBook: "",
        email: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({
      emailDetails: {
        ...this.state.emailDetails,
        [event.target.name]: event.target.value,
      },
    });
  }

  handleDelete(event) {
    this.setState({
      emailDetails: {
        ...this.state.emailDetails,
        [event.target.name]: "",
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.emailDetails.books = this.state.productList;

    var formData = this.state.emailDetails;

    axios.post("http://127.0.0.1:3001/send-mail", formData).catch((err) => {
      console.error(err);
    });
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
      height: "500px",
      maxheight: "100%",
      position: "fixed",
      background: "#A3FA68",
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
      modalIsOpen: false,
    });
    localStorage.setItem("shopCart", shipIdsArray);
  };

  render() {
    return (
      <>
        <section className="jumbotron text-center">
          <div className="container">
            <h2 className="jumbotron-heading">
              Як отримати книгу Андрія Любки з автографом (та підписом)
            </h2>

            <div>{"1. Обрати книги, які хочете придбати"}</div>
            <div>
              {
                "2. Надіслати вартість замовлення на картку Приватбанку 5457 0822 2015 2644 (Любка А.С.);"
              }
            </div>
            <div>
              {" "}
              3. Підтвердити здійснений переказ за допомогою фото чека чи
              скріншота з Приват24 та надіслати його на пошту:
              <a href="mailto:https://knyhylyubka@gmail.com"> тут</a>, або в
              соц.мережі:
              <a href="https://www.facebook.com/yulia.lyubka"> тут;</a>
            </div>
            <div>
              {
                "3. Внизу даної сторінки заповнити необхідну форму та надіслати її нам;"
              }
            </div>
            <div>
              4. Отримати замовлення у найближчому до вас відділенні Нової
              Пошти, оплатити доставку.
            </div>
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
                            <img
                              alt="pic"
                              src={require(`${currentProduct.imgSrc}`)}
                            />{" "}
                          </td>
                          <td>{currentProduct.name}</td>
                          <td>{currentProduct.stock}</td>

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
                  <button className="btn btn-block btn-light">
                    <Link to="/">Продовжити покупки</Link>
                  </button>
                </div>
                <div className="col-sm-3 col-md-6 text-right">
                  <button
                    className="btn btn-mid btn-block btn-success text-uppercase"
                    onClick={this.openModal}
                  >
                    Заповнити форму {this.state.modalIsOpen}
                  </button>
                  {Modal.setAppElement("body")}
                  <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={this.customStyles}
                    contentLabel="Example Modal"
                  >
                    <button
                      type="button"
                      className="close"
                      aria-label="Close"
                      onClick={this.closeModal}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>

                    <form name="person" onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Як зв'язатися з вами
                        </label>
                        <small id="emailHelp" className="form-text text-muted">
                          Заповнюючи форму, Ви надаєте згоду на використання та
                          обробку Ваших персональних даних з метою надання
                          послуги
                        </small>
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          value={this.state.id}
                          onChange={this.handleChange}
                          aria-describedby="emailHelp"
                          placeholder="Ваше прізвище та ім'я:"
                        />
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          aria-describedby="emailHelp"
                          value={this.state.id}
                          onChange={this.handleChange}
                          placeholder="Місто, куди буде надіслано замовлення:"
                        />
                        <input
                          type="number"
                          className="form-control"
                          name="post"
                          value={this.state.id}
                          onChange={this.handleChange}
                          placeholder="Номер відділення Нової Пошти:"
                        />
                        <input
                          type="tel"
                          className="form-control"
                          name="phoneNumber"
                          value={this.state.id}
                          onChange={this.handleChange}
                          placeholder="Введіть номер телефону:"
                        />
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={this.state.id}
                          onChange={this.handleChange}
                          placeholder="Введіть вашу електронну адресу:"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="signBook">
                          Для кого та як підписати книгу?
                        </label>
                        <div>
                          <textarea
                            id="txtArea"
                            rows="2"
                            cols="54"
                            name="signBook"
                            value={this.state.id}
                            onChange={this.handleChange}
                          ></textarea>
                        </div>
                      </div>

                      <button
                        type="reset"
                        className="btn btn-primary"
                        onClick={this.handleDelete}
                      >
                        Видалити всі дані
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        id="send"
                      >
                        Надіслати
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
