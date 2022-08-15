import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { ICreatePostInputDTO, IDislikePostInputDBDTO, IDislikePostInputDTO, IGetPostsInputDTO, ILikePostDTO, ILikePostInputDTO } from "../models/Post";
import { IDeleteUserInputDTO } from "../models/User";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) { }

    public createPost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const content = req.body.content

            const input: ICreatePostInputDTO = {
                content,
                token
            }

            const response = await this.postBusiness.createPost(input)

            res.status(201).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public getPosts = async (req: Request, res: Response) => {
        try {
            const input: IGetPostsInputDTO = {
                token: req.headers.authorization,
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit:req.query.limit as string,
                page:req.query.page as string
            
            }

            const response = await this.postBusiness.getPosts(input)

            res.status(201).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public deletePost = async (req: Request, res: Response) => {
        try {
            const input: IDeleteUserInputDTO = {
                token: req.headers.authorization,
                idToDelete: req.params.id
            }

            const response = await this.postBusiness.deletePost(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public likePost = async (req: Request, res: Response) => {
        try {
            const input:ILikePostDTO = {
                token: req.headers.authorization,
                post_id:req.params.post_id
            }

            const response = await this.postBusiness.likePost(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public dislikePost = async (req: Request, res: Response) => {
        try {
            const input:IDislikePostInputDTO = {
                token:req.headers.authorization,
                post_id:req.params.post_id
            }

            const response = await this.postBusiness.dislikePost(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

}