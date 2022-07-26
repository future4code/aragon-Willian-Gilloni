import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const editPerfumePrice = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const price = req.body.price

        if(!price){
            errorCode = 422
            throw new Error("Price must exist.");
            
        }

        if (typeof price !== "number") {
            errorCode = 422
            throw new Error("Parameters 'price'must be a number.")
        }

        if (price <= 0) {
            errorCode = 422
            throw new Error("Parameters 'price' must be a number greater then 0.")
        }

        const perfumeExists = await connection(TABLE_PERFUMES)
            .select()
            .where("id", "=", `${id}`)

        if (perfumeExists.length === 0) {
            errorCode = 404
            throw new Error("Perfume not found.")
        }


         await connection(TABLE_PERFUMES)
            .update({
                price: price
            })
            .where({
                id: id
            })
      
        res.status(200).send({ message: "perfume edited successfully.",price:price })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}