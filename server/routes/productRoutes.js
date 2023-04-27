const express = require("express");
const Product = require("../models/Product");

const productRoutes = express.Router();

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

productRoutes.route("/").get(getProducts);

module.exports = productRoutes;
