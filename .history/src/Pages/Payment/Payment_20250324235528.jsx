import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";

function Payment() {
  const [{ basket }] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment_header}>Checkout (2) items</div>
      {/* Payment method */}

      <section>
        {/* address */}
        <div></div>
        <hr />
        {/* product */}
        <div></div>
        <hr />
        {/* card form  */}
        <div></div>
      </section>
    </LayOut>
  );
}

export default Payment;
