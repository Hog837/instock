import React, {Component} from 'react';
import BackArrow from '../../assets/Icons/arrow_back-24px.svg';
import './NewInventory.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { createRef } from 'react';

const API_URL = "http://localhost:8080";
const formRef = createRef();

function NewInventory() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;
    const warehouseName = formRef.current.warehouseName.value;
    const itemName = formRef.current.itemName.value;
    const description = formRef.current.description.value;
    const category = formRef.current.country.value;
    const status = formRef.current.status.value;
    const quantity = formRef.current.quantity.value;
    if (itemName === '') {
        return alert('Please enter a product name');
    }
    if (quantity === '') {
        return alert('Please enter a quantity');
    }
    if (description === '') {
        return alert('Please enter description');
    }
    if (category === '') {
        return alert('Please enter a category');
    }

      axios.post(`${API_URL}/inventory`, {
          warehouseName: warehouseName,
          itemName: itemName,
          description: description,
          category: category,
          status: status,
          quantity: quantity,
        }
        )
        .then((response) => {
          console.log(response.data);
          return response;
        })
        .catch((err) => {
          console.log(err);
        });
  };

        return (
            <div className="page">
                <section className="inventory">
                    <div className="inventory__titlebox">
                        <Link to="/inventory">
                           <img className="inventory__image"
                            src={BackArrow}
                            alt=""/>
                        </Link>
                        <h1 className="inventory__title">Add New Inventory Item</h1>
                    </div>
                    <div className="inventory__container">
                        <form rel={formRef} onSubmit={handleSubmit} className="inventory__main">
                            <div className="inventory__details">
                                <div className="inventory__inventory">
                                    <h2 className="inventory__heading">Item Details</h2>
                                    <div className="inventory__items">
                                        <label className="inventory__label">Item Name</label>
                                        <input className="inventory__input" name="itemName" type="text" placeholder="Item Name" required></input>
                                    </div>
                                    <div className="inventory__items">
                                        <label className="inventory__label">Description</label>
                                        <textarea className="inventory__input-description" name="description" type="text" placeholder="Please enter a brief description..." required></textarea>
                                    </div>
                                    <div>
                                        <p className="inventory__label">Category</p>
                                        <select name="warehouseName" className="inventory__category">
                                            <option value="first">Electronics</option>
                                            <option value="second">Gear</option>
                                            <option value="third">Apparel</option>
                                            <option value="third">Accessories</option>
                                            <option value="third">Health</option>
                                            <option value="third">Apparel</option>
                                        </select>
                                    </div>
                                </div>
                                <p className="inventory__border"></p>
                                <div className="inventory__availability">
                                    <h2 className="inventory__heading">Item Availability</h2>
                                    <div>
                                        <input className="inventory__radio" type="radio" name="instock" value=""></input>
                                        <label className="inventory__label-light" htmlFor="instock">In stock</label>
                                        <input className="inventory__radio" type="radio" name="outstock" value="" disabled></input>
                                        <label className="inventory__label-disabled" htmlFor="outofstock">Out of stock</label>
                                    </div>
                                    <div className="inventory__items">
                                        <label className="inventory__label">Quantity</label>
                                        <input name="" className="inventory__input" type="text" placeholder="Contact Name" required></input>
                                    </div>
                                    <div className="inventory__items">
                                        <p className="inventory__label">Warehouse</p>
                                        <select name="warehouseName" className="inventory__category">
                                            <option value="first">Please select</option>
                                            <option value="first">Manhattan</option>
                                            <option value="second">King West</option>
                                            <option value="third">Granville</option>
                                            <option value="third">Santa Monica</option>
                                            <option value="third">Seattle</option>
                                            <option value="third">Montreal</option>
                                            <option value="third">San Fran</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="inventory__buttons">
                                <button className="inventory__add">+ Add Item</button>
                                <button className="inventory__cancel">Cancel</button>
                            </div>
                        </form>
                    </div>
                </section>

            </div>

        )
    }

    export default NewInventory
