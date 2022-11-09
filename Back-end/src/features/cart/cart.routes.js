const express = require("express");
const Cart = require("./cart.model");
const middleware = require("../../authMiddleware/authMiddleware")

const app = express.Router();

app.use(middleware);

app.get("/" , async (req,res) => {
    try {
     let cart = await Cart.find({user : req.user});
     res.send(cart);  
    } catch (error) {
        res.status(401).send(error.message)
    }
});

app.post("/" , async (req,res) => {
    try {
        let cart = await Cart.create({
            ...req.body,
            user : req.user
        })
        res.send(cart);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = app;