import { Classroom, IClassroomDB } from "../models/Classroom"
import { BaseDatabase } from "./BaseDatabase"

export class ClassroomDataBase extends BaseDatabase {
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

     public async edit(classroom: Classroom) {
        return super.edit(classroom)
    }

    //  public async editModuleClassroom(id:string,module: string) {
    //     const result = await ClassroomDataBase
    //        .connection(ClassroomDataBase.TABLE_CLASSROOMS)
    //        .update(this.TABLE_NAME)
    //        .select({module})
    //        .where({id:id})

    //     return result

    //  }
}

