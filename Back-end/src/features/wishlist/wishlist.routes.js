const express = require("express");
const Wishlist = require("./wishlist.model");
const authMiddleWare = require("../../authMiddleware/authMiddleware");

const app = express.Router();
//get the wishlist of a particular by  useid
app.get("/:id", authMiddleWare, async (req, res) => {
  console.log(req.params.id);
  if (req.id !== req.params.id) {
    return res
      .status(401)
      .send({ error: true, message: "Something went wrong" });
  }
  try {
    let wishlist = await Wishlist.find({ user: req.id }).populate("product");
    res.status(200).send(wishlist);
  } catch (e) {
    res.status(401).send({ error: true, message: e });
  }
});

app.post("/", async (req, res) => {
  const { product, user } = req.body;
  console.log(req.body);
  try {
    let wishlist = await Wishlist.create({
      product,
      user,
      quantity,
      delivered,
    });
    res.status(200).send(wishlist);
  } catch (e) {
    res.status(401).send({ error: true, message: "Something went wrong" });
  }
});

//delete a particular product in wishlist with wishlist id
app.delete("/:wishlistId", authMiddleWare, async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.wishlistId);
    res
      .status(200)
      .send({ error: false, message: "cartItem deleted successfully" });
  } catch (e) {
    res.status(401).send({ error: true, message: "Something went wrong" });
  }
});

module.exports = app;
