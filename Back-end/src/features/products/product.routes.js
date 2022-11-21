const express = require("express");
const Product = require("./product.model");
const authMiddleWare = require("../../authMiddleware/authMiddleware")
const app = express.Router();


app.get("/:id", async (req, res) => {
  const { limit = 10, page = 1 } = req.query;
  try {
    let id = req.params.id;
    let product = await Product.findById(id)
      .limit(limit)
      .skip((page - 1) * limit);
    res.send(product);
  } catch (error) {
    res.send(404).send(error.message);
  }
});


app.get("/" , async (req,res) => {
    const {limit=6 , page=1} = req.query;
    const category = req.query.category;
    const tags = req.query.tags;
    try {
        if(category){
            const product = await Product.find({category}).limit(limit).skip((page-1) * limit);
            res.send(product);
        }else if(tags){
            const product = await Product.find({tags}).limit(limit).skip((page-1) * limit);
            res.send(product);
        }else{
            const product = await Product.find().limit(limit).skip((page-1) * limit);
            res.send(product);
        }
        
       
    } catch (error) {
        res.status(404).send(error.message)
    }
});


app.post("/" ,authMiddleWare, async (req,res) => {
    if(req.userType!=="seller"){
        return res.status(401).send("you dont have authorization to add product");
    }
    try {
        let product = await Product.create({
            ...req.body
        });
        res.send(product)
    } catch (error) {
        res.status(404).send(error.message);
    }
})


module.exports = app;
