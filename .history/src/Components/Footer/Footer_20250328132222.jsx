import React from "react";
import classes from "./footer.module.css"; // Make sure to create a corresponding CSS file

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_container}>
        <div className={classes.footer_links}>
          <h4>Get to Know Us</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
          </ul>
        </div>
        <div className={classes.footer_links}>
          <h4>Customer Service</h4>
          <ul>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={classes.footer_links}>
          <h4>Connect with Us</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.footer_bottoms}>
        <p>&copy; {new Date().getFullYear()} Amazon. All Rights Reserved.</p>
      </div>
      <small>
        Developerd by Biniyam kenbere <a href=""></a>
      </small>
      <div className={classes.footer_links}>
          <div>
            <h5>Developed by </h5>
            <p>Biniyam kebere </p>
          </div>
          <div>
            <a href="https://biniyamkebere.netlify.app/" target="_blank">
              {" "}
              clik
            </a>
            <p></p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
