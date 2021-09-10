import React, { useState } from "react";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import WarehouseDeleteModal from "../WarehouseDeleteModal/WarehouseDeleteModal";
import "./InventoryList.scss";

function InventoryList() {
  const [display, setDisplay] = useState(false)

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
          <button className="page-form__button" type="submit">
            + Add New Item
          </button>
        </form>
        <nav className="page-nav-bar">
          <p className="page-nav-bar__text">Inventory Item</p>
          <img
            className="page-nav-bar__sort-icon"
            src={sortIcon}
            alt="sort icon"
          />
          <p className="page-nav-bar__text">Category</p>
          <img
            className="page-nav-bar__sort-icon"
            src={sortIcon}
            alt="sort icon"
          />
          <p className="page-nav-bar__text">Status</p>
          <img
            className="page-nav-bar__sort-icon"
            src={sortIcon}
            alt="sort icon"
          />
          <p className="page-nav-bar__text">Qty</p>
          <img
            className="page-nav-bar__sort-icon"
            src={sortIcon}
            alt={sortIcon}
          />
          <p className="page-nav-bar__text">Warehouses</p>
          <img
            className="page-nav-bar__sort-icon"
            src={sortIcon}
            alt={sortIcon}
          />
          <p className="page-nav-bar__text">ACTIONS</p>
        </nav>
        <ul className="inventory-list">
          <li className="inventory-item">
            <div className="inventory-item__texts">
              <div className="inventory-item__left">
                <div className="inventory-item__left-1">
                  <p className="inventory-item__sub-title">INVENTORY ITEM</p>
                  <p className="inventory-item__inventory-name">
                    Television
                    <img
                      src={chevronRightIcon}
                      alt="chevron right icon"
                    />
                  </p>
                </div>
                <div className="inventory-item__left-2">
                  <p className="inventory-item__sub-title">CATEGORY</p>
                  <p className="inventory-item__text">
                    Electronics
                  </p>
                </div>
              </div>
              <div className="inventory-item__right">
                <div className="inventory-item__right-1">
                  <p className="inventory-item__sub-title">STATUS</p>
                  <p className="inventory-item__text-status">INSTOCK</p>
                </div>
                <div  className="inventory-item__right-2">
                  <p className="inventory-item__sub-title">
                    QTY
                  </p>
                  <p className="inventory-item__text">500</p>
                </div>
                <div  className="inventory-item__right-2">
                  <p className="inventory-item__sub-title">
                    WAREHOUSE
                  </p>
                  <p className="inventory-item__text">Manhatttan</p>
                </div>
              </div>
            </div>
            <div className="inventory-item__icons">
              <button className="inventory-item__icon invisible-button" onClick={()=> setDisplay(true)}><img
                src={deleteIcon}
                alt="delete icon"
              /></button>
              <button className="invisible-button"><img
                src={editIcon}
                alt="edit icon"
              /></button>
            </div>
          </li>
          <li className="inventory-item">
            <div className="inventory-item__texts">
              <div className="inventory-item__left">
                <div className="inventory-item__left-1">
                  <p className="inventory-item__sub-title">INVENTORY ITEM</p>
                  <p className="inventory-item__inventory-name">
                    Television
                    <img
                      src={chevronRightIcon}
                      alt="chevron right icon"
                    />
                  </p>
                </div>
                <div className="inventory-item__left-2">
                  <p className="inventory-item__sub-title">CATEGORY</p>
                  <p className="inventory-item__text">
                    Electronics
                  </p>
                </div>
              </div>
              <div className="inventory-item__right">
                <div className="inventory-item__right-1">
                  <p className="inventory-item__sub-title">STATUS</p>
                  <p className="inventory-item__text-status">OUT OF STOCK</p>
                </div>
                <div  className="inventory-item__right-2">
                  <p className="inventory-item__sub-title">
                    QTY
                  </p>
                  <p className="inventory-item__text">500</p>
                </div>
                <div  className="inventory-item__right-2">
                  <p className="inventory-item__sub-title">
                    WAREHOUSE
                  </p>
                  <p className="inventory-item__text">Manhatttan</p>
                </div>
              </div>
            </div>
            <div className="inventory-item__icons">
              <button className="inventory-item__icon invisible-button" onClick={()=> setDisplay(true)}><img
                src={deleteIcon}
                alt="delete icon"
              /></button>
              <button className="invisible-button"><img
                src={editIcon}
                alt="edit icon"
              /></button>
            </div>
          </li>
          <li className="inventory-item">
            <div className="inventory-item__texts">
              <div className="inventory-item__left">
                <div className="inventory-item__left-1">
                  <p className="inventory-item__sub-title">INVENTORY ITEM</p>
                  <p className="inventory-item__inventory-name">
                    Television
                    <img
                      src={chevronRightIcon}
                      alt="chevron right icon"
                    />
                  </p>
                </div>
                <div className="inventory-item__left-2">
                  <p className="inventory-item__sub-title">CATEGORY</p>
                  <p className="inventory-item__text">
                    Electronics
                  </p>
                </div>
              </div>
              <div className="inventory-item__right">
                <div className="inventory-item__right-1">
                  <p className="inventory-item__sub-title">STATUS</p>
                  <p className="inventory-item__text-status">OUT OF STOCK</p>
                </div>
                <div  className="inventory-item__right-2">
                  <p className="inventory-item__sub-title">
                    QTY
                  </p>
                  <p className="inventory-item__text">500</p>
                </div>
                <div  className="inventory-item__right-2">
                  <p className="inventory-item__sub-title">
                    WAREHOUSE
                  </p>
                  <p className="inventory-item__text">Manhatttan</p>
                </div>
              </div>
            </div>
            <div className="inventory-item__icons">
              <button className="inventory-item__icon invisible-button" onClick={()=> setDisplay(true)}><img
                src={deleteIcon}
                alt="delete icon"
              /></button>
              <button className="inventory-button"><img
                src={editIcon}
                alt="edit icon"
              /></button>
            </div>
          </li>
          <li className="inventory-item">
            <div className="inventory-item__texts">
              <div className="inventory-item__left">
                <div className="inventory-item__left-1">
                  <p className="inventory-item__sub-title">INVENTORY ITEM</p>
                  <p className="inventory-item__inventory-name">
                    Television
                    <img
                      src={chevronRightIcon}
                      alt="chevron right icon"
                    />
                  </p>
                </div>
                <div className="inventory-item__left-2">
                  <p className="inventory-item__sub-title">CATEGORY</p>
                  <p className="inventory-item__text">
                    Electronics
                  </p>
                </div>
              </div>
              <div className="inventory-item__right">
                <div className="inventory-item__right-1">
                  <p className="inventory-item__sub-title">STATUS</p>
                  <p className="inventory-item__text-status">INSTOCK</p>
                </div>
                <div  className="inventory-item__right-2">
                  <p className="inventory-item__sub-title">
                    QTY
                  </p>
                  <p className="inventory-item__text">500</p>
                </div>
                <div  className="inventory-item__right-2">
                  <p className="inventory-item__sub-title">
                    WAREHOUSE
                  </p>
                  <p className="inventory-item__text">Manhatttan</p>
                </div>
              </div>
            </div>
            <div className="inventory-item__icons">
              <button className="inventory-item__icon invisible-button" onClick={()=> setDisplay(true)}><img
                src={deleteIcon}
                alt="delete icon"
              /></button>
              <button className="invisible-button"><img
                src={editIcon}
                alt="edit icon"
              /></button>
            </div>
          </li>
          <li className="inventory-item">
            <div className="inventory-item__texts">
              <div className="inventory-item__left">
                <div className="inventory-item__left-1">
                  <p className="inventory-item__sub-title">INVENTORY ITEM</p>
                  <p className="inventory-item__inventory-name">
                    Television
                    <img
                      src={chevronRightIcon}
                      alt="chevron right icon"
                    />
                  </p>
                </div>
                <div className="inventory-item__left-2">
                  <p className="inventory-item__sub-title">CATEGORY</p>
                  <p className="inventory-item__text">
                    Electronics
                  </p>
                </div>
              </div>
              <div className="inventory-item__right">
                <div className="inventory-item__right-1">
                  <p className="inventory-item__sub-title">STATUS</p>
                  <p className="inventory-item__text-status">INSTOCK</p>
                </div>
                <div  className="inventory-item__right-2">
                  <p className="inventory-item__sub-title">
                    QTY
                  </p>
                  <p className="inventory-item__text">500</p>
                </div>
                <div  className="inventory-item__right-2">
                  <p className="inventory-item__sub-title">
                    WAREHOUSE
                  </p>
                  <p className="inventory-item__text">Manhatttan</p>
                </div>
              </div>
            </div>
            <div className="inventory-item__icons">
              <button className="inventory-item__icon invisible-button" onClick={()=> setDisplay(true)}><img
                src={deleteIcon}
                alt="delete icon"
              /></button>
              <button className="invisible-button"><img
                src={editIcon}
                alt="edit icon"
              /></button>
            </div>
          </li>
          <li className="inventory-item">
            <div className="inventory-item__texts">
              <div className="inventory-item__left">
                <div className="inventory-item__left-1">
                  <p className="inventory-item__sub-title">INVENTORY ITEM</p>
                  <p className="inventory-item__inventory-name">
                    Television
                    <img
                      src={chevronRightIcon}
                      alt="chevron right icon"
                    />
                  </p>
                </div>
                <div className="inventory-item__left-2">
                  <p className="inventory-item__sub-title">CATEGORY</p>
                  <p className="inventory-item__text">
                    Electronics
                  </p>
                </div>
              </div>
              <div className="inventory-item__right">
                <div className="inventory-item__right-1">
                  <p className="inventory-item__sub-title">STATUS</p>
                  <p className="inventory-item__text-status">INSTOCK</p>
                </div>
                <div  className="inventory-item__right-2">
                  <p className="inventory-item__sub-title">
                    QTY
                  </p>
                  <p className="inventory-item__text">500</p>
                </div>
                <div  className="inventory-item__right-2">
                  <p className="inventory-item__sub-title">
                    WAREHOUSE
                  </p>
                  <p className="inventory-item__text">Manhatttan</p>
                </div>
              </div>
            </div>
            <div className="inventory-item__icons">
              <button className="inventory-item__icon invisible-button" onClick={()=> setDisplay(true)}><img
                src={deleteIcon}
                alt="delete icon"
              /></button>
              <button className="invisible-button"><img
                src={editIcon}
                alt="edit icon"
              /></button>
            </div>
          </li>
          <li className="inventory-item">
            <div className="inventory-item__texts">
              <div className="inventory-item__left">
                <div className="inventory-item__left-1">
                  <p className="inventory-item__sub-title">INVENTORY ITEM</p>
                  <p className="inventory-item__inventory-name">
                    Television
                    <img
                      src={chevronRightIcon}
                      alt="chevron right icon"
                    />
                  </p>
                </div>
                <div className="inventory-item__left-2">
                  <p className="inventory-item__sub-title">CATEGORY</p>
                  <p className="inventory-item__text">
                    Electronics
                  </p>
                </div>
              </div>
              <div className="inventory-item__right">
                <div className="inventory-item__right-1">
                  <p className="inventory-item__sub-title">STATUS</p>
                  <p className="inventory-item__text-status">INSTOCK</p>
                </div>
                <div  className="inventory-item__right-2">
                  <p className="inventory-item__sub-title">
                    QTY
                  </p>
                  <p className="inventory-item__text">500</p>
                </div>
                <div  className="inventory-item__right-2">
                  <p className="inventory-item__sub-title">
                    WAREHOUSE
                  </p>
                  <p className="inventory-item__text">Manhatttan</p>
                </div>
              </div>
            </div>
            <div className="inventory-item__icons">
              <button className="inventory-item__icon invisible-button" onClick={()=> setDisplay(true)}><img
                src={deleteIcon}
                alt="delete icon"
              /></button>
              <button className="invisible-button"><img
                src={editIcon}
                alt="edit icon"
              /></button>
            </div>
          </li>
        </ul>
        <WarehouseDeleteModal 
        display={display} 
        onClose={()=> setDisplay(false)} />
      </div>
    </div>
  );
}

export default InventoryList;

