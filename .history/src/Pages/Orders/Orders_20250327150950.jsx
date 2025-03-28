// import React, { useContext, useEffect, useState } from "react";
// import LayOut from "../../Components/LayOut/LayOut";
// import { db } from "../../Utility/firebase";
// import { DataContext } from "../../Components/DataProvider/DataProvider";
// import classes from "./Orders.module.css";
// import ProductCard from "../../Components/Product/ProductCard";

// function Orders() {
//   const [{ user }, dispatch] = useContext(DataContext);
//   const [orders, setOrders] = useState([]);
//   useEffect(() => {
//     if (user) {
//       db.collection("users")
//         .doc(user.uid)
//         .collection("orders")
//         .orderBy("created", "desc")
//         .onSnapshot((snapshot) => {
//           console.log(snapshot);
//           setOrders(
//             snapshot.docs?.map((doc) => ({
//               id: doc.id,
//               data: doc.data(),
//             }))
//           );
//         });
//     } else {
//       setOrders([]);
//     }
//   }, []);

//   return (
//     <LayOut>
//       <section className={classes.container}>
//         <div className={classes.orders_container}>
//           <h2>Your Orders are hear </h2>
//           {/* ordered items */}
//           <div>
//             {orders?.map((eachOrder, i) => {
//               console.log(eachOrder);
//               return (
//                 <div key={i}>
//                   <hr />
//                   <p>Ordre ID:{eachOrder?.id}</p>
//                   {eachOrder?.data?.basket?.map((order) => {
//                     return (
//                       <ProductCard flex={true} product={order} key={order.id} />
//                     );
//                   })}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Orders;

// // import React, { useContext, useEffect, useState } from "react";
// // import LayOut from "../../Components/LayOut/LayOut";
// // import { db } from "../../Utility/firebase";
// // import { DataContext } from "../../Components/DataProvider/DataProvider";
// // import classes from "./Orders.module.css";
// // import ProductCard from "../../Components/Product/ProductCard";

// // function Orders() {
// //   const [{ user }] = useContext(DataContext);
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     if (user) {
// //       const unsubscribe = db
// //         .collection("users")
// //         .doc(user.uid)
// //         .collection("orders")
// //         .orderBy("created", "desc")
// //         .onSnapshot(
// //           (snapshot) => {
// //             setOrders(
// //               snapshot.docs.map((doc) => ({
// //                 id: doc.id,
// //                 data: doc.data(),
// //               }))
// //             );
// //             setLoading(false);
// //           },
// //           (error) => {
// //             console.error("Error fetching orders: ", error);
// //             setError(error);
// //             setLoading(false);
// //           }
// //         );

// //       // Cleanup subscription on unmount
// //       return () => unsubscribe();
// //     } else {
// //       setOrders([]);
// //       setLoading(false);
// //     }
// //   }, [user]);

// //   if (loading) {
// //     return <div>Loading...</div>; // Or a spinner component
// //   }

// //   if (error) {
// //     return <div>Error loading orders: {error.message}</div>;
// //   }

// //   return (
// //     <LayOut>
// //       <section className={classes.container}>
// //         <div className={classes.orders_container}>
// //           <h2>Your Orders are here</h2>
// //           {/* Ordered items */}
// //           <div>
// //             {orders.length > 0 ? (
// //               orders.map((eachOrder) => (
// //                 <div key={eachOrder.id}>
// //                   <hr />
// //                   <p>Order ID: {eachOrder.id}</p>
// //                   {eachOrder.data.basket.map((order) => (
// //                     <ProductCard flex={true} product={order} key={order.id} />
// //                   ))}
// //                 </div>
// //               ))
// //             ) : (
// //               <p>No orders found.</p>
// //             )}
// //           </div>
// //         </div>
// //       </section>
// //     </LayOut>
// //   );
// // }

// // export default Orders;
import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import React from "react";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);


  return (
    <LayOut>

    </LayOut>

  </div>);
}

export default Orders;
