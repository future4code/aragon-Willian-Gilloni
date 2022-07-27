
export enum MODULE {
    MODULE0 = "Module 1",
    MODULE1 = "Module 2",
    MODULE2 = "Module 3",
    MODULE3 = "Module 4",
    MODULE4 = "Module 5",
    MODULE5 = "Module 6"
    
}

export type TClassroom = {
    id: string,
    name: string,
    studentId:string[],
    module:MODULE
}

export class Classroom {
    constructor(
        private id: string,
        private name: string,
        private studentsId:string[],
        private module:string
    ) {
        this.id = id
        this.name = name
        this.studentsId= studentsId,
        this.module= module
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getStudentsId() {
        return this.studentsId
    }

    public getModule() {
        return this.module
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setStudentsId(newStudentsId: string[]) {
        this.studentsId = newStudentsId
    }

    public setModule(newModule:string){
        this.module = newModule
    }
}
