import React from 'react'
import './InventoryDetails.scss'
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";

function InventoryDetails() {
    return (
        <div className="page">
            <div className="inventory-details__container">
            <img className="inventory-details__arrowBack" src={arrowBack}></img>
          <h1 className="inventory-details__title">King West</h1>
          <button className="inventory-details__button" type="button">
            <img className="inventory-details__button--icon" src={editIcon} />
            <p className="inventory-details__button--text">Edit</p>
          </button>
            </div>
        </div>
    )
}

export default InventoryDetails
