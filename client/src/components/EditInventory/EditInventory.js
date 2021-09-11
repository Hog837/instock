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
            <header>
              <Link to="/inventory">
                <img src={arrowBackIcon} alt="go back to page" />
              </Link>
              <h2>Edit Inventory Item</h2>
            </header>
            <main>
              <div>
                <h3>Item Details</h3>
                <label></label>
                <input name=""></input>
                <label></label>
                <textarea name=""></textarea>
                <label>Category</label>
                <select value="" onChange="">
                  <option value="">Electronics</option>
                  <option>Electronics NEEDS TO MAP</option>
                  <option>Electronics</option>
                </select>
              </div>

              <div>
                <h3>Item Availability</h3>
                <div>
                  <label>Status</label>
                  <div>
                    <label>
                      <input type="radio" value="" checked={true} name="" />
                      In Stock
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" value="" checked={false} name="" />
                      Out of Stock
                    </label>
                  </div>
                </div>
                <div>
                  <title>Quantity</title>
                  <input placeholder="0"/>
                </div>
                <div>
                  <label>Warehouse</label>
                  <select value="" onChange="">
                    <option value="">Electronics</option>
                    <option>Electronics NEEDS TO MAP</option>
                    <option>Electronics</option>
                  </select>
                </div> 
              </div>
            </main>
            <footer>
              <Link to="/inventory">
                <button type="reset">Cancel</button>
              </Link>
              <Link>
                <button type="submit">Save</button>
              </Link>
            </footer>
          </form>
        </div>
      </div>
    );
  }
}

export default EditInventory;
