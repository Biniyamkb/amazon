import React, { useContext, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { DataConnect } from "../../Components/DataProvider/DataProvider";

function Orders() {
  const [{ user }, dispatch] = useContext(DataConnect);
  useEffect(()=>)

  return <LayOut></LayOut>;
}

export default Orders;
