import React, { Component } from "react";

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
        <a className="navbar-brand" href="#">
          Car rental
        </a>

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
            <a className="nav-item nav-link" href="#">
              Home
            </a>
            <a className="nav-item nav-link" href="#">
              Cars
            </a>
            <a className="nav-item nav-link" href="#">
              Pricing
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
