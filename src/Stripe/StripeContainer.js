import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51PI9DuP6XE3tqLdtVrSNhnhe2VgRRJO77WxOHuo298DhYPhKS8bAdNtvhLNMOUHWEfgmme2UEeaOyyy3p5YCbIJr00M9LqRFAv";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;