import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import profileLogo from "../../assets/img/profile-logo.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header-container">
      <Link to="/">
        <img className="company-logo" src={logo} alt="" />
      </Link>

      <img className="profile-logo" src={profileLogo} alt="" />
    </header>
  );
}

export default Header;
