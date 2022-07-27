import { Hobbies } from "./Hobbies"

export type TStudent = {
    id: string,
    name: string,
    email: string,
    birthDate:string,
    classroomId:null | string,
    hobbiesId:string
}

export class Student {

    constructor(
        private id: string,
        private name: string,
        private email: string,
        private birthDate:string,
        private classroomId:null | string,
        private hobbiesId:string
    ) {
        this.id = id
        this.name = name
        this.email = email
        this.birthDate = birthDate
        this.classroomId = classroomId
        this.hobbiesId = hobbiesId
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getEmail() {
        return this.email
    }

    public getBirthDate() {
        return this.birthDate
    }

    public getClassroomId() {
        return this.classroomId
    }

    public getHobbiesId() {
        return this.hobbiesId
    }


    public setId(newId: string) {
        this.id = newId
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setBirthDate(newBirthDate: string) {
        this.birthDate = newBirthDate
    }

    public setClassroomId(newClassroomId: string) {
        this.classroomId = newClassroomId
    }

    public setHobbiesId(newHobbiesId: string) {
        this.hobbiesId = newHobbiesId
    }
}