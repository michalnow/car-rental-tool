import React, { Component } from "react";
import { Link } from "react-router-dom";

class CarItem extends Component {
  render() {
    const { car } = this.props;
    return (
      <div className="container">
        <div className="card bg-light mb-2">
          <div className="row">
            <div className="card-body">
              <h3 className="card-title">
                {car.carName} {car.carModel}
              </h3>
              <h5 className="card-text">Engine: {car.engineType}</h5>
              <h5 className="card-text">Milage: {car.milage} km</h5>
              <h5>Price per day: {car.pricePerDay} ZŁ</h5>
              <h4>
                <span className="badge badge-warning badge-pill">
                  Our rating: {car.rating} / 10
                </span>
              </h4>

              <Link
                to={`/car/details/${car.carIdentifier}`}
                style={{ color: "black" }}
              >
                <button type="button" className="btn btn-lg btn-outline-dark ">
                  Check it
                </button>
              </Link>
              <div className="col-md-4 d-none d-lg-block">
                <ul className="list-group ">
                  <li className="list-group-item bg-light">
                    <Link
                      to={`/car/update/${car.carIdentifier}`}
                      style={{ color: "black" }}
                    >
                      <button
                        type="button"
                        className="btn btn-lg btn-outline-dark "
                      >
                        Update car
                      </button>
                    </Link>
                  </li>
                  <li className="list-group-item bg-light">
                    <Link
                      to={`/car/details/${car.carIdentifier}`}
                      style={{ color: "black" }}
                    >
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-lg"
                      >
                        Delete car
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarItem;
