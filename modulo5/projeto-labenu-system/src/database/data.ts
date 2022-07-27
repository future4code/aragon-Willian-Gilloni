import { MODULE, TClassroom } from "../models/Classroom"
import { THobbies } from "../models/Hobbies"
import { TStudent } from "../models/Student"

export const hobbies: THobbies[] = [
    {
        id: "1",
        title: "Comer carambola"
    },
    {
        id: "2",
        title: "Estudar"
    },
    {
        id: "3",
        title: "Caçar pokemon"
    }
]

export const students: TStudent[] = [
    {
        id: "8",
        name: "Willian",
        email: "willian@gmail.com",
        birthDate: "1989/10/12",
        classroomId: "38",
        hobbiesId: "1"
    },
    {
        id: "1",
        name: "samuel",
        email: "samuel@gmail.com",
        birthDate: "2005/8/18",
        classroomId: "38",
        hobbiesId: "2"
    },
    {
        id: "2",
        name: "thiago",
        email: "thiago@gmail.com",
        birthDate: "1978/7/01",
        classroomId: "38",
        hobbiesId: "3"
    },
    {
        id: "3",
        name: "Sophia",
        email: "Sophia@gmail.com",
        birthDate: "2002/04/14",
        classroomId: "60",
        hobbiesId: "1"
    },
    {
        id: "4",
        name: "Suzy",
        email: "Suzy@gmail.com",
        birthDate: "1986/10/12",
        classroomId: "60",
        hobbiesId: "2"
    },
    {
        id: "5",
        name: "Yuzo",
        email: "Yuzo@gmail.com",
        birthDate: "1988/08/08",
        classroomId: "60",
        hobbiesId: "3"
    },
    {
        id: "6",
        name: "Suzy",
        email: "Suzy@gmail.com",
        birthDate: "2000/06/13",
        classroomId: "40",
        hobbiesId: "1",
    }, 
    {
        id: "7",
        name: "Filho do yuzo",
        email: "Yuzo@gmail.com",
        birthDate: "2016/10/12",
        classroomId: "40",
        hobbiesId: "2",
    }, 
    {
        id: "9",
        name: "Vini",
        email: "Vini@gmail.com",
        birthDate: "1986/10/12",
        classroomId: "",
        hobbiesId: "3",
    }
]

export const classroom: TClassroom[] = [
    
    {
        id: "1",
        name: "aragon",
        studentId: ["1","2","3"],
        module: MODULE.MODULE1
    },
    {
        id: "2",
        name: "Jasão",
        studentId: ["4","5","6"],
        module: MODULE.MODULE2
    },
    {
        id: "3",
        name: "Alan Turing",
        studentId: ["7","8","9"],
        module: MODULE.MODULE3
    }
]