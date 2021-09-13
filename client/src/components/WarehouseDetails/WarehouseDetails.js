import React, { Component } from "react";
import "./WarehouseDetails.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";

const url = "http://localhost:8080";

class WarehouseDetails extends Component {
  selectedID = this.props.match.params.id;

  state = {
    inventoryItems: [],
    selectedWarehouse: []
  };

  getWarehouses() {
    axios.get(`${url}/warehouse/${this.selectedID}`).then((response) => {
      this.setState({
        selectedWarehouse: response.data
      });
    });
  }

  getItems(){
    axios.get(`${url}/inventory`).then((response) => {
      const selectedWarehouseInventory = response.data.filter((item)=>{
        return(item.warehouseID===this.selectedID)
      })
      console.log(selectedWarehouseInventory);
      this.setState({
        inventoryItems: selectedWarehouseInventory
      });
    });
  }


  componentDidMount() {
    this.getWarehouses();
    this.getItems();
  }

  // handleModal = (handler) => {
  //   console.log(handler);
  //   if (handler) {
  //     this.setState({
  //       display: true,
  //     });
  //   } else {
  //     this.setState({
  //       display: false,
  //     });
  //   }
  // };

  // handleDelete = (id) => {
  //   axios.delete(`${url}/warehouse/${this.selectedID}`).then(() => {
  //     this.getData();
  //   });
  // };

  // handleID = (selectedWarehouse) => {
  //   this.setState({
  //     selectedWarehouse: selectedWarehouse,
  //   });
  // };

  render() {
    console.log(this.state.selectedWarehouse);
    return (
      <div className="page">
        <section className="warehouse-details">
          <div className="warehouse-details__container">
            <img className="warehouse-details__arrowBack" src={arrowBack}></img>
            <h1 className="warehouse-details__title">{this.state.selectedWarehouse.name}</h1>
            <Link className="warehouse-details__link" to="/warehouse/:id/edit">
              <button className="warehouse-details__button" type="button">
                <img
                  className="warehouse-details__button--icon"
                  src={editIcon}
                />
                <p className="warehouse-details__button--text">Edit</p>
              </button>
            </Link>
          </div>

          <div className="warehouse-details__contacts">
            <div className="warehouse-details__contacts--address">
              <h3 className="warehouse-details__contacts--address-subtitle warehouse-details__contacts--subtitle">
                Warehouse Address
              </h3>
              <p className="warehouse-details__contacts--address-text warehouse-details__contacts--text">
                {this.state.selectedWarehouse.address} <br />  {this.state.selectedWarehouse.city},  {this.state.selectedWarehouse.country}
              </p>
            </div>

            <div className="warehouse-details__contacts--name-information">
              <div className="warehouse-details__contacts--name">
                <h3 className="warehouse-details__contacts--name-subtitle warehouse-details__contacts--subtitle">
                  Contact Name
                </h3>
                <p className="warehouse-details__contacts--name-text warehouse-details__contacts--text">
                {/* {this.state.selectedWarehouse.contact.name} <br />  {this.state.selectedWarehouse.contact.position} */}
                </p>
              </div>
              <div className="warehouse-details__contacts--information">
                <h3 className="warehouse-details__contacts--information-subtitle warehouse-details__contacts--subtitle">
                  Contact Information
                </h3>
                <p className="warehouse-details__contacts--information-text warehouse-details__contacts--text">
                {/* {this.state.selectedWarehouse.contact.phone} <br /> {this.state.selectedWarehouse.contact.email} */}
                </p>
              </div>
            </div>
          </div>

          <nav className="wd-nav">
            <div className="wd-nav__left">
              <p className="wd-nav__text">Inventory Item</p>
              <img
                className="wd-nav__sort-icon"
                src={sortIcon}
                alt="sort icon"
              />
              <p className="wd-nav__text">Categoty</p>
              <img
                className="wd-nav__sort-icon"
                src={sortIcon}
                alt="sort icon"
              />
              <p className="wd-nav__text">Status</p>
              <img
                className="wd-nav__sort-icon"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <div className="wd-nav__right">
              <p className="wd-nav__text wd-nav__text--quantity">Quantity</p>
              <p className="wd-nav__text--qty">QTY</p>
              <img
                className="wd-nav__sort-icon"
                src={sortIcon}
                alt={sortIcon}
              />
              <p className="wd-nav__text">Actions</p>
            </div>
          </nav>

          <ul className="warehouse-details__list">
          {this.state.inventoryItems.map((inventoryItem) => { 
            return(
            <li key={inventoryItem.id} className="warehouse-details__item">
              <div className="warehouse-details__item-texts">
                <div className="warehouse-details__item-left">
                  <div className="warehouse-details__item--container warehouse-details__item--inventory">
                    <h3 className="warehouse-details__item--subtitle">
                      Inventory Item
                    </h3>
                    <div className="warehouse-details__item--title">
                      {inventoryItem.itemName}
                      <img
                        className="warehouse-details-item__chevron-icon"
                        src={chevronRightIcon}
                        alt="chevron right icon"
                      />
                    </div>
                  </div>
                  <div className="warehouse-details__item--container warehouse-details__item--category">
                    <h3 className="warehouse-details__item--subtitle">
                      Category
                    </h3>
                    <p className="warehouse-details__item--text">
                      {inventoryItem.category}
                    </p>
                  </div>
                </div>
                <div className="warehouse-details__item-right">
                  <div className="warehouse-details__item--container warehouse-details__item--status">
                    <h3 className="warehouse-details__item--subtitle">
                      Status
                    </h3>
                    <p className="warehouse-details__item--text"
                    className={
                      inventoryItem.status === "Out of Stock"
                        ? "warehouse-details__item--outOfStock"
                        : "warehouse-details__item--inStock"
                    }>
                    {inventoryItem.status}
                    </p>
                  </div>
                  <div className="warehouse-details__item--container warehouse-details__item--qty">
                    <h3 className="warehouse-details__item--subtitle">qty</h3>
                    <p className="warehouse-details__item--text"> {inventoryItem.quantity} </p>
                  </div>
                </div>
              </div>
              <div className="warehouse-details__icons">
                <img
                  className="warehouse-details__icon"
                  src={deleteIcon}
                  alt="delete icon"
                />
                <img
                  className="warehouse-details__icon"
                  src={editIcon}
                  alt="edit icon"
                />
              </div>
            </li>
        );
    })};
          </ul>
        </section>
      </div>
    );
  }
}

export default WarehouseDetails;
