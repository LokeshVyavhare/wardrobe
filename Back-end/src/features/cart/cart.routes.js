const express = require("express");
const Cart = require("./cart.model");
const authMiddleWare = require("../../authMiddleware/authMiddleware");

const app = express.Router();

app.get("/:id", authMiddleWare, (req, res) => {
  if (req.id !== req.params.id) {
    return res
      .status(401)
      .send({ error: true, message: "Something went wrong" });
  }
  try {
    let cart = Cart.findById({ user: req.id }).populate("product");
    res.status(200).send(cart);
  } catch (e) {
    res.status(401).send({ error: true, message: "Something went wrong" });
  }
});

app.post("/", authMiddleWare, (req, res) => {
  try {
    let cart = Cart.create(
      { user: req.id, product: req.body.product, quantity: 1 },
      { new: true }
    );
    res.status(200).send(cart);
  } catch (e) {
    res.status(401).send({ error: true, message: "Something went wrong" });
  }
});

app.patch("/:cartId", authMiddleWare, (req, res) => {
  try {
    let cart = Cart.findByIdAndUpdate(req.params.id, { count: req.body });
    res
      .status(200)
      .send({ error: false, message: "Cart updated successfully",cart });
  } catch (e) {
    res.status(401).send({ error: true, message: "Something went wrong." });
  }
});

app.delete("/:cartId", authMiddleWare, (req, res) => {
  try {
    Cart.findByIdAndDelete(req.params.cartId);
    res
      .status(200)
      .send({ error: false, message: "cartItem deleted successfully" });
  } catch (e) {
    res.status(401).send({ error: true, message: "Something went wrong" });
  }
});

module.exports = app;
