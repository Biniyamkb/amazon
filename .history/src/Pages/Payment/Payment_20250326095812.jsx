import React, { useContext, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormater/CurrencyFormat";
import { axiosInstance } from "../../APi/axios";

function Payment() {
  const [{ user, basket }] = useContext(DataContext);
  const [cardError, setCardError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const totalItem = basket.reduce((amount, item) => item.amount + amount, 0);
  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  const handleChange = (e) => {
    console.log(e);
    e.error?.message ? setCardError(e.error.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Contact backend to create a payment intent
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`, // Total in cents
      });

      const clientSecret = response.data?.clientSecret;

      if (!clientSecret) {
        throw new Error("Client secret is missing from the response.");
      }

      // Step 2: Confirm the card payment using the client secret
      const confirmation = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      console.log(confirmation);
      // Step 3: Handle confirmation response
      if (confirmation.error) {
        console.error("Payment confirmation failed:", confirmation.error);
        setCardError(confirmation.error.message); // Display error to the user
      } else {
        console.log("Payment confirmed successfully:", confirmation);
        // Handle successful payment (e.g., save order to database, clear basket)
        alert("Payment successful!"); // Notify user
        // Optionally clear the basket here
      }
    } catch (error) {
      console.error("Error making the request:", error);
      setCardError(
        "An error occurred during payment processing. Please try again."
      );
    }
  };

  return (
    <LayOut>
      <div className={classes.payment_header}>Checkout {totalItem} items</div>
      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review Items and Delivery</h3>
          <div>
            {basket.map((item, index) => (
              <ProductCard key={index} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "15px" }}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
