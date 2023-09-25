import React from "react";
import Logo from "../../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <img src={Logo} alt="" />
        <ul className="links">
          <li>Home</li>
          <li>About us</li>
          <li>Products</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="search"></div>
    </div>
  );
};

export default Navbar;
