import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src="LOGO.png" alt="Logo" height="35px" />
        <ul>
          <li>
            <a  href="#home">
              Courses <i className="fas fa-angle-down"></i>
            </a>
          </li>
          <li>
            <a href="#home">Programs <i className="fas fa-angle-down"></i></a>
          </li>
          <li className="right-search-logo">
            <i className="fas fa-magnifying-glass"></i>
          </li>
          <li>
            <a href="#home">Log in</a>
          </li>
          <li>
            <button className="button-right"> Join Now</button>
          </li>
        </ul>
      </div>
    </>
  );
}
