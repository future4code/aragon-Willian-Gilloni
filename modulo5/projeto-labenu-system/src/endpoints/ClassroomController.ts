import { Request, Response } from "express";
import { ClassroomDatabase } from "../database/ClassroomDataBase";
import { Classroom } from "../models/Classroom";

export class ClassroomController {
    public async getAllClassrooms(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classroomDatabase = new ClassroomDatabase()
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

            if (!name || !module) {
                errorCode = 400
                throw new Error("Body invalid.")
            }

            if (typeof name !== "string" || typeof module !== "string" ){
                errorCode = 400
                throw new Error("Name must be a string or module must be a number.");   
            }

            const classroom = new Classroom(
                Date.now().toString(),
                name,
                module
            )

            const classroomDatabase = new ClassroomDatabase()
            await classroomDatabase.create(classroom)

            res.status(201).send({ message: "Classroom created", classroom: classroom })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async getActiveClassrooms(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classroomDatabase = new ClassroomDatabase()
            const result = await classroomDatabase.getItem("name","module")

            res.status(200).send({ classrooms: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async updateModule(req: Request, res: Response) {
        let errorCode = 400;
        try {
          const id = req.params.classroom_id
          const module = req.body.module
    
          if (!module) {
            throw new Error("Error: missing parameters.");
          }
          
          if (typeof id !== "string" || typeof module !== "string" ){
            errorCode = 400
            throw new Error("Id and module must be a string.");           
        }
          
          const classroomDatabase = new ClassroomDatabase();
          await classroomDatabase.updateModule(id, module);
    
          res.status(200).send({ message: "Module updated successfully." });
        } catch (error) {
          res.status(errorCode).send({ message: error.message });
        }
      } 
}

