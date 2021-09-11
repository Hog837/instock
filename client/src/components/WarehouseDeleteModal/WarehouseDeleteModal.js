import React from "react";
import closeIcon from "../../assets/Icons/close-24px.svg";
import "./WarehouseDeleteModal.scss";
function WarehouseDeleteModal({ handleModal, selectedWarehouse, handleDelete}) {
  const url = "http://localhost:8080";
  if(!selectedWarehouse){
    return null
  }
  return (
    <div className="modal-background" onClick={()=> {handleModal(false)}}>
      <div className="delete-modal" onClick={e => e.stopPropagation()}>
        <div className="delete-modal__content">
          <button type="button" className="invisible-button delete-modal__close-icon" onClick={()=>{handleModal(false)}}>
            <img
            src={closeIcon}
            alt="close"
          /></button>
          <h2 className="delete-modal__header">{`Delete ${selectedWarehouse.name} warehouse?`}</h2>
          <p className="delete-modal__text">
            {`Please confirm that you'd like to delete the ${selectedWarehouse.name} from the list
            of warehouses. You won't be able to undo this action.`}
          </p>
        </div>
        <div className="delete-modal-buttons">
          <button type="button" className="delete-modal-buttons__button delete-modal-buttons__cancel-button" onClick={()=>{handleModal(false)}}>
            Cancel
          </button>
          <button type="button" className="delete-modal-buttons__button delete-modal-buttons__delete-button" onClick={()=>{handleDelete(selectedWarehouse.id)
          handleModal(false)}}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDeleteModal;
