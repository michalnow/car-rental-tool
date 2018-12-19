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
          {this.state.cars.map(car => (
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <h3>
                      {car.carName}&nbsp;{car.carModel}&nbsp;{car.engineType}
                    </h3>
                  </li>
                </div>
                <div className="col-sm">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <h3>
                      <span className="badge badge-warning badge-pill">
                        rating {car.rating} / 10
                      </span>
                    </h3>
                  </li>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
