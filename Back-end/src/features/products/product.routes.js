const express = require("express");
const Product = require("./product.model");

const app = express.Router();


// app.get("/", async (req, res) => {
//   const { limit = 5, page = 1 } = req.query;
//   try {
//     const product = await Product.find()
//       .limit(limit)
//       .skip((page - 1) * limit);
//     res.send(product);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

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

// app.get("/category", async (req, res) => {
//   try {
//     let { category } = req.params;
//     let product = await Product.find(category);
//     res.send(product);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

// app.get("/tags", async (req, res) => {
//   try {
//     let { tags } = req.query;
//     let product = await Product.find(tags);
//     res.send(product);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

app.get("/" , async (req,res) => {
    const {limit=5 , page=1} = req.query;
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

// app.get("/:id" , async (req,res) => {
//     const {limit=10, page=1} = req.query;
//     try {
//         let id = req.params.id;
//         let product = await Product.findById(id).limit(limit).skip((page-1) * limit);
//         res.send(product);  
//     } catch (error) {
//         res.status(404).send(error.message);
//     }
   
// });

// app.get("/category" , async (req,res) => {
//     try {
//     let category = req.query.category;
//     console.log(category)
//     let product = await Product.find({category});
//     res.send(product)
//     } catch (error) {
//     res.status(404).send(error.message);   
//     }
    
// })

// app.get("/tags" , async (req,res) => {
//     try {
//     let {tags} = req.query;
//     let product = await Product.find(tags);
//     res.send(product)
//     } catch (error) {
//     res.status(404).send(error.message);   
//     }
    
// })

app.post("/" , async (req,res) => {
    try {
        let product = await Product.create({
            ...req.body
        });
        res.send(product)
    } catch (error) {
        res.status(404).send(error.message);
    }
})


// app.post("/", async (req, res) => {
//   try {
//     let product = await Product.create({
//       ...req.body,
//     });
//     res.send(product);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

module.exports = app;
