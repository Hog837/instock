import "./EditWarehouse.scss";
import logo from '../../assets/Icons/arrow_back-24px.svg'
import { Link } from "react-router-dom";

function EditWarehouse() {
  return(
    <div className="page">
    <section className="container">
      <div className="container__header">
        <Link to="/" className="container__logo-link">
        <img className="container__arrow" src={logo} alt=""/>
        </Link>
        <h1 className="container__header-text">Edit Warehouse</h1>
      </div>
      <hr className="container__hr-top"/>
      <div className="container__body-container">
      <div className="container__warehouse">
        <h3 className="container__subheading">Warehouse Details</h3>
        <form>
          <p className="container__warehouse-text">Warehouse Name</p>
          <input className="container__warehouse-input" placeholder="King Weast" type="text" required></input>
          <p className="container__warehouse-text">Street Address</p>
          <input className="container__warehouse-input" placeholder="469 King Street West" required></input>
          <p className="container__warehouse-text">City</p>
          <input className="container__warehouse-input" placeholder="Torronto" required></input>
          <p className="container__warehouse-text">Country</p>
          <input  className="container__warehouse-input"placeholder="CAN" required></input>
        </form>
      </div>
      <hr className="container__hr-middle"/>
      <div className="container__contact">
        <h3 className="container__subheading">Contact Details</h3>
        <form>
          <p className="container__contact-text">Contact Name</p>
          <input className="container__contact-input" placeholder="Graeme Lyon" required></input>
          <p className="container__contact-text">Position</p>
          <input className="container__contact-input" placeholder="Warehouse Manager" required></input>
          <p className="container__contact-text">Phone Number</p>
          <input className="container__contact-input" placeholder="+1 (647) 504-0911" required></input>
          <p className="container__contact-text">Email</p>
          <input className="container__contact-input" placeholder="glyon@instock.com" required></input>
        </form>
      </div>
      </div>
      <div className="container__buttons">
        <form>
          <button className="container__button-cancel">Cancel</button>
          <button type="submit" className="container__button-save">Save</button>
        </form>
      </div>
    </section>
    </div>
  );
};
export default EditWarehouse;