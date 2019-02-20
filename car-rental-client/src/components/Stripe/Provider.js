import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

export default class Provider extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_dpWQ1A2o3bDVW8vbb1QeBZyB">
        <div className="example">
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}
