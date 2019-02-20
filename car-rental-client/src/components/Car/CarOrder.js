import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Provider from "../Stripe/Provider";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        marginRight: "50px"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        marginLeft: "50px",
        zIndex: "1",
        fontSize: "20px"
      }}
      onClick={onClick}
    />
  );
}

export default class CarOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {
        carName: "f"
      },
      value: "0"
    };
  }

  componentDidMount() {
    const { carIdentifier } = this.props.match.params;
    axios.get(`http://localhost:8080/api/car/${carIdentifier}`).then(res => {
      const car = res.data;
      this.setState({ car });
      console.log(this.state.car);
      console.log(this.state.car.carName);
      window.scrollTo(0, 0);
    });
    const img = "../../images";
  }

  handleSubmit = event => {
    event.preventDefault();

    const car = {
      id: this.state.car.id,
      carName: this.state.carName,
      carModel: this.state.carModel,
      carIdentifier: this.state.carIdentifier
    };
    axios({
      headers: {
        "Content-Type": "application/json; charset=utf8"
      },
      method: "POST",
      url: `http://localhost:8080/api/car/${this.state.car.id}/${
        this.state.value
      }`,
      data: car
    })
      .then(res => {})
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const settings = {
      dots: false,
      pauseOnHover: false,
      arrows: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <div
          className="container"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <form onSubmit={this.handleSubmit}>
            <div className="row justify-content-md-center">
              <div className="col-sm"> </div>
              <div className="col-md-auto">
                <table
                  className="table"
                  style={{ fontSize: "25px", fontWeight: "bold" }}
                >
                  <tbody>
                    <tr>
                      <th scope="row">
                        {this.state.car.carName}&nbsp;{this.state.car.carModel}
                        &nbsp; {this.state.car.engineType}
                      </th>
                    </tr>

                    <tr>
                      <th scope="row">
                        {this.state.car.typeOfDrive} drive type with{" "}
                        {this.state.car.transmission} gear box
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">
                        Manufactured in {this.state.car.yearOfProduction}
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">
                        {this.state.car.milage} km driven with this car
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">
                        {this.state.car.noOfSeats} seats with{" "}
                        {this.state.car.trunk} L trunk
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">
                        {`${this.state.car.pricePerDay}` *
                          `${this.state.value}`}{" "}
                        ZŁ you have to pay
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">
                        Days of rent:{" "}
                        <input
                          type="number"
                          value={this.state.value}
                          onChange={this.handleChange}
                          min="1"
                        />
                      </th>
                    </tr>
                  </tbody>
                </table>
                <Provider />
              </div>
              <div className="col-sm"> </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
