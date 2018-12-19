import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar navbar-dark bg-dark"
        style={{
          alignItems: "center",
          display: "flex"
        }}
      >
        <Link to="/cars" className="navbar-brand">
          Car rental
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/cars" className="nav-item nav-link" href="#">
              Cars
            </Link>
            <a className="nav-item nav-link" href="#">
              Pricing
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
