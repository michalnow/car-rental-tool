import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CarList from "./components/Car/CarList";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/Home/Home";
import AddCar from "./components/Car/AddCar";
import CarDetails from "./components/Car/CarDetails";
import CarPricing from "./components/Car/CarPricing";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/cars" component={CarList} />
          <Route exact path="/car/add" component={AddCar} />
          <Route
            exact
            path={"/cars/details/:carIdentifier"}
            component={CarDetails}
          />
          <Route exact path="/cars/pricing" component={CarPricing} />
        </div>
      </Router>
    );
  }
}

export default App;
