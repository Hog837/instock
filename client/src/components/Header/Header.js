import React from "react";
import "./Header.scss";
import Logo from "../../assets/Logo/InStock-Logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
        <div className="header-container">
            <div className="header-container__logo">
            <Link to="/" className="header__logo-link">
                <img className="header__logo-image" src={Logo} alt="Instock logo" />
            </Link>
            </div>
        </div>

        <nav className="nav">
            <div className="nav-container nav-container__warehouses">
            <Link to="/" className="nav-container__link">Warehouses</Link>
            </div>
            <div className="nav-container nav-container__inventory">
            <Link to="/inventory" className="nav-container__link">Inventory</Link>
            </div>
        </nav>
    </header>
  );
}

export default Header;
