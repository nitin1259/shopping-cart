const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const { response } = require("express");

const stripe = require("stripe")(
  "sk_test_51HTQNzCEhJSuqU5pv8gFHjr2pjjwe0Fx2m9dB7JW7nZz7qMEtxrUO4EBJw3yz4I6w4hjo3e8Dyca8Ax3Ha7Ejbkg00B9VEncIr"
);

// - App config
const app = express();

// - middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

// app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment reqest recieve BOOM!! amount: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of currency
    currency: "inr",
  });

  // OK and created something
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/shopping-mart-5b0ea/us-central1/api
