import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EditInventory.scss";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";

class EditInventory extends Component {

  render() {
    return (
      <div>
        <div className="page">
          <form className="edit-inventory-form">
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
                  placeholder="Television"
                />
                <label className="edit-inventory-item-details__label">
                  Description
                </label>
                <textarea
                  className="edit-inventory-item-details__description"
                  name="description"
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
                      <input
                        className="edit-inventory-item-availability__radio"
                        type="radio"
                        value=""
                        checked={true}
                        name=""
                      />
                      <label className="edit-inventory-item-availability__label">
                        In Stock
                      </label>
                    </div>
                    <div className="edit-inventory-item-availability__stock-box">
                      <input
                        className="edit-inventory-item-availability__radio"
                        type="radio"
                        value=""
                        checked={false}
                        name=""
                      />
                      <label className="edit-inventory-item-availability__label">
                        {" "}
                        Out of Stock
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="edit-inventory-item-details__label">
                    Quantity
                  </label>
                  <input
                    className="edit-inventory-item-details__item-input"
                    placeholder="0"
                    name="quantity"
                  />
                </div>
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
              <Link>
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
      </div>
    );
  }
}

export default EditInventory;
