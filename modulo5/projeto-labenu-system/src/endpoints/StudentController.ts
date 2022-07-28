import { Student } from "../models/Student"
import { Request, Response } from "express";

export class StudentController {
    public async createStudents(req: Request, res: Response) {
        let errorCode = 400
        try {
            const {name,email,birthdate,classroom_id} = req.body
            if (!name || !email || !birthdate || !classroom_id) {
                throw new Error("Body inválido.")
            }

            const student = new Student(
                Date.now().toString(),
                name,
                email,
                birthdate,
                classroom_id

            )
            res.status(200).send({ student: student })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
   
}