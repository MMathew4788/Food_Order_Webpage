const cors = require("cors");
const express = require("express");
require('dotenv').config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { v4: uuid } = require("uuid");

const app = express();

//midleware
app.use(cors());
app.use(express.json());

//routed
app.get("/", (req, res) => {
  res.send("Its working");
});

app.post("/payment", (req, res) => {
  const { totalAmount, custName , token } = req.body;
  console.log("AMOUNT", totalAmount);
  console.log("CUSTOMER_NAME", custName);
  const idempontencyKey = uuid();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create({
        amount: totalAmount*100,
        currency: 'GBP',
        unit_amount: 100,
        customer: customer.id,
        receipt_email:token.email,
        customer_name: custName,
        shipping:{
          name:token.card.name,
        }
      }, { idempontencyKey });
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

//listen
app.listen(8282, () => console.log("listeneing to port 8282"));
