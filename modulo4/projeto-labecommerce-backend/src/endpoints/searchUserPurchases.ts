import { Request, Response } from "express";
import connection from "../database/connection";
import {TABLE_USERS} from "../database/tableNames";

export const searchUserPurchases = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const id = req.params.user_id

    const userIdExists = await connection(TABLE_USERS)
      .select()
      .where("id", "=", `${id}`);

    if (!userIdExists[0]) {
      errorCode = 404;
      throw new Error("Error: User not found.");
    }

    const [checkUserPurchases] = await connection.raw(`
    SELECT
        email, name, price, quantity, total_price
        FROM Labe_Purchases
        JOIN Labe_Products
        ON Labe_Purchases.product_id = Labe_Products.id
        JOIN Labe_Users
        ON Labe_Purchases.user_id = Labe_Users.id
        WHERE Labe_Purchases.user_id = ${id};`)

    res.status(200).send({purchases: checkUserPurchases});
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};