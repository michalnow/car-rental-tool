import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import StripeCheckout from "react-stripe-checkout";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let { response } = await fetch("http://localhost:8080/payment/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) {
      this.setState({ complete: true });
      this.props.history.push("/cars");
    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <StripeCheckout
        stripeKey="pk_test_dpWQ1A2o3bDVW8vbb1QeBZyB"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png"
        locale="auto"
        name="Awesome Car Rental"
        description="The most realiable cars"
        amount={900}
        token={this.submit}
        panelLabel="Rent for {{amount}}"
      />
    );
  }
}

export default injectStripe(CheckoutForm);
