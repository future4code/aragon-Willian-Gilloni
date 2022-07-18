import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"


//exercicio4
export const updatePrice = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      const id = req.params.id
      const price = req.body.price
  
        const [product] = await connection.raw(`
        SELECT * FROM Products1
        WHERE id = ${id};
        `)

        if(!product[0]){
            errorCode = 404
            throw new Error("Id doens't exist.");            
        }

      await connection.raw(`
      UPDATE ${TABLE_PRODUCTS}
      SET price = "${price}"
      WHERE id = "${id}";
      `)
        
      res.status(200).send({ mensagem: "Price updated successfully." })
    } catch (error) {
      res.status(errorCode).send({ mensagem: error.message })
    }
  }