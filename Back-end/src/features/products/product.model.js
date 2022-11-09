const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
name : {type:String, required : true},
image1 : {type:String, required: true},
image2 : {type:String},
description : {type:String},
price : {type:Number, required:true},
category : {type:String},
tags : {type:String}
}, {
    versionKey: false,
});

const Product = mongoose.model("product" , productSchema);

module.exports = Product;