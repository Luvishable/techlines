const dotenv = require("dotenv");
const express = require("express");
const connectToDatabase = require("./database");

const productRoutes = require("./routes/productRoutes");

// bring the env variables
dotenv.config();

// connect to the database
connectToDatabase();

// initialize the express app
const app = express();

// utilize the middleware in order to parse the json-type request body
app.use(express.json());

app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
