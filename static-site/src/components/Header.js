import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../assets/react-logo.png";

const Header = () => {
  return (
    <header>
      <nav className="header">
        <img src={logo} width="80px" />
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
