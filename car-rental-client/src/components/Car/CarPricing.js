import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class CarDetails extends Component {
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
              <th scope="col">Just rent</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cars.map((car, i) => (
              <tr>
                <td>
                  {car.carName}&nbsp;{car.carModel}&nbsp;{car.engineType}
                </td>
                <td>{car.pricePerDay} zł</td>
                <td>
                  <Link
                    to={`/cars/details/${car.carIdentifier}`}
                    style={{ color: "black" }}
                  >
                    Rent here
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
