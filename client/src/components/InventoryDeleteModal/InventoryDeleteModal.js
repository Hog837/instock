import React from "react";
import closeIcon from "../../assets/Icons/close-24px.svg";

function InventoryDeleteModal({ handleModal, selectedInventory, handleDelete}) {
  const url = "http://localhost:8080";
  if(!selectedInventory){
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
          <h2 className="delete-modal__header">{`Delete ${selectedInventory.name} inventory item?`}</h2>
          <p className="delete-modal__text">
            {`Please confirm that you'd like to delete ${selectedInventory.name} from the inventory list. You won't be able to undo this action.`}
          </p>
        </div>
        <div className="delete-modal-buttons">
          <button type="button" className="delete-modal-buttons__button delete-modal-buttons__cancel-button" onClick={()=>{handleModal(false)}}>
            Cancel
          </button>
          <button type="button" className="delete-modal-buttons__button delete-modal-buttons__delete-button" onClick={()=>{handleDelete(selectedInventory.id)
          handleModal(false)}}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default InventoryDeleteModal;
