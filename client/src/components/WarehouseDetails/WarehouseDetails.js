import React from "react";
import "./WarehouseDetails.scss";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";

function WarehouseDetails() {
  return (
    <div className="page">
      <section className="warehouse-details">
        <div className="warehouse-details__container">
          <img className="warehouse-details__arrowBack" src={arrowBack}></img>
          <h1 className="warehouse-details__title">King West</h1>
          <button className="warehouse-details__button" type="button">
            <img className="warehouse-details__button--icon" src={editIcon} />
            <p className="warehouse-details__button--text">Edit</p>
          </button>
        </div>

        <div className="warehouse-details__contacts">
          <div className="warehouse-details__contacts--address">
            <h3 className="warehouse-details__contacts--address-subtitle warehouse-details__contacts--subtitle">
              Warehouse Address
            </h3>
            <p className="warehouse-details__contacts--address-text warehouse-details__contacts--text">
              469 King Street West <br /> Toronto, CAN
            </p>
          </div>

          <div className="warehouse-details__contacts--name-information">
            <div className="warehouse-details__contacts--name">
              <h3 className="warehouse-details__contacts--name-subtitle warehouse-details__contacts--subtitle">
                Contact Name
              </h3>
              <p className="warehouse-details__contacts--name-text warehouse-details__contacts--text">
                Graeme Lyon <br /> Warehouse Manager
              </p>
            </div>
            <div className="warehouse-details__contacts--information">
              <h3 className="warehouse-details__contacts--information-subtitle warehouse-details__contacts--subtitle">
                Contact Information
              </h3>
              <p className="warehouse-details__contacts--information-text warehouse-details__contacts--text">
                +1 (647) 504-0911 <br /> glyon@instock.com
              </p>
            </div>
          </div>
        </div>

        <nav className="wd-nav">
        <div className="wd-nav__left">
          <p className="wd-nav__text">Inventory Item</p>
          <img className="wd-nav__sort-icon" src={sortIcon} alt="sort icon" />
          <p className="wd-nav__text">Categoty</p>
          <img className="wd-nav__sort-icon" src={sortIcon} alt="sort icon" />
          <p className="wd-nav__text">Status</p>
          <img className="wd-nav__sort-icon" src={sortIcon} alt="sort icon" />
          </div>
          <div className="wd-nav__right">
          <p className="wd-nav__text">Quantity</p>
          <img className="wd-nav__sort-icon" src={sortIcon} alt={sortIcon} />
          <p className="wd-nav__text">Actions</p>
          </div>
        </nav>

        <ul className="warehouse-details__list">
          <li className="warehouse-details__item">
            <div className="warehouse-details__item-texts">
              <div className="warehouse-details__item-left">
                <div className="warehouse-details__item--container warehouse-details__item--inventory">
                  <h3 className="warehouse-details__item--subtitle">
                    Inventory Item
                  </h3>
                  <div className="warehouse-details__item--title">
                    Television
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
                  <p className="warehouse-details__item--text"> Electronics </p>
                </div>
              </div>
              <div className="warehouse-details__item-right">
                <div className="warehouse-details__item--container warehouse-details__item--status">
                  <h3 className="warehouse-details__item--subtitle">Status</h3>
                  <p className="warehouse-details__item--text warehouse-details__item--inStock"> In stock </p>
                </div>
                <div className="warehouse-details__item--container warehouse-details__item--qty">
                  <h3 className="warehouse-details__item--subtitle">qty</h3>
                  <p className="warehouse-details__item--text"> 500 </p>
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
          <li className="warehouse-details__item">
            <div className="warehouse-details__item-texts">
              <div className="warehouse-details__item-left">
                <div className="warehouse-details__item--container warehouse-details__item--inventory">
                  <h3 className="warehouse-details__item--subtitle">
                    Inventory Item
                  </h3>
                  <p className="warehouse-details__item--title">
                    Gym Bag
                    <img
                      className="warehouse-details-item__chevron-icon"
                      src={chevronRightIcon}
                      alt="chevron right icon"
                    />
                  </p>
                </div>
                <div className="warehouse-details__item--container warehouse-details__item--category">
                  <h3 className="warehouse-details__item--subtitle">
                    Category
                  </h3>
                  <p className="warehouse-details__item--text"> Gear </p>
                </div>
              </div>
              <div className="warehouse-details__item-right">
                <div className="warehouse-details__item--container warehouse-details__item--status">
                  <h3 className="warehouse-details__item--subtitle">Status</h3>
                  <p className="warehouse-details__item--text warehouse-details__item--outOfStock"> Out of stock </p>
                </div>
                <div className="warehouse-details__item--container warehouse-details__item--qty">
                  <h3 className="warehouse-details__item--subtitle">qty</h3>
                  <p className="warehouse-details__item--text"> 0 </p>
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
          <li className="warehouse-details__item">
            <div className="warehouse-details__item-texts">
              <div className="warehouse-details__item-left">
                <div className="warehouse-details__item--container warehouse-details__item--inventory">
                  <h3 className="warehouse-details__item--subtitle">
                    Inventory Item
                  </h3>
                  <p className="warehouse-details__item--title">
                    Television
                    <img
                      className="warehouse-details-item__chevron-icon"
                      src={chevronRightIcon}
                      alt="chevron right icon"
                    />
                  </p>
                </div>
                <div className="warehouse-details__item--container warehouse-details__item--category">
                  <h3 className="warehouse-details__item--subtitle">
                    Category
                  </h3>
                  <p className="warehouse-details__item--text"> Electronics </p>
                </div>
              </div>
              <div className="warehouse-details__item-right">
                <div className="warehouse-details__item--container warehouse-details__item--status">
                  <h3 className="warehouse-details__item--subtitle">Status</h3>
                  <p className="warehouse-details__item--text warehouse-details__item--inStock"> In stock </p>
                </div>
                <div className="warehouse-details__item--container warehouse-details__item--qty">
                  <h3 className="warehouse-details__item--subtitle">qty</h3>
                  <p className="warehouse-details__item--text"> 500 </p>
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
          <li className="warehouse-details__item">
            <div className="warehouse-details__item-texts">
              <div className="warehouse-details__item-left">
                <div className="warehouse-details__item--container warehouse-details__item--inventory">
                  <h3 className="warehouse-details__item--subtitle">
                    Inventory Item
                  </h3>
                  <p className="warehouse-details__item--title">
                    Gym Bag
                    <img
                      className="warehouse-details-item__chevron-icon"
                      src={chevronRightIcon}
                      alt="chevron right icon"
                    />
                  </p>
                </div>
                <div className="warehouse-details__item--container warehouse-details__item--category">
                  <h3 className="warehouse-details__item--subtitle">
                    Category
                  </h3>
                  <p className="warehouse-details__item--text"> Gear </p>
                </div>
              </div>
              <div className="warehouse-details__item-right">
                <div className="warehouse-details__item--container warehouse-details__item--status">
                  <h3 className="warehouse-details__item--subtitle">Status</h3>
                  <p className="warehouse-details__item--text warehouse-details__item--outOfStock"> Out of stock </p>
                </div>
                <div className="warehouse-details__item--container warehouse-details__item--qty">
                  <h3 className="warehouse-details__item--subtitle">qty</h3>
                  <p className="warehouse-details__item--text"> 0 </p>
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
        </ul>
      </section>     
      <p className="warehouse-details__footer footer">© InStock Inc. All Rights Reserved.</p>
    </div>
  );
}

export default WarehouseDetails;
