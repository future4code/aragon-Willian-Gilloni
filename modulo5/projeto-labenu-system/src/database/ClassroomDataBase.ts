import { Classroom } from "../models/Classroom"
import { BaseDatabase } from "./BaseDatabase"


export class ClassroomDatabase extends BaseDatabase {
    TABLE_NAME = "Labe_Classrooms"
    public static TABLE_CLASSROOMS = "Labe_Classrooms"

    public async getAll() {
        return super.getAll()
    }

    public async create(classroom: Classroom) {
        return super.create(classroom)
    }

    public async getItem(name: string, module: string) {
        const result = await BaseDatabase
            .connection(this.TABLE_NAME)
            .select(name, module)
            .where("module", "!=", "0")

        return result
    }

    public async getClassroomById(id: string) {
        const result = await BaseDatabase.connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .select()
            .where({ id: id });

        return result[0];
    }

    public async updateModule(id: string, newModule: string) {
        await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .update({ module: newModule })
            .where({ id: id })
    }
}

