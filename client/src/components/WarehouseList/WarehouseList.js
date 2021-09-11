import React, { Component } from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import WarehouseDeleteModal from "../WarehouseDeleteModal/WarehouseDeleteModal";
import "./WarehouseList.scss";
import axios from "../../../../server/node_modules/axios";

const url = "http://localhost:8080";

class WarehouseList extends Component {
  state = {
    data: [],
    selectedWarehouse: [],
    display: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(`${url}/warehouse`).then((response) => {
      this.setState({
        data: response.data,
      });
    });
  };

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

  handleID = (selectedWarehouse) => {
    this.setState({
      selectedWarehouse: selectedWarehouse,
    });
  };

  handleDelete = (id) => {
    axios.delete(`${url}/warehouse/${id}`).then(() => {
      this.getData();
    });
  };

  render() {
    return (
      <div className="page">
        <div className="warehouse-lists">
          <form className="page-form">
            <h1 className="page-form__title">Warehouses</h1>
            <input
              className="page-form__input"
              type="text"
              name="search"
              placeholder="Search..."
            ></input>
            <Link className="page-form__Link" to="/warehouse/add">
              <button className="page-form__button" type="submit">
                + Add New Warehouse
              </button>
            </Link>
          </form>
          <nav className="page-nav-bar">
            <p className="page-nav-bar__text">WAREHOUSE</p>
            <img
              className="page-nav-bar__sort-icon"
              src={sortIcon}
              alt="sort icon"
            />
            <p className="page-nav-bar__text">ADDRESS</p>
            <img
              className="page-nav-bar__sort-icon"
              src={sortIcon}
              alt="sort icon"
            />
            <p className="page-nav-bar__text">CONTACT NAME</p>
            <img
              className="page-nav-bar__sort-icon"
              src={sortIcon}
              alt="sort icon"
            />
            <p className="page-nav-bar__text">CONTACT INFORMATION</p>
            <img
              className="page-nav-bar__sort-icon"
              src={sortIcon}
              alt={sortIcon}
            />
            <p className="page-nav-bar__text">ACTIONS</p>
          </nav>
          <ul className="warehouse-list">
            {this.state.data.map((warehouse) => {
              return (
                <li className="warehouse-item">
                  <div className="warehouse-item__texts">
                    <div className="warehouse-item__left">
                      <div className="warehouse-item__left-1">
                        <Link className="warehouse-item__Link" to={`/warehouse/${warehouse.id}`}>
                        <p className="warehouse-item__sub-title">WAREHOUSE</p>
                        <p className="warehouse-item__warehouse-name">
                          {warehouse.name}
                          <img
                            src={chevronRightIcon}
                            alt="chevron right icon"
                          />
                        </p>
                        </Link>
                      </div>
                      <div className="warehouse-item__left-2">
                        <p className="warehouse-item__sub-title">ADDRESS</p>
                        <p className="warehouse-item__text">
                          {`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
                        </p>
                      </div>
                    </div>
                    <div className="warehouse-item__right">
                      <div className="warehouse-item__right-1">
                        <p className="warehouse-item__sub-title">
                          CONTACT NAME
                        </p>
                        <p className="warehouse-item__text">
                          {warehouse.contact.name}
                        </p>
                      </div>
                      <div className="warehouse-item__right-2">
                        <p className="warehouse-item__sub-title">
                          CONTACT INFORMATION
                        </p>
                        <p className="warehouse-item__text">
                          {warehouse.contact.phone}
                        </p>
                        <p className="warehouse-item__text">
                          {warehouse.contact.email}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="warehouse-item__icons">
                    <button
                      type="button"
                      className="warehouse-item__icon invisible-button"
                      onClick={() => {
                        this.handleModal(true);
                        this.handleID(warehouse);
                      }}
                    >
                      <img src={deleteIcon} alt="delete icon" />
                    </button>
                    <Link to={`/warehouse/${warehouse.id}/edit`}>
                      <button type="button" className="invisible-button">
                        <img src={editIcon} alt="edit icon" />
                      </button>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
          {this.state.display && (
            <WarehouseDeleteModal
              handleModal={this.handleModal}
              selectedWarehouse={this.state.selectedWarehouse}
              handleDelete={this.handleDelete}
            />
          )}
        </div>
      </div>
    );
  }
}

export default WarehouseList;
