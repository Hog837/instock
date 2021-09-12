import React, {Component} from 'react';
import BackArrow from '../../assets/Icons/arrow_back-24px.svg';
import './NewWarehouse.scss';
import axios from 'axios';
import Error from '../../assets/Icons/error-24px.svg';


class NewWarehouse extends Component {
    state ={
        name: "",
        address: "",
        city: "",
        country:"",
        contact: {
            contactName: "",
            position: "",
            phone: "",
            email: ""
        }

    }

    handleSubmit = (event) => {
        event.preventDefault(event);

        const addNewWarehouse = {
            name: event.target.name.value,
            address: event.target.address.value,
            city: event.target.city.value,
            country: event.target.country.value,
            contact: {
                name: event.target.contactName.value,
                position: event.target.position.value,
                phone: event.target.phone.value,
                email: event.target.email.value
            }

        }
        
        axios.post('http://localhost:8080/warehouse', addNewWarehouse) 
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });
  
    }

    
handleChange=(event)=>{
    this.setState({
        [event.target.name]: event.target.value,
      });
}



render() {
    return (<div className="page">
        <section className="form">
            <div className="form__titlebox">
                <img className="form__image"
                   alt="go back" src={BackArrow}/>
                <h1 className="form__title">Add New Warehouse</h1>
            </div>
            <div className="form__container">
                <form className="form__main" onSubmit={this.handleSubmit}>
                    <div className="form__details">
                        <div className="form__warehouse">
                            <h2 className="form__heading">Warehouse Details</h2>
                            <div className="form__items">
                                <label className="form__label">Warehouse Name</label>
                                <input name="name" onChange={this.handleChange} value={this.state.name} className="form__input" type="text" placeholder="Warehouse Name" ></input>
                                {this.state.name === "" && (
                                    <div className="form__errorbox">
                                         <img className="form__error" alt="error message to fill in the details" src={Error} />
                                         <div className="form__error-message"> This field is required</div>
                                    </div>
                                    )
                                } 
                                </div>
                            <div className="form__items">
                                <label className="form__label">Street Address</label>
                                <input name="address" onChange={this.handleChange} value={this.state.address} className="form__input" type="text" placeholder="Street Address"
                                    //required
                                ></input>
                                {this.state.address === "" && (
                                    <div className="form__errorbox">
                                         <img className="form__error" alt="error message to fill in the details" src={Error} />
                                         <div className="form__error-message"> This field is required</div>
                                    </div>)
                                } 
                            </div>
                            <div className="form__items">
                                <label className="form__label">City</label>
                                <input name="city" onChange={this.handleChange} value={this.state.city} className="form__input" type="text" placeholder="City"
                                    //required
                                ></input>
                                 {this.state.city === "" && (
                                    <div className="form__errorbox">
                                         <img className="form__error" alt="error message to fill in the details" src={Error} />
                                         <div className="form__error-message"> This field is required</div>
                                    </div>)
                                } 
                            </div>
                            <div className="form__items">
                                <label className="form__label">Country</label>
                                <input name="country" onChange={this.handleChange} value={this.state.country} className="form__input" type="text" placeholder="Country"
                                    //required
                                ></input>
                                 {this.state.country === "" && (
                                    <div className="form__errorbox">
                                         <img className="form__error" alt="error message to fill in the details" src={Error} />
                                         <div className="form__error-message"> This field is required</div>
                                    </div>)
                                } 
                            </div>
                        </div>
                        <p className="form__border"></p>
                        <div className="form__contact">
                            <h2 className="form__heading">Contact Details</h2>
                            <div className="form__items">
                                <label className="form__label">Contact Name</label>
                                <input name="contactName" onChange={this.handleChange} value={this.state.contact.contactName} className="form__input" type="text" placeholder="Contact Name"
                        
                                ></input>
                                 {this.state.contact.contactName === "" &&( 
                                    <div className="form__errorbox">
                                         <img className="form__error" alt="error message" src={Error} />
                                         <div className="form__error-message"> This field is required</div>
                                    </div>)
                                } 
                            </div>

                            <div className="form__items">
                                <label className="form__label">Position</label>
                                <input name="position" onChange={this.handleChange} value={this.state.contact.position} className="form__input" type="text" placeholder="Position"
                
                                ></input>
                                 {this.state.contact.position === "" && (
                                    <div className="form__errorbox">
                                         <img className="form__error" alt="error message" src={Error} />
                                         <div className="form__error-message"> This field is required</div>
                                    </div>)
                                } 
                            </div>

                            <div className="form__items">
                                <label className="form__label">Phone Number</label>
                                <input name="phone" onChange={this.handleChange} value={this.state.contact.phone} type="tel" pattern="^\d{10}$" className="form__input" type="text" placeholder="Phone Number"
                                
                                ></input>
                                 {this.state.contact.phone === "" && 
                                    <div className="form__errorbox">
                                         <img className="form__error" alt="error message"src={Error} />
                                         <div className="form__error-message"> This field is required</div>
                                    </div>
                                } 
                            </div>

                            <div className="form__items">
                                <label className="form__label">Email</label>
                                <input name="email" onChange={this.handleChange} value={this.state.contact.email} className="form__input" type="email" placeholder="Email"
                                ></input>
                                {this.state.contact.email === "" && 
                                    <div className="form__errorbox">
                                         <img className="form__error" alt="error message" src={Error} />
                                         <div className="form__error-message"> This field is required</div>
                                    </div>
                                } 
                            </div>
                        </div>
                    </div>
                    <div className="form__buttons">
                        <button type="submit" className="form__add">+ Add Warehouse</button>
                        <button type="reset" className="form__cancel">Cancel</button>
                    </div>
                </form>
            </div>
        </section>
    </div>);
}}


export default NewWarehouse;
