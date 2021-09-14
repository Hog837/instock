import React, { Component } from "react";
import "./WarehouseDetails.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import InventoryDeleteModal from "../InventoryDeleteModal/InventoryDeleteModal";

const url = "http://localhost:8080";

class WarehouseDetails extends Component {
  selectedID = this.props.match.params.id;

  state = {
    inventoryItems: [],
    selectedInventory: "",
    selectedWarehouse: [],
    contact: {},
    display: false,
  };

  getWarehouses() {
    axios.get(`${url}/warehouse/${this.selectedID}`).then((response) => {
      this.setState({
        selectedWarehouse: response.data,
        contact: response.data.contact,
      });
    });
  }

  getItems() {
    axios.get(`${url}/inventory`).then((response) => {
      const selectedWarehouseInventory = response.data.filter((item) => {
        return item.warehouseID === this.selectedID;
      });
      this.setState({
        inventoryItems: selectedWarehouseInventory,
      });
    });
  }

  componentDidMount() {
    this.getWarehouses();
    this.getItems();
  }

  handleModal = (handler, selectedInventory) => {
    if (handler) {
      this.setState({
        display: true,
        selectedInventory: selectedInventory,
      });
    } else {
      this.setState({
        display: false,
        selectedInventory: "",
      });
    }
  };

  handleDelete = (id) => {
    axios.delete(`${url}/inventory/${id}`).then(() => {
      this.getItems();
    });
  };

  render() {
    console.log(this.state.selectedWarehouseInventory);
    return (
      <div className="page">
        <section className="warehouse-details">
          <div className="warehouse-details__container">
            <img
              className="warehouse-details__arrowBack"
              src={arrowBack}
              alt="go back"
            ></img>
            <h1 className="warehouse-details__title">
              {this.state.selectedWarehouse.name}
            </h1>
            <Link className="warehouse-details__link" to={`/inventory/${this.selectedID.id}/edit`}>
              <button className="warehouse-details__button" type="button">
                <img
                  className="warehouse-details__button--icon"
                  src={editIcon}
                  alt="edit this warehouse"
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
                {this.state.selectedWarehouse.address} <br />{" "}
                {this.state.selectedWarehouse.city},{" "}
                {this.state.selectedWarehouse.country}
              </p>
            </div>

            <div className="warehouse-details__contacts--name-information">
              <div className="warehouse-details__contacts--name">
                <h3 className="warehouse-details__contacts--name-subtitle warehouse-details__contacts--subtitle">
                  Contact Name
                </h3>
                <p className="warehouse-details__contacts--name-text warehouse-details__contacts--text">
                  {this.state.contact.name} <br /> {this.state.contact.position}
                </p>
              </div>
              <div className="warehouse-details__contacts--information">
                <h3 className="warehouse-details__contacts--information-subtitle warehouse-details__contacts--subtitle">
                  Contact Information
                </h3>
                <p className="warehouse-details__contacts--information-text warehouse-details__contacts--text">
                  {this.state.contact.phone} <br /> {this.state.contact.email}
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
              return (
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
                        <p
                          className={
                            inventoryItem.status === "Out of Stock"
                              ? "warehouse-details__item--outOfStock"
                              : "warehouse-details__item--inStock"
                          }
                        >
                          {inventoryItem.status}
                        </p>
                      </div>
                      <div className="warehouse-details__item--container warehouse-details__item--qty">
                        <h3 className="warehouse-details__item--subtitle">
                          qty
                        </h3>
                        <p className="warehouse-details__item--text">
                          {" "}
                          {inventoryItem.quantity}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="warehouse-details__icons">
                    <img
                      onClick={() => {
                        this.handleModal(true, inventoryItem);
                      }}
                      className="warehouse-details__icon"
                      src={deleteIcon}
                      alt="delete icon"
                    />
                    <Link to={`/warehouse/${inventoryItem.id}/edit`}>
                      <img src={editIcon} alt="edit icon" />
                    </Link>
                  </div>
                </li>
              );
            })}
            ;
          </ul>
        </section>
        {this.state.display && (
          <InventoryDeleteModal
            handleModal={this.handleModal}
            selectedInventory={this.state.selectedInventory}
            handleDelete={this.handleDelete}
          />
        )}
      </div>
    );
  }
}

export default WarehouseDetails;
