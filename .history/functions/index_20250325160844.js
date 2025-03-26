// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const { messaging } = require("firebase-admin");
// dotenv.config();
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// const app = express();
// app.use(cors({ origin: true }));

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Success",
//   });
// });

// app.post("/payment/create", async (req, res) => {
//   const total = parseInt(req.query.total);

//   if (total > 0) {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: total,
//       currency: "usd",
//     });

//     console.log(paymentIntent);
//     res.status(201).json({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } else {
//     res.status(404).json(paymentIntent);
//     messaging: "total must be greater than 0";
//   }
// });

// exports.api = onRequest(app);

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { messaging } = require("firebase-admin");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);

  if (total > 0) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
      });

      console.log(paymentIntent);
      res.status(201).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      logger.error("Error creating payment intent:", error); // Log the error
      res.status(500).json({ error: "Failed to create payment intent." });
    }
  } else {
    // Return an error response if total <= 0
    res.status(400).json({
      error: "Total must be greater than 0", // Use a proper error message
    });
  }
});

exports.api = onRequest(app);
