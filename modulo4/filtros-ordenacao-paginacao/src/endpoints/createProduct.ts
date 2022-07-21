import { Request, Response } from "express";
import connection from "../database/connection";
import { Product } from "../models/Product";
//Exercicio3
export const createProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.body.id
      const { name, price } = req.body
   
      const newProduct: Product = {
        id:id,
        name: name,
        price: price
      }
  
      await connection.raw(`
      INSERT INTO Products1(id,name,price)
      VALUES("${newProduct.id}", "${newProduct.name}", "${newProduct.price}");
      `)
  
      res.status(201).send({ mensagem: "Product created successfully", products:newProduct })
  
    } catch (error) {
      res.status(errorCode).send({ mensagem: error.message })
    }
  }