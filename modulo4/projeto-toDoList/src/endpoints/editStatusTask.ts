import { Request, Response } from "express"
import connection from "../database/connection"


//Exercicio6
export const editStatusTask = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const taskId = req.params.taskId
    const status = req.body.status as string

    if(!status){
      errorCode = 422
      throw new Error("parâmetro ausente.");      
    }
    if(status !== "TO_DO" && status !== "DOING" && status !== "DONE" ){
      errorCode = 422
      throw new Error("Paramater must be:TO_DO,DOING or DONE");      
    }

    const [tasks] = await connection.raw(`
    SELECT * FROM Tasks
    WHERE id = ${taskId};
    `);
    
    const checkId = tasks[0];

    if (checkId === undefined) {
      errorCode = 404;
      throw new Error("userId doesn't exist.");
    }

    await connection.raw(`
      UPDATE Tasks
      SET status = "${status}"
      WHERE id = ${taskId};
      `)

    res.status(200).send({ message: "Task status updated successfully" })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}