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
import CarOrder from "./components/Car/CarOrder";
import StripeProvider from "./components/Stripe/StripeProvider";
import { Provider } from "react-redux";
import store from "./store";
import UpdateCar from "./components/Car/UpdateCar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App ">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/cars" component={CarList} />
            <Route exact path="/car/add" component={AddCar} />
            <Route
              exact
              path="/car/update/:carIdentifier"
              component={UpdateCar}
            />
            <Route
              exact
              path={"/car/details/:carIdentifier"}
              component={CarDetails}
            />
            <Route
              exact
              path="/car/details/:carIdentifier/rent"
              component={CarOrder}
            />
            <Route exact path="/cars/pricing" component={CarPricing} />
            <Route
              exact
              path="/car/details/:carIdentifier/rent/payment/charge"
              component={StripeProvider}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
