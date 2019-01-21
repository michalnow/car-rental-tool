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

export default class CarOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {
        carName: "f"
      }
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
          class="container"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <div class="row justify-content-md-center">
            <div class="col-sm"> </div>
            <div class="col-md-auto">
              <table
                class="table"
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
                </tbody>
              </table>
              <button
                type="button"
                className="btn-lg btn-outline-dark "
                style={{}}
              >
                &nbsp;&nbsp;&nbsp;Pay now ! &nbsp;&nbsp;&nbsp;
              </button>
            </div>
            <div class="col-sm"> </div>
          </div>
        </div>
      </div>
    );
  }
}
