import React, { Component } from "react";
import "./InventoryDetails.scss";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:8080";

class InventoryDetails extends Component {
  selectedID = this.props.match.params.id;
  state = {
    warehouseName: "",
    itemName: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
  };

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

  render() {
    return (
      <div className="page">
        <div className="inventory-details">
          <header className="inventory-details__header">
            <div className="inventory-details-header__left">
              <Link to="/inventory" className="inventory-details-header__link"><img
                className="inventory-details__arrow-back"
                src={arrowBack}
              /></Link>
              <h1 className="inventory-details__title">
                {this.state.itemName}
              </h1>
            </div>
            <Link
              to={`/inventory/${this.selectedID}/edit`}
              className="inventory-details-header__link"
            >
              <div className="inventory-details__icon--background">
                <img className="inventory-details__icon" src={editIcon} />
                <p className="inventory-details__icon--text">Edit</p>
              </div>
            </Link>
          </header>
          <main className="inventory-details__main">
            <div className="inventory-details__main1">
              <p className="inventory-details-main__subtitle">
                ITEM DESCRIPTION:
              </p>
              <p className="inventory-details-main__context">
                {this.state.description}
              </p>
              <p className="inventory-details-main__subtitle">CATEGORY:</p>
              <p className="inventory-details-main__context">
                {this.state.category}
              </p>
            </div>
            <div className="inventory-details__main2">
              <div className="inventory-details__main2--top">
                <div className="inventory-details__main2--margin-right">
                  <p className="inventory-details-main__subtitle">STATUS:</p>
                  <p className={
                      this.state.status === "Out of Stock"
                        ? "warehouse-details__item--outOfStock"
                        : "warehouse-details__item--inStock"
                    }>
                    {this.state.status}
                  </p>
                </div>
                <div>
                  <p className="inventory-details-main__subtitle">QUANTITY:</p>
                  <p className="inventory-details-main__context">
                    {this.state.quantity}
                  </p>
                </div>
              </div>
              <div>
                <p className="inventory-details-main__subtitle">WAREHOUSE:</p>
                <p className="inventory-details-main__context">
                  {this.state.warehouseName}
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default InventoryDetails;
