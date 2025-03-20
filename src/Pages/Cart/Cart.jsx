import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormater/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price + amount;
  }, 0);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps ! no item in your Cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  flex={true}
                  renderAdd={false}
                />
              );
            })
          )}
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
