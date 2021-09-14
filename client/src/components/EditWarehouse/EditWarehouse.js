import "./EditWarehouse.scss";
import logo from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { Component } from "react";

const url = "http://localhost:8080";
class EditWarehouse extends Component {
  state = {
    name: "",
    address: "",
    city: "",
    country: "",
    user: "",
    position: "",
    phone: "",
    email: "",
  };
  componentDidMount() {
    axios
      .get(`${url}/warehouse/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          name: response.data.name,
          address: response.data.address,
          city: response.data.city,
          country: response.data.country,
          user: response.data.contact.name,
          position: response.data.contact.position,
          phone: response.data.contact.phone,
          email: response.data.contact.email,
        });
      });
  }
  onSubmitHandler = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: `${url}/warehouse/${this.props.match.params.id}`,
      data: {
        name: e.target.name.value,
        address: e.target.address.value,
        city: e.target.city.value,
        country: e.target.country.value,
        contact: {
          name: e.target.user.value,
          position: e.target.position.value,
          phone: e.target.phone.value,
          email: e.target.email.value,
        },
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      () => {
        this.props.history.push("/");
      },
      (error) => {
        console.log(error);
      }
    );
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div className="page">
        <section className="container">
          <form
            onSubmit={(e) => {
              this.onSubmitHandler(e);
            }}
          >
            <div className="container__header">
              <Link to="/" className="container__logo-link">
                <img className="container__arrow" src={logo} alt="" />
              </Link>
              <h1 className="container__header-text">Edit Warehouse</h1>
            </div>
            <hr className="container__hr-top" />
            <div className="container__body-container">
              <div className="container__warehouse">
                <h3 className="container__subheading">Warehouse Details</h3>
                <p className="container__warehouse-text">Warehouse Name</p>
                <input
                  name="name"
                  className="container__warehouse-input"
                  type="text"
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <p className="container__warehouse-text">Street Address</p>
                <input
                  name="address"
                  className="container__warehouse-input"
                  type="text"
                  required
                  value={this.state.address}
                  onChange={this.handleChange}
                />
                <p className="container__warehouse-text">City</p>
                <input
                  name="city"
                  className="container__warehouse-input"
                  type="text"
                  required
                  value={this.state.city}
                  onChange={this.handleChange}
                />
                <p className="container__warehouse-text">Country</p>
                <input
                  name="country"
                  className="container__warehouse-input"
                  type="text"
                  required
                  value={this.state.country}
                  onChange={this.handleChange}
                />
              </div>
              <hr className="container__hr-middle" />
              <div className="container__contact">
                <h3 className="container__subheading">Contact Details</h3>
                <p className="container__contact-text">Contact Name</p>
                <input
                  name="user"
                  className="container__contact-input"
                  type="text"
                  required
                  value={this.state.user}
                  onChange={this.handleChange}
                />
                <p className="container__contact-text">Position</p>
                <input
                  name="position"
                  className="container__contact-input"
                  type="text"
                  required
                  value={this.state.position}
                  onChange={this.handleChange}
                />
                <p className="container__contact-text">Phone Number</p>
                <input
                  name="phone"
                  className="container__contact-input"
                  type="tel"
                  pattern="+^\d{10}$"
                  required
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
                <p className="container__contact-text">Email</p>
                <input
                  name="email"
                  className="container__contact-input"
                  type="email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="container__buttons">
              <button className="container__button-cancel">Cancel</button>
              <button type="submit" className="container__button-save">
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
export default EditWarehouse;