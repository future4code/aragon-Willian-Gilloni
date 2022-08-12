import { likes } from "../database/migrations/data"
import { PostDatabase } from "../database/PostDatabase"
import { ICreatePostInputDTO, IDeletePostInputDTO, IDislikePostInputDBDTO, IGetLikedPostsDTO, IGetPostsDBDTO, IGetPostsInputDTO, IGetpostsOutputDTO, IGetPostsPost, ILikedPostDTO, ILikePostDTO, ILikePostInputDTO, Post } from "../models/Post"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        // private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    public createPost = async (input: ICreatePostInputDTO) => {

        const id = this.idGenerator.generate()
        const content = input.content
        const tokenData = input.token

        if (!content || content.length < 1) {
            throw new Error("Parâmetro 'content' faltando");

        }
        const userToken = this.authenticator.getTokenPayload(tokenData)

        const user_id = userToken.id

        const postDB = new Post(
            id,
            content,
            user_id
        )

        await this.postDatabase.createPost(postDB)

        const response = {
            message: "Cadastro realizado com sucesso",
            postDB
        }

        return response
    }

    public getPosts = async (input: IGetPostsInputDTO) => {
        const search = input.search || ""
        const order = input.order || "content"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1
        const offset = limit * (page - 1)

        const getPostsInputDB: IGetPostsDBDTO = {
            search,
            order,
            sort,
            limit,
            offset
        }

        const postsDB = await this.postDatabase.getPosts(getPostsInputDB)
        
        const posts = postsDB.map(postDB => {
            const post = new Post(
                postDB.id,
                postDB.content,
                postDB.user_id,
                postDB.likes
            )
            const postResponse: IGetPostsPost = {
                id: post.getId(),
                content: post.getContent(),
                user_id: post.getUserId(),
                likes: post.getLikes()
            }
            // console.log(postResponse)
            return postResponse
            
        })
        
        const response: IGetpostsOutputDTO = {
            posts
        }

        return response
    }

    public deletePost = async (input: IDeletePostInputDTO) => {
        const token = input.token
        const idToDelete = input.idToDelete

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }
        
        if (payload.role !== USER_ROLES.ADMIN) {
            throw new Error("Apenas admins podem deletar usuários")
        }  

        if (payload.id === idToDelete) {
            throw new Error("Não é possível deletar a própria conta")
        }

        const postDB = await this.postDatabase.findById(idToDelete)

        if (!postDB) {
            throw new Error("Post a ser deletado não encontrado")
        }

        await this.postDatabase.deletePosts(idToDelete)

        const response = {
            message: "Post deletado com sucesso"
        }

        return response
    }

    public likePost = async(input:ILikePostDTO)=> {
        const token = input.token
        const post_id = input.post_id as string

        const payload = this.authenticator.getTokenPayload(token)
        const user_id = payload.id

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        const findById = await this.postDatabase.findById(post_id)
        
        
        if(!findById){
            throw new Error("Post inexistente");     
        }
        const likesDB:ILikedPostDTO = {
            post_id,
            user_id
        }
        // const findLikedPost = await this.postDatabase.findLikedPost(likesDB)
        
        // if(findLikedPost){
        //     throw new Error("Usuario já curtiu este post");     
        // }

        const inputDB:ILikePostInputDTO = {
            post_id,
            user_id:payload.id
        }

        const likeDB = await this.postDatabase.likePost(inputDB)

        const response = {
            message:"Post curtido",
            likeDB
        }
        // console.log(post_id,user_id)
        return response
    }

    public dislikePost = async(input:IDislikePostInputDBDTO)=> {

        const token = input.token
        const id = input.id

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload){
            throw new Error("Token inválido.");           
        }

        const findPostById = await this.postDatabase.findPostById(id)

        if(!findPostById){
            throw new Error("Post não encontrado.");           
        }

        const findLikePost = await this.postDatabase.findLikedPost(id,payload.id)
        
        if(!findLikePost){
            throw new Error("Usuario ainda não curtiu este post.");            
        }

       await this.postDatabase.dislikePost(id)

       const response = {
            message:"Post descurtido com sucesso",
        }

        return response
    }
}