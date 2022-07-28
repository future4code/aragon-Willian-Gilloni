import { Request, Response } from "express";
import { ClassroomDataBase } from "../database/ClassroomDatabase";
import { classrooms, students } from "../database/migrations/data";
import { Classroom } from "../models/Classroom";
import { Student } from "../models/Student";

export class ClassroomController {
    public async getAllClassrooms(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classroomDatabase = new ClassroomDataBase()
            const result = await classroomDatabase.getAll()

            res.status(200).send({ classrooms: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async createClassrooms(req: Request, res: Response) {
        let errorCode = 400
        try {
            const name = req.body.name
            const module = req.body.module

            if (!name) {
                throw new Error("Body inválido.")
            }
            const classroom = new Classroom(
                Date.now().toString(),
                name,
                module
            )

            const classroomDatabase = new ClassroomDataBase()
            await classroomDatabase.create(classroom)

            res.status(201).send({ message: "Classroom created", classroom: classroom })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async getActiveClassrooms(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classroomDatabase = new ClassroomDataBase()
            const result = await classroomDatabase.getItem("name","module")

            res.status(200).send({ classrooms: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    // public async updateModule(req: Request, res: Response) {
    //     let errorCode = 400
    //     try {
    //         const module = req.body.module

    //         if (!module) {
    //             throw new Error("Body inválido.")
    //         }           

    //         const classroomDatabase = new ClassroomDataBase()
    //         await classroomDatabase.edit(classroom)

    //         res.status(201).send({ message: "Classroom created", classroom: classroom })
    //     } catch (error) {
    //         res.status(errorCode).send({ message: error.message })
    //     }
    // }

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
    
    public async getAllStudents(req: Request, res: Response) {
        let errorCode = 400
        try {
            const studentDatabase = new ClassroomDataBase()
            const result = await studentDatabase.getAll()

            res.status(200).send({ classrooms: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

}

