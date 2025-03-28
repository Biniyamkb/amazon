import React, { useContext, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import classes from "./Orders.module.css";
function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
  if(user)


  }, []);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders </h2>
          {/* ordered items */}
          <div></div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
