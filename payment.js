const express = require("express");
const router = express.Router();
const razorpay = require("../razorpay");

router.post("/create-order", async (req, res) => {
  const options = {
    amount: 50000, // ₹500
    currency: "INR",
    receipt: "receipt#1",
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json({ id: response.id, currency: response.currency, amount: response.amount });
  } catch (err) {
    res.status(500).send("Error creating order");
  }
});

module.exports = router;
