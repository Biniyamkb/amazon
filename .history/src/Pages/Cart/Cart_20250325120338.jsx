import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormater/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";

import { Type } from "../../Utility/action.type";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  // console.log(basket);

  const increments = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          <div className={classes.cartProduct}>
            {basket?.length == 0 ? (
              <p>Opps ! no item in your Cart</p>
            ) : (
              basket?.map((item, i) => {
                return (
                  <section className={classes.cart_product}>
                    <ProductCard
                      key={i}
                      product={item}
                      renderDesc={true}
                      flex={true}
                      renderAdd={false}
                    />
                    <div className={classes.btn_container}>
                      <button
                        className={classes.btn}
                        onClick={() => increments(item)}
                      >
                        <IoIosArrowUp size={30} />
                      </button>
                      <span className={classes.quantity}>{item.amount}</span>
                      <button
                        className={classes.btn}
                        onClick={() => decrement(item.id)}
                      >
                        <IoIosArrowDown size={30} />
                      </button>
                    </div>
                  </section>
                );
              })
            )}
          </div>
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div className={classes.link}>
              <p>Subtotal ({basket?.length} item)</p>
              <CurrencyFormat amount={total} />
              <span>
                <input type="checkbox" />
                <small>This order contains a gift </small>
              </span>
              <Link to="/payments">Continue to chekout</Link>
            </div>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
