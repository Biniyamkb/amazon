import React, { useContext, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { DataConnect } from "../../Components/DataProvider/DataProvider";
import { boxClasses } from "@mui/material";
function Orders() {
  const [{ user }, dispatch] = useContext(DataConnect);
  useEffect(() => {}, []);

  return (
    <LayOut>
      <section>
        <div>
          <h2>Your Orders </h2>
          {/* ordered items */}
          <div></div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
