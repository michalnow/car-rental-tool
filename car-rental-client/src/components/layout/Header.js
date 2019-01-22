import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar navbar-dark bg-dark"
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          float: "none"
        }}
      >
        <Link to="/cars" className="navbar-brand">
          Car rental
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/cars" className="nav-item nav-link">
              Cars
            </Link>
            <Link to="/cars/pricing" className="nav-item nav-link">
              Pricing
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
