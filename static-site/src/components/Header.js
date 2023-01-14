import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../assets/react-logo.png";

const Header = () => {
  return (
    <header>
      <nav className="header">
        <div className="logo">
          <img src={logo} width="40px" height="auto" />
          React Facts
        </div>
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
