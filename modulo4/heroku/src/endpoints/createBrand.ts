import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";
import { Perfume } from "../models/Perfume";

export const createPerfume = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name,brand,price,ml} = req.body 

        if (!name || !price || !brand || !ml) {
            errorCode = 422       
            throw new Error("Parameters 'name' ,'price' brand or ml missing.")
        }

        if (typeof name !== "string" || typeof brand !== "string") {
            errorCode = 422
            throw new Error("Parameters 'name', brand must be a string.")
        }

        if(typeof price !== "number" || typeof ml !== "number"){
            errorCode = 422
            throw new Error("Parameters 'number' and 'ml' must be a number");
        }

        if (price <= 0) {
            errorCode = 422
            throw new Error("Parameters 'price' must be greater then 0.")
        }

        const newPerfume: Perfume = {
            id: Date.now().toString(),
            name: name,
            brand:brand,
            price: price,
            ml:ml
        }

        await connection(TABLE_PERFUMES)
            .insert({
                id: newPerfume.id,
                name: newPerfume.name,
                brand: newPerfume.brand,
                price: newPerfume.price,
                ml: newPerfume.ml
            })
      
        res.status(200).send({ perfumes: newPerfume, message: "Perfume successfully added." })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}