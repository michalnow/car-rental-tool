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
      fuelType: "",
      typeOfDrive: "",
      transmission: "",
      milage: "",
      rating: "",
      yearOfProduction: ""
    };
  }

  handleChangeYear = event => {
    this.setState({ yearOfProduction: event.target.value });
  };

  handleChangeRating = event => {
    this.setState({ rating: event.target.value });
  };

  handleChangeMilage = event => {
    this.setState({ milage: event.target.value });
  };

  handleChangeTrans = event => {
    this.setState({ transmission: event.target.value });
  };

  handleChangeDrive = event => {
    this.setState({ typeOfDrive: event.target.value });
  };

  handleChangeName = event => {
    this.setState({ carName: event.target.value });
  };

  handleChangeModel = event => {
    this.setState({ carModel: event.target.value });
  };

  handleChangeCarId = event => {
    this.setState({ carIdentifier: event.target.value });
  };

  handleChangeEngine = event => {
    this.setState({ engineType: event.target.value });
  };

  handleChangeFuel = event => {
    this.setState({ fuelType: event.target.value });
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
      yearOfProduction: this.state.yearOfProduction
    };

    console.log(car);

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
                    onChange={this.handleChangeName}
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
                    onChange={this.handleChangeModel}
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
                  onChange={this.handleChangeCarId}
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
                    onChange={this.handleChangeEngine}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="drive">type of drive</label>
                  <select
                    id="drive"
                    className="form-control"
                    name="typeOfDrive"
                    onChange={this.handleChangeDrive}
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
                    onChange={this.handleChangeFuel}
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
                    onChange={this.handleChangeTrans}
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
                    size="20"
                    onChange={this.handleChangeMilage}
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
                    onChange={this.handleChangeYear}
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
                    onChange={this.handleChangeRating}
                  />
                </div>
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
