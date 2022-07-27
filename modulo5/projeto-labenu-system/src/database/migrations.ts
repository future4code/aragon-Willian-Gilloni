import connection, { BaseDatabase } from "./BaseDataBase"
import { classroom, hobbies, students } from "./data"

import { TABLE_CLASSROOM, TABLE_HOBBIES, TABLE_STUDENTS } from "./tableNames"

class Migrations extends BaseDatabase{
    protected TABLE_NAME = ""

    public async execute(){
        try {
            await this.createTables()
            console.log("Tables created successfully.")
            await this.insertData()
            console.log("Tables populated successfully.")
        } catch (error) {
            console.log(error.sql || error.message)
        }finally{
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Migrations completed")
        }
    }

}

const createTables = async () => {
    await connection.raw(`
DROP TABLE IF EXISTS ${TABLE_CLASSROOM}, ${TABLE_STUDENTS}, ${TABLE_HOBBIES};

CREATE TABLE IF NOT EXISTS ${TABLE_HOBBIES}(
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
);

CREATE TABLE IF NOT EXISTS ${TABLE_STUDENTS}(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    birthdate VARCHAR(255) NOT NULL,
    FOREIGN KEY (hobbies_id) REFERENCES ${TABLE_HOBBIES}(id)
    FOREIGN KEY (classroom_id) REFERENCES ${TABLE_CLASSROOM}(id)
);

CREATE TABLE IF NOT EXISTS ${TABLE_CLASSROOM}(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    module ENUM NOT NULL,
    FOREIGN KEY (student_id) REFERENCES ${TABLE_STUDENTS}(id)
);
    `)
    .then(() => {
        console.log(`Tables created successfully!`)
        insertData()
    })
    .catch((error: any) => printError(error))
}

const insertData = async () => {
    try {
        await connection(TABLE_HOBBIES)
            .insert(hobbies)
            .then(() => console.log(`${TABLE_HOBBIES} populated!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_STUDENTS)
            .insert(students)
            .then(() => console.log(`${TABLE_STUDENTS} populated!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_CLASSROOM)
            .insert(classroom)
            .then(() => console.log(`${TABLE_CLASSROOM} populated!`))
            .catch((error: any) => printError(error))

    } catch (error: any) {
        console.log(error.sqlMessage || error.message)
    } finally {
        console.log("Ending connection!")

        return connection.destroy()
    }
}

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
}

createTables()