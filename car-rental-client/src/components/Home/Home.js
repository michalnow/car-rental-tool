import React, { Component } from "react";
import Slider from "react-slick";

export default class Home extends Component {
  render() {
    var settings = {
      dots: true,
      arrows: true,
      fade: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
          <img
            src={require("../../images/Mercedes-Benz_Stadium_logo.png")}
            alt=""
          />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}
