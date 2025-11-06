import express from "express";
import Product from "../model/productModule.js";

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// POST new product
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json({ message: "Product added successfully" });
});

export default router;
