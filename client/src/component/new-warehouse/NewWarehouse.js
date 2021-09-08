import React, {Component} from 'react';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';


export default class NewWarehouse extends Component {
    render() {
        return (
        <section className="form">
            <div className="form__titlebox">
                <img className="form__image" src={BackArrow}/>
                <h1 className="form__title">Add New Warehouse</h1>
            </div>
            <div className="form__container">
                <div className="form__warehouse">
                    <h2 className="form__heading">Warehouse Details</h2>
                    <form className="form__main">
                        <div className="form__items">
                            <label className="form__label">Warehouse Name</label>
                            <input className="form__input" type="text" placeholder="Warehouse Name"></input>
                        </div>

                        <div className="form__items">
                            <label className="form__label">Street Address</label>
                            <input className="form__input" type="text" placeholder="Street Address"></input>
                        </div>
                        <div className="form__items">
                            <label className="form__label">City</label>
                            <input className="form__input" type="text" placeholder="City"></input>
                        </div>

                        <div className="form__items">
                            <label className="form__label">Country</label>
                            <input className="form__input" type="text" placeholder="Country"></input>
                        </div>

                    </form>
                </div>
                <div className="form__container">
                    <h2 className="form__heading">Contact Details</h2>
                    <form>
                        <div className="form__items">
                            <label className="form__label">Contact Name</label>
                            <input className="form__input" type="text" placeholder="Contact Name"></input>
                        </div>

                        <div className="form__items">
                            <label className="form__label">Position</label>
                            <input className="form__input" type="text" placeholder="Position"></input>
                        </div>

                        <div className="form__items">
                            <label className="form__label">Phone Number</label>
                            <input className="form__input" type="text" placeholder="">Phone Number</input>
                        </div>

                        <div className="form__items">
                            <label className="form__label">Email</label>
                            <input className="form__input" type="email" placeholder="Email"></input>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <button></button>
                <button>Cancel</button>
            </div>
        </section>
        )
    }
}
