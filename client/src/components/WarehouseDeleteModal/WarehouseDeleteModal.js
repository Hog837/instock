import React from "react";
import closeIcon from "../../assets/Icons/close-24px.svg";
import "./WarehouseDeleteModal.scss";
function WarehouseDeleteModal() {
  return (
    <div className="delete-modal">
      <div className="delete-modal__content">
        <img className="delete-modal__close-icon" src={closeIcon} alt="close"/>
        <h2 className="delete-modal__header">Delete King West warehouse?</h2>
        <p className="delete-modal__text">Please confirm that you'd like to delete the King West from the list of warehouses. You won't be able to undo this action.</p>
      </div>
      <div className="delete-modal-buttons">
        <button className="delete-modal-buttons__button delete-modal-buttons__cancel-button">Cancel</button>
        <button className="delete-modal-buttons__button delete-modal-buttons__delete-button">Delete</button>
      </div>
    </div>
  );
}

export default WarehouseDeleteModal;
