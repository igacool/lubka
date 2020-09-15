import React from "react";
import { ProductList } from "./ProductList";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import style from "./customStyles.module.css";
import "../assets/css/books.css";

class Basket extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    const productList = ProductList.map((item) => {
      item.count = 1;
      return item;
    }).filter((product) => {
      if (this.shipIds.includes(String(product.id))) {
        return true;
      } else return false;
    });
    this.state = {
      productList,
      value: "",
      modalIsOpen: false,

      emailDetails: {
        firstName: "",
        phoneNumber: "",
        city: "",
        post: "",
        signBook: "",
        email: "",
        totalSum: "",
      },
      countSum: this.getCountSum(productList),
      totalSum: this.getTotalSum(productList),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCount = this.handleCount.bind(this);
    this.countSum = this.countSum.bind(this);
  }

  handleCount(event, id) {
    const productList = this.state.productList.map((product) => {
      if (product.id === id) {
        product.count = event.target.value;
      }
      return product;
    });
    this.setState({
      productList,
    });
    this.countSum();
    this.totalSum();
  }

  countSum() {
    let countSum = this.getCountSum(this.state.productList);
    this.setState({
      countSum,
    });
  }
  getCountSum(productList) {
    let countSum = 0;
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].count > 0) {
        countSum += +productList[i].count;
      }
    }
    return countSum;
  }

  totalSum() {
    let totalSum = this.getTotalSum(this.state.productList);
    this.setState({
      totalSum,
    });
  }

  getTotalSum(productList) {
    let totalSum = 0;
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].count > 0) {
        totalSum += +productList[i].count * productList[i].cost;
      }
    }
    return totalSum;
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
    this.state.emailDetails.totalSum = this.state.totalSum;
    var formData = this.state.emailDetails;
    console.log(formData);
    axios.post("http://127.0.0.1:3001/send-mail", formData).catch((err) => {
      console.error(err);
    });

    this.setState({
      modalIsOpen: false,
    });
    this.handleDelete(event);
  }

  subtitle;
  currentProduct;
  shipIds = localStorage.getItem("shopCart").split(",");

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
      countSum: this.getCountSum(productList),
      totalSum: this.getTotalSum(productList),
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

            <div>{"1. Заповніть форму внизу"}</div>
            <div>
              {
                "2. Виконайте інструкцію, яка прийде Вам на імейл"
              }
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
                      <th scope="col">Кількість</th>

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
                          <td>
                            <div className="form-group row">
                              <div className="col-sm-10">
                                <input
                                  type="number"
                                  className="form-control"
                                  name="count"
                                  value={currentProduct.count}
                                  onChange={(event) =>
                                    this.handleCount(event, currentProduct.id)
                                  }
                                  placeholder="0"
                                />
                              </div>
                            </div>
                          </td>

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

            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"> </th>
                  <th scope="col">Загалом:</th>
                  <th scope="col">Кількість:</th>
                  <th className="text-right">{this.state.countSum} шт</th>
                  <th scope="col" className="text-left">
                    Ціна:
                  </th>
                  <th className="text-right">{this.state.totalSum} грн</th>
                  <th> </th>
                </tr>
              </thead>
            </table>
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
                      <div className="modal-header">
                        <div className={style.connect}>
                          Як зв'язатися з вами
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-group row">
                          <label
                            htmlFor="inputPassword"
                            className="col-sm-2 col-form-label"
                          >
                            Ім'я
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              name="firstName"
                              value={this.state.id}
                              onChange={this.handleChange}
                              aria-describedby="emailHelp"
                              placeholder="Ваше прізвище та ім'я:"
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="inputPassword"
                            className="col-sm-2 col-form-label"
                          >
                            Місто
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              name="city"
                              aria-describedby="emailHelp"
                              value={this.state.id}
                              onChange={this.handleChange}
                              placeholder="Місто, куди буде надіслано замовлення:"
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="inputPassword"
                            className="col-sm-2 col-form-label"
                          >
                            Нова пошта
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="number"
                              className="form-control"
                              name="post"
                              value={this.state.id}
                              onChange={this.handleChange}
                              placeholder="Номер відділення Нової Пошти:"
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="inputPassword"
                            className="col-sm-2 col-form-label"
                          >
                            Номер телефону
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="tel"
                              className="form-control"
                              name="phoneNumber"
                              value={this.state.id}
                              onChange={this.handleChange}
                              placeholder="Введіть номер телефону:"
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="inputPassword"
                            className="col-sm-2 col-form-label"
                          >
                            Електронна адреса
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={this.state.id}
                              onChange={this.handleChange}
                              placeholder="Введіть вашу електронну адресу:"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className={style.whomsign}>
                          Для кого та як підписати книгу?
                        </div>
                        <div>
                          <textarea
                            className="form-control"
                            id="txtArea"
                            rows="2"
                            cols="100"
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
