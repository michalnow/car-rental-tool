import React, { Component } from "react";
import axios from "axios";

export default class AddCar extends Component {
  constructor() {
    super();
    this.state = {
      carName: "",
      carModel: "",
      carIdentifier: "",
      engineType: "",
      fuelType: "Petrol",
      typeOfDrive: "RWD",
      transmission: "Automatic",
      milage: "",
      rating: "",
      yearOfProduction: "",
      isRented: "no",
      noOfSeats: "",
      trunk: "",
      pricePerDay: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const car = {
      carName: this.state.carName,
      carModel: this.state.carModel,
      carIdentifier: this.state.carIdentifier,
      engineType: this.state.engineType,
      fuelType: this.state.fuelType,
      typeOfDrive: this.state.typeOfDrive,
      transmission: this.state.transmission,
      milage: this.state.milage,
      rating: this.state.rating,
      yearOfProduction: this.state.yearOfProduction,
      isRented: this.state.isRented,
      noOfSeats: this.state.noOfSeats,
      trunk: this.state.trunk,
      pricePerDay: this.state.pricePerDay
    };

    axios({
      headers: {
        "Content-Type": "application/json; charset=utf8"
      },
      method: "POST",
      url: `http://localhost:8080/api/car`,
      data: car
    })
      .then(res => {
        console.log(car);
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    this.props.history.push("/cars");
  };

  render() {
    return (
      <div className="container" style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-sm" />
          <div className="col-sm">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="brand">Car brand</label>
                  <input
                    type="text"
                    className="form-control"
                    id="brand"
                    name="carName"
                    placeholder="brand"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="model">Model</label>
                  <input
                    type="text"
                    className="form-control"
                    id="model"
                    name="carModel"
                    placeholder="model"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="carId">Car identifier</label>
                <input
                  type="text"
                  className="form-control"
                  id="carId"
                  name="carIdentifier"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label htmlFor="engine">engine</label>
                  <input
                    type="text"
                    className="form-control"
                    id="engine"
                    name="engineType"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="drive">type of drive</label>
                  <select
                    id="drive"
                    className="form-control"
                    name="typeOfDrive"
                    onChange={this.handleChange}
                  >
                    <option defaultValue>RWD</option>
                    <option>FWD</option>
                    <option>AWD</option>
                  </select>
                </div>

                <div className="form-group col-md-5">
                  <label htmlFor="fuel">fuel type</label>
                  <select
                    id="fuel"
                    className="form-control"
                    name="fuelType"
                    onChange={this.handleChange}
                  >
                    <option defaultValue>Petrol</option>
                    <option>Diesel</option>
                    <option>Gas</option>
                    <option>Electricity</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="trans">transmission</label>
                  <select
                    id="trans"
                    className="form-control"
                    name="transmission"
                    onChange={this.handleChange}
                  >
                    <option defaultValue>Automatic</option>
                    <option>Manual</option>
                    <option>Sequential</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="milage">milage</label>
                  <input
                    type="number"
                    min="0"
                    max="9999999"
                    className="form-control"
                    id="milage"
                    name="milage"
                    size="20"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="year">Number of seats</label>
                  <input
                    type="number"
                    className="form-control"
                    id="seats"
                    name="noOfSeats"
                    placeholder=""
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="rating">Trunk capacity</label>
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    className="form-control"
                    id="trunk"
                    name="trunk"
                    placeholder="Liters"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="year">Production year</label>
                  <input
                    type="text"
                    className="form-control"
                    id="year"
                    name="yearOfProduction"
                    placeholder="YYYY-MM-DD"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="rating">rating</label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    className="form-control"
                    id="rating"
                    name="rating"
                    placeholder="0-10"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="carId">Price per day</label>
                <input
                  type="number"
                  className="form-control"
                  id="pricePerDay"
                  name="pricePerDay"
                  placeholder="in ZŁ"
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                &nbsp;Add &nbsp;
              </button>
            </form>
          </div>
          <div className="col-sm" />
        </div>
      </div>
    );
  }
}
