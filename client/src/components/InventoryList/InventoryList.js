import React, { Component } from "react";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import InventoryDeleteModal from "../InventoryDeleteModal/InventoryDeleteModal";
import "./InventoryList.scss";
import { Link } from "react-router-dom";
import axios from "axios";
const url = "http://localhost:8080";

class InventoryList extends Component {
  state = {
    items: [],
    selectedInventory: [],
    display: false,
  };

  getItems() {
    axios.get(`${url}/inventory`).then((response) => {
      this.setState({
        items: response.data,
      });
    });
  }

  componentDidMount() {
    this.getItems();
  }

  handleModal = (handler) => {
    console.log(handler);
    if (handler) {
      this.setState({
        display: true,
      });
    } else {
      this.setState({
        display: false,
      });
    }
  };

  handleDelete = (id) => {
    axios.delete(`${url}/inventory/${id}`).then(() => {
      this.getData();
    });
  };

  handleID = (selectedWarehouse) => {
    this.setState({
      selectedWarehouse: selectedWarehouse,
    });
  };

  render() {
    return (
      <div className="page">
        <div className="inventory-lists">
          <form className="page-form">
            <h1 className="page-form__title">Inventory</h1>
            <input
              className="page-form__input"
              type="text"
              name="search"
              placeholder="Search..."
            ></input>
            <Link className="page-form__Link" to="/inventory/add">
              <button className="page-form__button" type="submit">
                + Add New Item
              </button>
            </Link>
          </form>
          <nav className="page-nav">
            <p className="page-nav__text">INVENTORY ITEM</p>
            <img className="page-nav__sort-icon" src={sortIcon} alt="" />
            <p className="page-nav__text">CATEGORY</p>
            <img className="page-nav__sort-icon" src={sortIcon} alt="" />
            <p className="page-nav__text">STATUS</p>
            <img className="page-nav__sort-icon" src={sortIcon} alt="" />
            <p className="page-nav__text--qty">QTY</p>
            <img className="page-nav__sort-icon" src={sortIcon} alt="" />
            <p className="page-nav__text">WAREHOUSES</p>
            <img className="page-nav__sort-icon" src={sortIcon} alt="" />
            <p className="page-nav__text">ACTIONS</p>
          </nav>
          {this.state.items.map((item) => {
            return (
              <ul className="inventory-list">
                <li className="inventory-item">
                  <div className="inventory-item__texts">
                    <div className="inventory-item__left">
                      <div className="inventory-item__left-1">
                        <p className="inventory-item__sub-title">
                          INVENTORY ITEM
                        </p>
                        <p className="inventory-item__inventory-name">
                          {item.itemName}
                          <img
                            src={chevronRightIcon}
                            alt="chevron right icon"
                          />
                        </p>
                      </div>
                      <div className="inventory-item__left-2">
                        <p className="inventory-item__sub-title">CATEGORY</p>
                        <p className="inventory-item__text-category">
                          {item.category}
                        </p>
                      </div>
                    </div>
                    <div className="inventory-item__right">
                      <div className="inventory-item__right-1">
                        <p className="inventory-item__sub-title">STATUS</p>
                        <p
                          className={
                            item.status === "Out of Stock"
                              ? "inventory-item__outOfStock"
                              : "inventory-item__inStock"
                          }
                        >
                          {item.status}
                        </p>
                      </div>
                      <div className="inventory-item__right-2">
                        <p className="inventory-item__sub-title">QTY</p>
                        <p className="inventory-item__text-quantity">
                          {item.quantity}
                        </p>
                      </div>
                      <div className="inventory-item__right-2">
                        <p className="inventory-item__sub-title">WAREHOUSE</p>
                        <p className="inventory-item__text-warehouse">
                          {item.warehouseName}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="inventory-item__icons">
                    <button
                      className="inventory-item__icon invisible-button"
                      onClick={() => 
                        {this.handleModal(true);
                        this.handleID(item);
                      }}
                    >
                      <img src={deleteIcon} alt="delete icon" />
                    </button>
                    <Link to={`/inventory/${item.id}/edit`}>
                      <img src={editIcon} alt="edit icon" />
                    </Link>
                  </div>
                </li>
              </ul>
            );
          })}
          {this.state.display && <InventoryDeleteModal
            handleModal={this.handleModal}
            selectedInventory={this.state.selectedInventory}
            handleDelete={this.handleDelete}
          />}
        </div>
      </div>
    );
  }
}

export default InventoryList;
