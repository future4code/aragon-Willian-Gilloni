import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getUsers } from "./endpoints/getUsers";
import { searchProducts } from "./endpoints/searchProducts";
import { createProducts } from "./endpoints/createProduct";
import { removeProduct } from "./endpoints/removeProduct";
import { updatePrice } from "./endpoints/updatePrice";


const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Get users
app.get("/users", getUsers)
// Search Products
app.get("/products", searchProducts)
// Create Products
app.post("/products", createProducts)
// Remove Products
app.delete("/products/:id", removeProduct)
// Edit product price
app.put("/products/:id", updatePrice)