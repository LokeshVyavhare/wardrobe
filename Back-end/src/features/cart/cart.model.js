const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  count: {
    type: number,
    required: true,
    min: 1,
  },
});
const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
