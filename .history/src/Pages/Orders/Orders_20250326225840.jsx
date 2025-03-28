import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import classes from "./Orders.module.css";
function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot.docs?.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders </h2>
          {/* ordered items */}
          <div>
   {    
   orders?.map((eachOrder)=>{
    return(
   <div>
<hr />
<p>Ordre ID:{eachOrder?.id}</p>
{
  eachOrder?.data?.basket?.map(order=>{
  <ProductCard



  })
}

   </div>
    )
   })

   }


          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
