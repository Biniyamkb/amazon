import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

function Payment() {
  const [{ user, basket }] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const stripe = useStripe();
  const elements = useElements();
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
            <div>{user.email}</div>
            <div>123 React Lane</div>
            <div> Chicago, IL</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review Items and delivery </h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form  */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div>
            <div>
              <form action="">
                <CardElement />
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
