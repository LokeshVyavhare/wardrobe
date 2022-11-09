const express = require("express");
const Cart = require("./cart.model");
const authMiddleWare = require("../../authMiddleware/authMiddleware");

const app = express.Router();

app.get("/:id", async (req, res) => {
  console.log(req.params.id);
  // if (req.id !== req.params.id) {
  //   return res
  //     .status(401)
  //     .send({ error: true, message: "Something went wrong" });
  // }
  try {
    let cart = await Cart.findById("636bca4327430bb6dfb7c61e").populate(
      "product"
    );
    res.status(200).send(cart);
  } catch (e) {
    res.status(401).send({ error: true, message: e });
  }
});

app.post("/", authMiddleWare, (req, res) => {
  const { product, user, quantity, delivered } = req.body;
  console.log(req.body);
  try {
    let cart = Cart.create({ product, user, quantity, delivered });
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
