import { PostDatabase } from "../database/PostDatabase"
import { ICreatePostInputDTO, IDeletePostInputDTO, IGetPostsDBDTO, IGetPostsInputDTO, IGetpostsOutputDTO, IGetPostsPost, ILikePostDTO, Post } from "../models/Post"
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
                postDB.user_id
            )
            const postResponse: IGetPostsPost = {
                id: post.getId(),
                content: post.getContent(),
                user_id: post.getUserId()
            }

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

    likePost = async(input:ILikePostDTO)=> {
        const token = input.token
        const post_id = input.post_id as string
        const payload = this.authenticator.getTokenPayload(token)
        const likeDB = await this.postDatabase.likePost(post_id)
    }
}