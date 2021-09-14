import React from 'react';
import BackArrow from '../../assets/Icons/arrow_back-24px.svg';
import './NewInventory.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Component } from 'react';


class NewInventory extends Component {
    state ={
        itemName: "",
        description: "",
        category: "",
        status:"",
        quantity:0,
        warehouseName:""
    }

    handleSubmit = (event) => {
        event.preventDefault(event);

        const addNewInventory = {
            itemName: event.target.itemName.value,
            description: event.target.description.value,
            category: event.target.category.value,
            status: event.target.status.value,
            quantity:event.target.quantity.value,
            warehouseName:event.target.warehouseName.value,

        }
        
        axios.post('http://localhost:8080/inventory', addNewInventory) 
             
            .then((response) => {
                this.props.history.push("/inventory")
            })
            .catch((error) => {
                console.log(error)
            });
    }
    
handleChange=(event)=>{
    let isValid=this.isFormValid()
    console.log(isValid)
    this.setState({
        [event.target.name]: event.target.value,
      });
}

isFormValid = () => {
    if (
      this.state.itemName ==="" && this.state.description ===""
    ) {
      return false;
    }
    return true
  };


render(){
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
                        <form onSubmit={this.handleSubmit} className="inventory__main">
                            <div className="inventory__details">
                                <div className="inventory__inventory">
                                    <h2 className="inventory__heading">Item Details</h2>
                                    <div className="inventory__items">
                                        <label className="inventory__label">Item Name</label>
                                        <input onChange={this.handleChange} className="inventory__input" name="itemName" type="text" placeholder="Item Name" required></input>
                                    </div>
                                    <div className="inventory__items">
                                        <label className="inventory__label">Description</label>
                                        <textarea onChange={this.handleChange} className="inventory__input-description" name="description" type="text" placeholder="Please enter a brief description..." required></textarea>
                                    </div>
                                    <div>
                                        <p className="inventory__label">Category</p>
                                        <select name="category" className="inventory__category">
                                           <option className="inventory__category-placeholder" value="default">Please Select</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Gear">Gear</option>
                                            <option value="Apparel">Apparel</option>
                                            <option value="Accessories">Accessories</option>
                                            <option value="Health">Health</option>
                                            <option value="Apparel">Apparel</option>
                                        </select>
                                    </div>
                                </div>
                                <p className="inventory__border"></p>
                                <div className="inventory__availability">
                                    <h2 className="inventory__heading">Item Availability</h2>
                                    <div>
                                        <input onChange={this.handleChange} className="inventory__radio" type="radio" name="status" value="In Stock"></input>
                                        <label className="inventory__label-stock" htmlFor="instock">In stock</label>
                                        <input onChange={this.handleChange}className="inventory__radio" type="radio" name="status" value="Out of stock"></input>
                                        <label className="inventory__label-stock" htmlFor="outofstock">Out of stock</label>
                                    </div>
                                    {this.state.status==="In Stock" &&(
                                        <div className="inventory__items">
                                            <label className="inventory__label">Quantity</label>
                                            <input name="quantity" className="inventory__input-qty" type="text" placeholder="0" required></input>
                                        </div>
                                    )}
    
                                    <div className="inventory__items">
                                        <p className="inventory__label">Warehouse</p>
                                        <select onChange={this.handleChange} name="warehouseName" placeholder="Please Select" className="inventory__category">
                                            <option value="default">Please Select</option>
                                            <option value="Manhattan">Manhattan</option>
                                            <option value="King West">King West</option>
                                            <option value="Granville">Granville</option>
                                            <option value="Santa Monica">Santa Monica</option>
                                            <option value="Seattle">Seattle</option>
                                            <option value="Montreal">Montreal</option>
                                            <option value="San Fran">San Fran</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="inventory__buttons">
                                <button type="submit" className="inventory__add">+ Add Item</button>
                                <button type="reset" value="reset"className="inventory__cancel">Cancel</button>
                            </div>
                        </form>
                    </div>
                </section>

            </div>

        )
    }
}

    export default NewInventory
