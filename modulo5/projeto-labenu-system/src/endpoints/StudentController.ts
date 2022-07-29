import { Student } from "../models/Student"
import { Request, Response } from "express";
import { StudentsDatabase } from "../database/StudentsDataBase";
import { BaseDatabase } from "../database/BaseDatabase";

export class StudentController {

    public async getAllStudents(req: Request, res: Response) {
        let errorCode = 400
        try {
            const search = req.query.q as string
            if (search) {
                const studentDatabase = new StudentsDatabase()
                const result = await studentDatabase.getStudentByname(search)

                if (result.length === 0) {
                    errorCode = 404
                    throw new Error("Student not found.");
                }

                res.status(200).send({ students: result })
            }

            const studentDatabase = new StudentsDatabase()
            const result = await studentDatabase.getAll()

            res.status(200).send({ classrooms: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async createStudents(req: Request, res: Response) {
        let errorCode = 400
        try {
            const { name, email, birthdate, classroom_id } = req.body
            if (!name || !email || !birthdate) {
                errorCode = 422
                throw new Error("Body inválido.")
            }
            
            if (typeof name !== "string" || typeof email !== "string") {
                errorCode = 400
                throw new Error("Name and email must be a string.")
            }

            if (!email.includes("@")) {
                errorCode = 422
                throw new Error("Email must have @")
            }

            const studentDatabase = new StudentsDatabase()
            const checkEmail = await studentDatabase.getStudentEmail(email)

            if (checkEmail[0]) {
                errorCode = 422
                throw new Error("email already exists.")
            }

            const date: Date = new Date();
            const actualYear: number = date.getFullYear()

            const birthSplitted: any = birthdate.split("/")
            const birthYear: number = birthSplitted[0];

            const checkAge: number = actualYear - birthYear;

            if (checkAge < 18) {
                errorCode = 400
                throw new Error("Age must be greater then 18.");
            }

            if (name.length < 4) {
                errorCode = 400
                throw new Error("Name must be greater then 4.");
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

    public async updateStudent(req: Request, res: Response) {
        let errorCode = 400;
        try {
            const id = req.params.studentId
            const classroom_id = req.body.classroom_id

            if (!classroom_id) {
                errorCode = 400
                throw new Error("Error: missing parameters.");
            }

            if(typeof classroom_id !== "string"){
                errorCode = 400
                throw new Error("Classroom_id must be a string.");     
            }

            const studentDatabase = new StudentsDatabase();
            await studentDatabase.updateStudent(id, classroom_id);

            res.status(200).send({ message: "Classroom_id updated successfully." });
        } catch (error) {
            res.status(errorCode).send({ message: error.message });
        }
    }

    public async getStudentsByClassroom(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classroom_id = req.params.classroom_id
            const studentDatabase = new StudentsDatabase()
            const result = await studentDatabase.getStudentsByClassroom(classroom_id)

            res.status(200).send({ students: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

}