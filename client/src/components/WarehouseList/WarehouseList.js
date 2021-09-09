import React from "react";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import WarehouseDeleteModal from "../WarehouseDeleteModal/WarehouseDeleteModal";
import "./WarehouseList.scss";

function WarehouseList() {
  return (
    <div className="warehouse-lists">
      <form className="page-form">
          <h1 className="page-form__title">Warehouses</h1>
          <input className="page-form__input" type="text" name="search" placeholder="Search..." ></input>
          <button className="page-form__button" type="submit">+ Add New Warehouse</button>
      </form>
      <nav className="page-nav-bar">
        <p className="page-nav-bar__text">WAREHOUSE</p>
        <img className="page-nav-bar__sort-icon" src={sortIcon} alt="sort icon" />
        <p className="page-nav-bar__text">ADDRESS</p>
        <img className="page-nav-bar__sort-icon" src={sortIcon} alt="sort icon" />
        <p className="page-nav-bar__text">CONTACT NAME</p>
        <img className="page-nav-bar__sort-icon" src={sortIcon} alt="sort icon" />
        <p className="page-nav-bar__text">CONTACT INFORMATION</p>
        <img className="page-nav-bar__sort-icon" src={sortIcon} alt={sortIcon} />
        <p className="page-nav-bar__text">ACTIONS</p>
        <img className="page-nav-bar__sort-icon" src={sortIcon} alt="sort icon" />
      </nav>
      <ul className="warehouse-list">
        <li className="warehouse-item">
          <div className="warehouse-item__texts">
            <div className="warehouse-item__left">
              <div>
                <p className="warehouse-item__sub-title">WAREHOUSE</p>
                <p className="warehouse-item__warehouse-name">
                  Manhattan
                  <img className="warehouse-item__chevron-icon" src={chevronRightIcon} alt="chevron right icon" />
                </p>
              </div>
              <div>
                <p className="warehouse-item__sub-title">ADDRESS</p>
                <p className="warehouse-item__text">503 Broadway, New York, USA</p>
              </div>
            </div>
            <div className="warehouse-item__right">
              <div className="warehouse-item__contact-name-box">
                <p className="warehouse-item__sub-title">CONTACT NAME</p>
                <p className="warehouse-item__text">Parmin Aujla</p>
              </div>
              <div className="warehouse-item__contact-information-box">
                  <p className="warehouse-item__sub-title">CONTACT INFORMATION</p>
                  <p className="warehouse-item__text">+1 (629)555-0129</p>
                  <p className="warehouse-item__text">pauljla@instock.com</p>
              </div>
            </div>
          </div>
          <div className="warehouse-item__icons">
            <img className="warehouse-item__icon" src={deleteIcon} alt="delete icon" />
            <img className="warehouse-item__icon" src={editIcon} alt="edit icon" />
          </div>
        </li>
        <li className="warehouse-item">
          <div className="warehouse-item__texts">
            <div className="warehouse-item__left">
              <div>
                <p className="warehouse-item__sub-title">WAREHOUSE</p>
                <p className="warehouse-item__warehouse-name">
                  Manhattan
                  <img className="warehouse-item__chevron-icon" src={chevronRightIcon} alt="chevron right icon" />
                </p>
              </div>
              <div>
                <p className="warehouse-item__sub-title">ADDRESS</p>
                <p className="warehouse-item__text">503 Broadway, New York, USA</p>
              </div>
            </div>
            <div className="warehouse-item__right">
              <div className="warehouse-item__contact-name-box">
                <p className="warehouse-item__sub-title">CONTACT NAME</p>
                <p className="warehouse-item__text">Parmin Aujla</p>
              </div>
              <div className="warehouse-item__contact-information-box">
                  <p className="warehouse-item__sub-title">CONTACT INFORMATION</p>
                  <p className="warehouse-item__text">+1 (629)555-0129</p>
                  <p className="warehouse-item__text">pauljla@instock.com</p>
              </div>
            </div>
          </div>
          <div className="warehouse-item__icons">
            <img className="warehouse-item__icon" src={deleteIcon} alt="delete icon" />
            <img className="warehouse-item__icon" src={editIcon} alt="edit icon" />
          </div>
        </li>
        <li className="warehouse-item">
          <div className="warehouse-item__texts">
            <div className="warehouse-item__left">
              <div>
                <p className="warehouse-item__sub-title">WAREHOUSE</p>
                <p className="warehouse-item__warehouse-name">
                  Manhattan
                  <img className="warehouse-item__chevron-icon" src={chevronRightIcon} alt="chevron right icon" />
                </p>
              </div>
              <div>
                <p className="warehouse-item__sub-title">ADDRESS</p>
                <p className="warehouse-item__text">503 Broadway, New York, USA</p>
              </div>
            </div>
            <div className="warehouse-item__right">
              <div className="warehouse-item__contact-name-box">
                <p className="warehouse-item__sub-title">CONTACT NAME</p>
                <p className="warehouse-item__text">Parmin Aujla</p>
              </div>
              <div className="warehouse-item__contact-information-box">
                  <p className="warehouse-item__sub-title">CONTACT INFORMATION</p>
                  <p className="warehouse-item__text">+1 (629)555-0129</p>
                  <p className="warehouse-item__text">pauljla@instock.com</p>
              </div>
            </div>
          </div>
          <div className="warehouse-item__icons">
            <img className="warehouse-item__icon" src={deleteIcon} alt="delete icon" />
            <img className="warehouse-item__icon" src={editIcon} alt="edit icon" />
          </div>
        </li>
        <li className="warehouse-item">
          <div className="warehouse-item__texts">
            <div className="warehouse-item__left">
              <div>
                <p className="warehouse-item__sub-title">WAREHOUSE</p>
                <p className="warehouse-item__warehouse-name">
                  Manhattan
                  <img className="warehouse-item__chevron-icon" src={chevronRightIcon} alt="chevron right icon" />
                </p>
              </div>
              <div>
                <p className="warehouse-item__sub-title">ADDRESS</p>
                <p className="warehouse-item__text">503 Broadway, New York, USA</p>
              </div>
            </div>
            <div className="warehouse-item__right">
              <div className="warehouse-item__contact-name-box">
                <p className="warehouse-item__sub-title">CONTACT NAME</p>
                <p className="warehouse-item__text">Parmin Aujla</p>
              </div>
              <div className="warehouse-item__contact-information-box">
                  <p className="warehouse-item__sub-title">CONTACT INFORMATION</p>
                  <p className="warehouse-item__text">+1 (629)555-0129</p>
                  <p className="warehouse-item__text">pauljla@instock.com</p>
              </div>
            </div>
          </div>
          <div className="warehouse-item__icons">
            <img className="warehouse-item__icon" src={deleteIcon} alt="delete icon" />
            <img className="warehouse-item__icon" src={editIcon} alt="edit icon" />
          </div>
        </li>
        <li className="warehouse-item">
          <div className="warehouse-item__texts">
            <div className="warehouse-item__left">
              <div>
                <p className="warehouse-item__sub-title">WAREHOUSE</p>
                <p className="warehouse-item__warehouse-name">
                  Manhattan
                  <img className="warehouse-item__chevron-icon" src={chevronRightIcon} alt="chevron right icon" />
                </p>
              </div>
              <div>
                <p className="warehouse-item__sub-title">ADDRESS</p>
                <p className="warehouse-item__text">503 Broadway, New York, USA</p>
              </div>
            </div>
            <div className="warehouse-item__right">
              <div className="warehouse-item__contact-name-box">
                <p className="warehouse-item__sub-title">CONTACT NAME</p>
                <p className="warehouse-item__text">Parmin Aujla</p>
              </div>
              <div className="warehouse-item__contact-information-box">
                  <p className="warehouse-item__sub-title">CONTACT INFORMATION</p>
                  <p className="warehouse-item__text">+1 (629)555-0129</p>
                  <p className="warehouse-item__text">pauljla@instock.com</p>
              </div>
            </div>
          </div>
          <div className="warehouse-item__icons">
            <img className="warehouse-item__icon" src={deleteIcon} alt="delete icon" />
            <img className="warehouse-item__icon" src={editIcon} alt="edit icon" />
          </div>
        </li>
        <li className="warehouse-item">
          <div className="warehouse-item__texts">
            <div className="warehouse-item__left">
              <div>
                <p className="warehouse-item__sub-title">WAREHOUSE</p>
                <p className="warehouse-item__warehouse-name">
                  Manhattan
                  <img className="warehouse-item__chevron-icon" src={chevronRightIcon} alt="chevron right icon" />
                </p>
              </div>
              <div>
                <p className="warehouse-item__sub-title">ADDRESS</p>
                <p className="warehouse-item__text">503 Broadway, New York, USA</p>
              </div>
            </div>
            <div className="warehouse-item__right">
              <div className="warehouse-item__contact-name-box">
                <p className="warehouse-item__sub-title">CONTACT NAME</p>
                <p className="warehouse-item__text">Parmin Aujla</p>
              </div>
              <div className="warehouse-item__contact-information-box">
                  <p className="warehouse-item__sub-title">CONTACT INFORMATION</p>
                  <p className="warehouse-item__text">+1 (629)555-0129</p>
                  <p className="warehouse-item__text">pauljla@instock.com</p>
              </div>
            </div>
          </div>
          <div className="warehouse-item__icons">
            <img className="warehouse-item__icon" src={deleteIcon} alt="delete icon" />
            <img className="warehouse-item__icon" src={editIcon} alt="edit icon" />
          </div>
        </li>
        <li className="warehouse-item">
          <div className="warehouse-item__texts">
            <div className="warehouse-item__left">
              <div>
                <p className="warehouse-item__sub-title">WAREHOUSE</p>
                <p className="warehouse-item__warehouse-name">
                  Manhattan
                  <img className="warehouse-item__chevron-icon" src={chevronRightIcon} alt="chevron right icon" />
                </p>
              </div>
              <div>
                <p className="warehouse-item__sub-title">ADDRESS</p>
                <p className="warehouse-item__text">503 Broadway, New York, USA</p>
              </div>
            </div>
            <div className="warehouse-item__right">
              <div className="warehouse-item__contact-name-box">
                <p className="warehouse-item__sub-title">CONTACT NAME</p>
                <p className="warehouse-item__text">Parmin Aujla</p>
              </div>
              <div className="warehouse-item__contact-information-box">
                  <p className="warehouse-item__sub-title">CONTACT INFORMATION</p>
                  <p className="warehouse-item__text">+1 (629)555-0129</p>
                  <p className="warehouse-item__text">pauljla@instock.com</p>
              </div>
            </div>
          </div>
          <div className="warehouse-item__icons">
            <img className="warehouse-item__icon" src={deleteIcon} alt="delete icon" />
            <img className="warehouse-item__icon" src={editIcon} alt="edit icon" />
          </div>
        </li>
      </ul>
      <WarehouseDeleteModal />
    </div>
  );
}

export default WarehouseList;
