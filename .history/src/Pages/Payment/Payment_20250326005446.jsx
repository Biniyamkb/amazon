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

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    console.log(e);
    e.error?.message ? setCardError(e.error?.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    //1,backend || function contact  to get client secreate

    // http://127.0.0.1:5001/clone-a333d/us-central1/api/payment/create?total=1000
    try {
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });

      // console.log(response.data);
      // const clientSecret = response.data?.clientSecret;
      // const confirmation = await stripe.confirmCardPayment(clientSecret, {
      //   payment_method: {
      //     card: elements.getElement(CardElement),
      //   },
      // });
      // console.log(confirmation);

      const clientSecret = response.data?.clientSecret; // Ensure clientSecret is defined



      if (!clientSecret) {
          throw new Error("Client secret is missing from the response.");
      }
  
      const confirmation = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
              card: elements.getElement(CardElement), // Ensure CardElement is correctly set up
          },
      });
  
      console.log(confirmation); // Log the confirmation response
  
      // Check if the confirmation was successful
      if (confirmation.error) {
          console.error("Payment confirmation failed:", confirmation.error);
      } else {
          console.log("Payment confirmed successfully:", confirmation);
          // You can add additional logic here, like updating the UI or notifying the user
      }
  

    // 2, client side (react side confirmation)

    }//3, after the confirmation  order firstore  database  save, clear basket
  

  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment_header}>Checkout {totalItem} items</div>
      {/* Payment method */}

      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div> Chicago, IL</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review Items and delivery </h3>
          <div>
            {basket?.map((item, index) => (
              <ProductCard key={index} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form  */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />

                {/* price */}
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
