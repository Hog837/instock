import React from "react";
import closeIcon from "../../assets/icons/close-24px.svg";
import "./WarehouseDeleteModal.scss";
function WarehouseDeleteModal({display, onClose}) {
  if(!display){
    return null
  }
  return (
    <div className="modal-background" onClick={onClose}>
      <div className="delete-modal" onClick={e => e.stopPropagation()}>
        <div className="delete-modal__content">
          <button className="invisible-button delete-modal__close-icon" onClick={onClose}><img
            src={closeIcon}
            alt="close"
          /></button>
          <h2 className="delete-modal__header">Delete King West warehouse?</h2>
          <p className="delete-modal__text">
            Please confirm that you'd like to delete the King West from the list
            of warehouses. You won't be able to undo this action.
          </p>
        </div>
        <div className="delete-modal-buttons">
          <button className="delete-modal-buttons__button delete-modal-buttons__cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="delete-modal-buttons__button delete-modal-buttons__delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDeleteModal;
