import React, { Component } from "react";
import axios from "axios";

export default class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/car/all").then(res => {
      const cars = res.data;
      this.setState({ cars });
    });
  }

  render() {
    return (
      <div className="d-flex">
        <ul className="list-group mx-auto list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <h3>
              gfdgf &nbsp; &nbsp; &nbsp; &nbsp;
              <span class="badge badge-warning badge-pill">
                rating 8.0 / 10
              </span>
            </h3>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <h3>
              gfdgf &nbsp; &nbsp; &nbsp; &nbsp;
              <span class="badge badge-warning badge-pill">
                rating 8.0 / 10
              </span>
            </h3>
          </li>
          {this.state.cars.map(car => (
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <h3>
                {car.carName} &nbsp; {car.carModel} &nbsp; {car.engineType}
                <span class="badge badge-warning badge-pill">
                  rating {car.rating} / 10
                </span>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
