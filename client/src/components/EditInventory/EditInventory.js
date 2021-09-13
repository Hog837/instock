import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EditInventory.scss";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import axios from "axios";
const url = "http://localhost:8080";
class EditInventory extends Component {
  state = {
    warehouseName: "",
    itemName: "",
    description: "",
    category: "",
    status: "In Stock",
    quantity: "",
  };

  selectedID = this.props.match.params.id

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(`${url}/inventory/${this.selectedID}`).then((response) => {
      this.setState({
        warehouseName: response.data.warehouseName,
        itemName: response.data.itemName,
        description: response.data.description,
        category: response.data.category,
        status: response.data.status,
        quantity: response.data.quantity,
      });
    });
  };
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${url}/inventory/${this.selectedID}`, this.state)
    .then(()=>{
      window.location.href="/inventory"
    }).catch((err)=>{
      console.log(`error: ${err}`)
    })
  };

  handleRadio = (event) => {
    this.setState({
      status: event.target.value
    })
  };

  render() {
    return (
      <div className="page">
        <form className="edit-inventory-form" onSubmit={this.handleSubmit}>
          <header className="edit-inventory-header">
            <Link className="edit-inventory-header__link" to="/inventory">
              <img src={arrowBackIcon} alt="go back to page" />
            </Link>
            <h2 className="edit-inventory-header__title">
              Edit Inventory Item
            </h2>
          </header>
          <main className="edit-inventory-form__main">
            <div className="edit-inventory-item-details">
              <h3 className="edit-inventory-item-details__title">
                Item Details
              </h3>
              <label className="edit-inventory-item-details__label">
                Item Name
              </label>
              <input
                className="edit-inventory-item-details__item-input"
                name="itemName"
                onChange={this.handleChange}
                value={this.state.itemName}
              />
              <label className="edit-inventory-item-details__label">
                Description
              </label>
              <textarea
                className="edit-inventory-item-details__description"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
              >
                This 50", 4K LED TV provides a crystal-clear picture and vivid
                colors.
              </textarea>
              <label className="edit-inventory-item-details__label">
                Category
              </label>
              <select
                className="edit-inventory-item-details__item-input edit-inventory-item-details__select"
                value=""
                onChange=""
              >
                <option
                  className="edit-inventory-item-details__option"
                  value=""
                >
                  Electronics
                </option>
                <option>Electronics NEEDS TO MAP</option>
                <option>Electronics</option>
              </select>
            </div>

            <div className="edit-inventory-item-details edit-inventory-item-availability">
              <h3 className="edit-inventory-item-details__title">
                Item Availability
              </h3>
              <div>
                <label className="edit-inventory-item-details__label">
                  Status
                </label>
                <div className="edit-inventory-item-availability__stock-box">
                  <div className="edit-inventory-item-availability__stock-box">
                    <label className="edit-inventory-item-availability__label">
                      <input
                        className="edit-inventory-item-availability__radio"
                        type="radio"
                        value="In Stock"
                        checked={this.state.status === "In Stock"}
                        onChange={this.handleRadio}
                      />
                      In Stock
                    </label>
                  </div>
                  <div className="edit-inventory-item-availability__stock-box">
                    <label className="edit-inventory-item-availability__label">
                      <input
                        className="edit-inventory-item-availability__radio"
                        type="radio"
                        value="Out Of Stock"
                        checked={this.state.status === "Out of Stock"}
                        onChange={this.handleRadio}
                      />
                      Out of Stock
                    </label>
                  </div>
                </div>
              </div>
              {this.state.status==="In Stock" && <div>
                <label className="edit-inventory-item-details__label">
                  Quantity
                </label>
                <input
                  className="edit-inventory-item-details__item-input"
                  name="quantity"
                  onChange={this.handleChange}
                  value={this.state.quantity}
                />
              </div>}
              <div className="edit-inventory-item-warehouse">
                <label className="edit-inventory-item-details__label">
                  Warehouse
                </label>
                <select
                  className="edit-inventory-item-details__item-input edit-inventory-item-details__select"
                  value=""
                  onChange=""
                >
                  <option value="">Manhattan</option>
                  <option>Electronics NEEDS TO MAP</option>
                  <option>Electronics</option>
                </select>
              </div>
            </div>
          </main>
          <footer className="edit-inventory-footer">
            <Link className="edit-inventory-footer__link" to="/inventory">
              <button
                className="edit-inventory-footer__button edit-inventory-footer__cancel"
                type="reset"
              >
                Cancel
              </button>
            </Link>
            <Link to="">
              <button
                className="edit-inventory-footer__button edit-inventory-footer__save"
                type="submit"
              >
                Save
              </button>
            </Link>
          </footer>
        </form>
      </div>
    );
  }
}

export default EditInventory;
