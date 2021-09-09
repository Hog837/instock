import React from "react";
import "./WarehouseDetails.scss";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";

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
            <h3 className="warehouse-details__contacts--address-subtitle warehouse-details__contacts--subtitle">Warehouse Address</h3>
            <p className="warehouse-details__contacts--address-text warehouse-details__contacts--text"> 469 King Street West <br/> Toronto, CAN</p>
        </div>
        <div className="warehouse-details__contacts--name">
            <h3 className="warehouse-details__contacts--name-subtitle warehouse-details__contacts--subtitle">Contact Name</h3>
            <p className="warehouse-details__contacts--name-text warehouse-details__contacts--text">Graeme Lyon <br/> Warehouse Manager</p>
        </div>
        <div className="warehouse-details__contacts--information">
        <h3 className="warehouse-details__contacts--information-subtitle warehouse-details__contacts--subtitle">Contact Information</h3>
            <p className="warehouse-details__contacts--information-text warehouse-details__contacts--text"> +1 (647) 504-0911 <br/> glyon@instock.com</p>
        </div>
      </div>

      <nav className="wd-nav">
        <p className="wd-nav__text">Inventory Item</p>
        <img className="wd-nav__sort-icon" src={sortIcon} alt="sort icon" />
        <p className="wd-nav__text">Categoty</p>
        <img className="wd-nav__sort-icon" src={sortIcon} alt="sort icon" />
        <p className="wd-nav__text">Status</p>
        <img className="wd-nav__sort-icon" src={sortIcon} alt="sort icon" />
        <p className="wd-nav__text">Quantity</p>
        <img className="wd-nav__sort-icon" src={sortIcon} alt={sortIcon} />
        <p className="wd-nav__text">Actions</p>
      </nav>

      <ul className="warehouse-details-list">

      </ul>

      {/* <ul className="warehouse-details-list">
        <li className="warehouse-details-item">
          <div className="warehouse-details-item__texts">
            <div className="warehouse-details-item__left">
              <div>
                <p className="warehouse-details-item__sub-title">WAREHOUSE-details</p>
                <p className="warehouse-details-item__warehouse-details-name">
                  Manhattan
                  <img className="warehouse-details-item__chevron-icon" src={chevronRightIcon} alt="chevron right icon" />
                </p>
              </div>
              <div>
                <p className="warehouse-details-item__sub-title">ADDRESS</p>
                <p className="warehouse-details-item__text">503 Broadway, New York, USA</p>
              </div>
            </div>
            <div className="warehouse-details-item__right">
              <div className="warehouse-details-item__contact-name-box">
                <p className="warehouse-details-item__sub-title">CONTACT NAME</p>
                <p className="warehouse-details-item__text">Parmin Aujla</p>
              </div>
              <div className="warehouse-details-item__contact-information-box">
                  <p className="warehouse-details-item__sub-title">CONTACT INFORMATION</p>
                  <p className="warehouse-details-item__text">+1 (629)555-0129</p>
                  <p className="warehouse-details-item__text">pauljla@instock.com</p>
              </div>
            </div>
          </div>
        </li>
        </ul> */}
    </section>
    </div>
  );
}

export default WarehouseDetails;
