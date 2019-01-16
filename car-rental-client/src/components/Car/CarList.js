import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      console.log(cars);
    });
  }

  render() {
    return (
      <div className="d-flex">
        <table
          className="table table-striped table-light"
          style={{
            marginTop: "10px",
            fontSize: "24px"
          }}
        >
          <thead>
            <tr>
              <th scope="col">Car</th>
              <th scope="col">Price per day</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cars.map((car, i) => (
              <tr>
                <td>
                  {car.carName}&nbsp;{car.carModel}&nbsp;{car.engineType}
                </td>
                <td>
                  <h3>
                    <span className="badge badge-warning badge-pill">
                      rating {car.rating} / 10
                    </span>
                  </h3>
                </td>
                <td>
                  <Link
                    to={`/cars/details/${car.carIdentifier}`}
                    style={{ color: "black" }}
                  >
                    Check it out
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
