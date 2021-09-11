import React, {Component} from 'react';
import BackArrow from '../../assets/Icons/arrow_back-24px.svg';
import './NewWarehouse.scss';


export default class NewWarehouse extends Component {
    
    render() {
        return (
            <div className="page">
                <section className="form">
                <div className="form__titlebox">
                    <img className="form__image"
                        src={BackArrow} alt="button to go back"/>
                    <h1 className="form__title">Add New Warehouse</h1>
                </div>
                <div className="form__container">
                    
                        <form className="form__main" >
                            <div className="form__details">
                                <div className="form__warehouse">
                                    <h2 className="form__heading">Warehouse Details</h2>
                                    <div className="form__items">
                                        <label className="form__label">Warehouse Name</label>
                                        <input className="form__input" type="text" placeholder="Warehouse Name" required></input>
                                    </div>
                                    <div className="form__items">
                                        <label className="form__label">Street Address</label>
                                        <input className="form__input" type="text" placeholder="Street Address" required></input>
                                    </div>
                                    <div className="form__items">
                                        <label className="form__label">City</label>
                                        <input className="form__input" type="text" placeholder="City" required></input>
                                    </div>
                                    <div className="form__items">
                                        <label className="form__label">Country</label>
                                        <input className="form__input" type="text" placeholder="Country" required></input>
                                    </div>
                                </div>
                                <p className="form__border"></p>
                                <div className="form__contact">
                                    <h2 className="form__heading">Contact Details</h2>
                                    <div className="form__items">
                                        <label className="form__label">Contact Name</label>
                                        <input className="form__input" type="text" placeholder="Contact Name" required></input>
                                    </div>

                                    <div className="form__items">
                                        <label className="form__label">Position</label>
                                        <input className="form__input" type="text" placeholder="Position" required></input>
                                    </div>

                                    <div className="form__items">
                                        <label className="form__label">Phone Number</label>
                                        <input type="tel" pattern="^\d{10}$" className="form__input" type="text" placeholder="Phone Number" required></input>
                                    </div>

                                    <div className="form__items">
                                        <label className="form__label">Email</label>
                                        <input className="form__input" type="email" placeholder="Email" required></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form__buttons">
                                <button className="form__add">+ Add Warehouse</button>
                                <button className="form__cancel">Cancel</button>
                            </div>
                        </form>
                </div>
            </section>
            </div>
        )
    }
}
