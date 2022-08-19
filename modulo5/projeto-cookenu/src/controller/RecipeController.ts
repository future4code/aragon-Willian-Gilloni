import { Request, Response } from "express";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { Recipe } from "../models/Recipe";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class RecipeController {
    public getAllRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const search = req.query.q as string
            const sort = req.query.sort as string || "title" 
            const order = req.query.order as string || "asc"
            const limit = Number(req.query.limit) || 20;
            const page = Number(req.query.page) || 1;
            const offset = limit * (page - 1);
            
            if (!token) {
                errorCode = 401
                throw new Error("Missing token ")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Invalid Token ")
            }

            const recipeDatabase = new RecipeDatabase()
            const recipesDB = await recipeDatabase.getAllRecipes(search,sort,order,limit,offset)
            
            const recipes = recipesDB.map((recipeDB) => {
                return new Recipe(
                    recipeDB.id,
                    recipeDB.title,
                    recipeDB.description,
                    recipeDB.created_at,
                    recipeDB.updated_at,
                    recipeDB.creator_id
                )
            })

            res.status(200).send({ recipes })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
    
    public createRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const { title, description } = req.body

            if (!token) {
                errorCode = 401
                throw new Error("Missing token.")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("invalid token.")
            }

            if (!title || !description) {
                errorCode = 422
                throw new Error("Missing parameters.");

            }

            if (typeof title !== "string" || typeof description !== "string") {
                errorCode = 422
                throw new Error("Typeof of parameters must be a string.");
            }

            if (title.length < 3) {
                errorCode = 422
                throw new Error("Patameter 'title' must have at least 3 characters.");
            }

            if (description.length < 10) {
                errorCode = 422
                throw new Error("Parameter'description' must have at least 10 characters");
            }


            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const recipe = new Recipe(
                id,
                title,
                description,
                new Date(),
                new Date(),
                payload.id
            )

            const recipeDataBase = new RecipeDatabase()
            await recipeDataBase.createRecipe(recipe)

            res.status(201).send({
                message: "Recipe add successfully!",
                recipe
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public editRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const id = req.params.id
            const { title, description } = req.body

            if (!token) {
                errorCode = 422
                throw new Error("Missing token.")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Invalid Token.")
            }

            if (!title && !description) {
                errorCode = 422
                throw new Error("Missing parameters.");
            }


            if (title && typeof title !== "string") {
                errorCode = 422
                throw new Error("Parameter 'title' must be a string.")
            }

            if (description && typeof description !== "string") {
                errorCode = 422
                throw new Error("Parameter 'description' must be a string.")
            }

            if (title && title.length < 3) {
                throw new Error("Parameter 'title' must have at least 3 characters")
            }

            if (description && description.length < 10) {
                throw new Error("O parameter 'description' must have at least 10 characters.")
            }

            const recipeDataBase = new RecipeDatabase()
            const receitaDB = await recipeDataBase.findById(id)

            if (!receitaDB) {
                errorCode = 404
                throw new Error("Invalid recipe id to be edited.")
            }

            if (payload.role === USER_ROLES.NORMAL) {
                if (payload.id !== receitaDB.creator_id) {
                    errorCode = 403
                    throw new Error("Only admins can change recipes other than their own.")
                }
            }

            const recipe = new Recipe(
                receitaDB.id,
                receitaDB.title,
                receitaDB.description,
                receitaDB.created_at,
                receitaDB.updated_at = new Date(),
                receitaDB.creator_id
            )

            title && recipe.setTitle(title)
            description && recipe.setDescription(description)

            await recipeDataBase.editRecipe(recipe)

            res.status(201).send({
                message: "Editing done successfully",
                recipe
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
    public deleteRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const id = req.params.id

            if (!token) {
                errorCode = 422
                throw new Error("Token missing")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Invalid Token.")
            }

            const recipeDataBase = new RecipeDatabase()
            const receitaDB = await recipeDataBase.findById(id)

            if (!receitaDB) {
                errorCode = 404
                throw new Error("Invalid recipe id to be deleted")
            }

            if (payload.role === USER_ROLES.NORMAL) {
                if (payload.id !== receitaDB.creator_id) {
                    errorCode = 403
                    throw new Error("Only admins can delete recipes other than their own")
                }
            }

            await recipeDataBase.deleteRecipe(id)

            res.status(200).send({ message: "Recipe deleted successfully!" })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}