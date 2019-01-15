import React, { Component } from "react";
import axios from "axios";

export default class CarDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {
        carName: "fds"
      }
    };
    console.log(this.props.match.params);
  }

  componentDidMount() {
    const { carIdentifier } = this.props.match.params;
    axios.get(`http://localhost:8080/api/car/${carIdentifier}`).then(res => {
      const car = res.data;
      this.setState({ car });
      console.log(this.state.car);
      console.log(this.state.car.carName);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">
            <table class="table" style={{ fontSize: "24px" }}>
              <thead>
                <tr>
                  <td colSpan="2">This is your selected car </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Brand</th>
                  <td>{this.state.car.carName}</td>
                </tr>
                <tr>
                  <th scope="row">Model</th>
                  <td>{this.state.car.carModel}</td>
                </tr>
                <tr>
                  <th scope="row">Engine</th>
                  <td>{this.state.car.engineType}</td>
                </tr>
                <tr>
                  <th scope="row">Fuel</th>
                  <td>{this.state.car.fuelType}</td>
                </tr>
                <tr>
                  <th scope="row">Transmission</th>
                  <td>{this.state.car.transmission}</td>
                </tr>
                <tr>
                  <th scope="row">Type of drive</th>
                  <td>{this.state.car.typeOfDrive}</td>
                </tr>
                <tr>
                  <th scope="row">Year of production</th>
                  <td>{this.state.car.yearOfProduction}</td>
                </tr>
                <tr>
                  <th scope="row">Milage</th>
                  <td>{this.state.car.milage} km</td>
                </tr>
                <tr>
                  <th scope="row">Rented</th>
                  <td>{this.state.car.isRented} </td>
                </tr>
                <tr>
                  <th scope="row">Seats</th>
                  <td>{this.state.car.noOfSeats}</td>
                </tr>
                <tr>
                  <th scope="row">Trunk capacity</th>
                  <td>{this.state.car.trunk} L</td>
                </tr>
              </tbody>
            </table>
            <button type="button" class="btn-lg btn-outline-dark " style={{}}>
              &nbsp;&nbsp;&nbsp;Rent &nbsp;&nbsp;&nbsp;
            </button>
          </div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
    );
  }
}
