import { Student } from "../models/Student"
import { BaseDatabase } from "./BaseDatabase"
export class StudentsDatabase extends BaseDatabase {
    TABLE_NAME = "Labe_Students"
    public static TABLE_STUDENTS = "Labe_Students"
    public static TABLE_HOBBIES = "Labe_Hobbies"
    public static TABLE_STUDENTS_HOBBIES = "Students_Hobbies"
    

    public async getAll() {
        return super.getAll()
    }

    public async create(student: Student) {
        return super.create(student)
    }
    
    public async getStudentByname(q:string){
        const result = await BaseDatabase
        .connection(StudentsDatabase.TABLE_STUDENTS)
        .where("name","LIKE",`%${q}%`)

        return result
    }

    public async getStudentById(id: string) {
        const result = await BaseDatabase.connection(StudentsDatabase.TABLE_STUDENTS)
            .select()
            .where({ id: id });

        return result[0];
    }

    public async updateStudent(id: string, newClassroom_id: string) {
        await BaseDatabase
            .connection(StudentsDatabase.TABLE_STUDENTS)
            .update({ classroom_id: newClassroom_id })
            .where({ id: id })
    }

    public async getStudentsByClassroom(classroom_id:string){
        const result = await BaseDatabase
        .connection(StudentsDatabase.TABLE_STUDENTS)
        .select()
        .where("classroom_id","=",`${classroom_id}`)
        return result
    }

    public async getStudentEmail(email:string){
        const findEmail = await BaseDatabase
        .connection(StudentsDatabase.TABLE_STUDENTS)
        .select()
        .where("email","=",`${email}`)
        return findEmail
    }

}
