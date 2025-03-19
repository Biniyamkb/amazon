import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { BsCart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
const Header = () => {
  const [{ basket }, dispatch] = useContext(DataContext);

  return (
    <>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* logo */}

            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <MdOutlineLocationOn />
              </span>
              <div>
                <p>Delivery to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <CiSearch size={25} />
            {/* icon */}
          </div>
          <div className={classes.order_container}>
            {/* right side link */}
            <Link to="" className={classes.language}>
              <img
                src="https://www.shutterstock.com/shutterstock/photos/2477519645/display_1500/stock-vector-american-flag-usa-design-united-states-flag-rendered-usa-flag-the-usa-national-flag-2477519645.jpg"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>
            {/* three components */}
            <Link to="/auth">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Order</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BsCart size={35} />
              {/* icon */}
              <span>{basket.length}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
