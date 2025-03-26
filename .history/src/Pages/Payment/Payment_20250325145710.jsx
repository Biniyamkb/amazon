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

  const handlePayment = (e) => {
    e.preventDefalult();
    //1,backend || function contact  to get client secreate
   
  //    try{
  //     const response=await axiosInstance({
  //       method:"POST",
  //       url:`/payment/create?total=${total}`
  //     });
  //     console.log(response.data)

  //    }catch (error) {
  //     console.error("Error making the request:", error);
  // }
  try {
    const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total}` // Ensure 'total' is defined
    });
    console.log(response.data); // Corrected variable name

} catch (error) {
    console.error("Error making the request:", error); // Improved error logging
}

    // 2, client side (react side confirmation)

    //3, after the confirmation  order firstore  database  save, clear basket
  };
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
