import React, { Component } from "react";
import axios from "axios";
import Slider from "react-slick";

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
      window.scrollTo(0, 0);
    });
  }

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
      <div class="container">
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: "22px",
            marginTop: "5px",
            marginBottom: "5px"
          }}
        >
          <button type="button" className="btn-lg btn-outline-dark " style={{}}>
            &nbsp;&nbsp;&nbsp;Rent now ! &nbsp;&nbsp;&nbsp;
          </button>
        </div>
        <div class="row">
          <div class="col-sm" style={{ marginLeft: "10px" }}>
            <table class="table" style={{ fontSize: "18px" }}>
              <tbody>
                <tr>
                  <th scope="row">Brand</th>
                </tr>
                <tr>
                  <th scope="row">Model</th>
                </tr>
                <tr>
                  <th scope="row">Engine</th>
                </tr>
                <tr>
                  <th scope="row">Fuel</th>
                </tr>
                <tr>
                  <th scope="row">Transmission</th>
                </tr>
                <tr>
                  <th scope="row">Type of drive</th>
                </tr>
                <tr>
                  <th scope="row">Year of production</th>
                </tr>
                <tr>
                  <th scope="row">Milage</th>
                </tr>
                <tr>
                  <th scope="row">Seats</th>
                </tr>
                <tr>
                  <th scope="row">Trunk capacity</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-sm">
            <table
              class="table"
              style={{ fontSize: "18px", alignItems: "left" }}
            >
              <tbody>
                <tr>
                  <th scope="row">{this.state.car.carName}</th>
                </tr>
                <tr>
                  <th scope="row">{this.state.car.carModel}</th>
                </tr>
                <tr>
                  <th scope="row">{this.state.car.engineType}</th>
                </tr>
                <tr>
                  <th scope="row">{this.state.car.fuelType}</th>
                </tr>
                <tr>
                  <th scope="row">{this.state.car.transmission}</th>
                </tr>
                <tr>
                  <th scope="row">{this.state.car.typeOfDrive}</th>
                </tr>
                <tr>
                  <th scope="row">{this.state.car.yearOfProduction}</th>
                </tr>
                <tr>
                  <th scope="row">{this.state.car.milage} km</th>
                </tr>
                <tr>
                  <th scope="row">{this.state.car.noOfSeats}</th>
                </tr>
                <tr>
                  <th scope="row">{this.state.car.trunk} L</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: "22px"
          }}
        >
          Check this out !
        </div>
        <Slider {...settings}>
          <div>
            <img
              className="d-block w-100"
              src={require("../../images/ferrarif50.jpg")}
              alt=""
            />
          </div>
          <div>
            <img
              className="d-block w-100"
              src={require("../../images/ferrariinterior.jpg")}
              alt=""
            />
          </div>
          <div>
            <img
              className="d-block w-100"
              src={require("../../images/ferrariEngine.jpg")}
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
