import React, { Component } from "react";
import axios from "axios";

export default class CarDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {}
    };
    console.log(this.props.match.params);
  }

  componentDidMount() {
    const { carIdentifier } = this.props.match.params;
    axios.get(`http://localhost:8080/api/car/${carIdentifier}`).then(res => {
      const car = JSON.stringify(res.data);
      this.setState({ car });
      console.log(this.state.car);
      console.log(this.state.car.carName);
    });
  }

  render() {
    return (
      <div className="d-flex">
        <ul className="list-group mx-auto list-group-flush">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <h3>{this.state.car.carName}</h3>
                </li>
              </div>
              <div className="col-sm">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <h3>
                    <span className="badge badge-warning badge-pill" />
                  </h3>
                </li>
              </div>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}
