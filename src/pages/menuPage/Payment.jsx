import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../hooks/useCart";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51QWjfJ1wZ7pNbGLXKNmhBg11hHVac2AI3yQt5TxFISzvg7R4Y3hGBb3rWGmCfYCB2ElfkZxMxvfGOFLRygSoCYVz00LmE2HGpd"
);

const Payment = () => {
  const [cart] = useCart();

  console.log(cart);
  //   calculate final price
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
  const totalPrice = parseFloat(cartTotal.toFixed(2));

  //   console.log(totalPrice);
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-28">
      <Elements stripe={stripePromise}>
        <CheckoutForm price={totalPrice} cart={cart} />
      </Elements>
    </div>
  );
};

export default Payment;
