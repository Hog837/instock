import React, {Component} from 'react';
import BackArrow from '../../assets/Icons/arrow_back-24px.svg';
import './NewWarehouse.scss';
import axios from 'axios';
import { createRef } from 'react';
import Error from '../../assets/Icons/error-24px.svg';


class NewWarehouse extends Component(){
  state={
    name:"",
    address:"",
    city:"",
    contact:{
      name:"",
      position:"",
      phone:"",
      email:""
    }
  }

  handleChange=(event)=>{
    e.preventDefault(event);

    const addNewWarehouse={
      name:e.target.
    }

    axios.post(`${API_URL}/warehouse`)
  }
  
        // axios.post(`${API_URL}/warehouse`, {
        //     name: warehouseName,
        //     address: warehouseStreetAdress,
        //     city: cityAddress,
        //     country: country,
        //     contact: {
        //       name: contactName,
        //       position: position,
        //       phone: phoneNumber,
        //       email: contactEmail
        //   }}
        //   )
        //   .then((response) => {
        //     console.log(response.data);
        //     return response;
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
  
    render(){
    return (
        
        <div className="page">
          <section className="form">
            <div className="form__titlebox">
              <img className="form__image" src={BackArrow} />
              <h1 className="form__title">Add New Warehouse</h1>
            </div>
            <div className="form__container">
              <form className="form__main" onSubmit={handleSubmit} ref={formRef}>
                <div className="form__details">
                  <div className="form__warehouse">
                    <h2 className="form__heading">Warehouse Details</h2>
                    <div className="form__items">
                      <label className="form__label">Warehouse Name</label>
                      <input
                      name="warehouseName"
                      className="form__input"
                        type="text"
                        placeholder="Warehouse Name"
                        
                        //required
                      ></input>
                      {/* {warehouseName === "" && (
                                <div className="item-form__error-box">
                                    <img className="item-form__warning" src={Error} />
                                    <div className="item-form__error"> This field is required</div>
                                </div>
                            )} */}
                    </div>
                    <div className="form__items">
                      <label className="form__label">Street Address</label>
                      <input
                       name="warehouseStreetAdress"
                      
                        className="form__input"
                        type="text"
                        placeholder="Street Address"
                        //required
                      ></input>
                    </div>
                    <div className="form__items">
                      <label className="form__label">City</label>
                      <input
                      name="cityAddress"
                        className="form__input"
                        type="text"
                        placeholder="City"
                        //required
                      ></input>
                    </div>
                    <div className="form__items">
                      <label className="form__label">Country</label>
                      <input
                      name="country"
                        className="form__input"
                        type="text"
                        placeholder="Country"
                        //required
                      ></input>
                    </div>
                  </div>
                  <p className="form__border"></p>
                  <div className="form__contact">
                    <h2 className="form__heading">Contact Details</h2>
                    <div className="form__items">
                      <label className="form__label">Contact Name</label>
                      <input
                      name="contactName"
                        className="form__input"
                        type="text"
                        placeholder="Contact Name"
                        //required
                      ></input>
                    </div>
  
                    <div className="form__items">
                      <label className="form__label">Position</label>
                      <input
                      name="position"
                        className="form__input"
                        type="text"
                        placeholder="Position"
                        //required
                      ></input>
                    </div>
  
                    <div className="form__items">
                      <label className="form__label">Phone Number</label>
                      <input
                      name="phoneNumber"
                        type="tel"
                        pattern="^\d{10}$"
                        className="form__input"
                        type="text"
                        placeholder="Phone Number"
                        //required
                      ></input>
                    </div>
  
                    <div className="form__items">
                      <label className="form__label">Email</label>
                      <input
                      name="contactEmail"
                        className="form__input"
                        type="email"
                        placeholder="Email"
                        //required
                      ></input>
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
        </div>
      );
    }
  }

export default NewWarehouse;
