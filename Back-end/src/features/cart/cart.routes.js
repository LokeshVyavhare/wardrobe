const express = require("express");
const Cart = require("./cart.model");
const authMiddleWare = require("../../authMiddleware/authMiddleware");

const app = express.Router();

app.get("/:id", authMiddleWare, async (req, res) => {
  console.log(req.params.id);
  if (req.id !== req.params.id) {
    return res
      .status(401)
      .send({ error: true, message: "Something went wrong" });
  }
  try {
    let cart = await Cart.find({ user: req.id }).populate("product");
    res.status(200).send(cart);
  } catch (e) {
    res.status(401).send({ error: true, message: e });
  }
});

app.post("/", (req, res) => {
  const { product, user, quantity, delivered } = req.body;
  console.log(req.body);
  try {
    let cart = Cart.create({ product, user, quantity, delivered });
    res.status(200).send(cart);
  } catch (e) {
    res.status(401).send({ error: true, message: "Something went wrong" });
  }
});

app.patch("/:cartId", async (req, res) => {
  try {
    let cart = await Cart.findByIdAndUpdate(
      req.params.cartId,
      {
        ...req.body,
      },
      { new: true }
    );
    res
      .status(200)
      .send({ error: false, message: "Cart updated successfully", cart });
  } catch (e) {
    res.status(401).send({ error: true, message: e });
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
