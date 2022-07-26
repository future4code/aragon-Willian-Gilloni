import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { createPerfume } from "./endpoints/createBrand";
import { searchPerfume } from "./endpoints/searchPerfumes";
import { editPerfumePrice } from "./endpoints/updatePricePerfume";
import { deletePerfume } from "./endpoints/deletePerfumes";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Implemente seus endpoints abaixo

app.post("/perfumes", createPerfume)

app.get("/perfumes", searchPerfume)

app.put("/perfumes/:id", editPerfumePrice)

app.delete("/perfumes/:id", deletePerfume)