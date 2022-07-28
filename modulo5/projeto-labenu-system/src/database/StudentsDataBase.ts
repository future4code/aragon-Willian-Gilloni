import { BaseDatabase } from "./BaseDatabase"
export class StudentsDatabase extends BaseDatabase {
    TABLE_NAME = "Labe_Students"
    public static TABLE_STUDENTS = "Labe_Students"
    public static TABLE_HOBBIES = "Labe_Hobbies"
    public static TABLE_STUDENTS_HOBBIES = "Students_Hobbies"
    
    // public async getStudents() {
    //     return super.getStudents()
    // }
}
