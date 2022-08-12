import { IFindInputDBDTO, IGetPostsDBDTO, ILikeDB, ILikeDBOutputDTO, ILikedPostDTO, ILikePostInputDTO, IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"


    public createPost = async (post: Post) => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId(),
            likes: post.getLikes()
        }

        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .insert(postDB)
    }

    public getPosts = async (input: IGetPostsDBDTO) => {
        const search = input.search
        const order = input.order
        const sort = input.sort
        const limit = input.limit
        const offset = input.offset

        const postsDB: IPostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()
            .where("content", "LIKE", `%${search}%`)
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)

        return postsDB
    }

    public findById = async (id: string) => {
        const usersDB: IPostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()
            .where({ id })

        return usersDB[0]
    }

    public deletePosts = async (id: string) => {

        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .delete()
            .where({ id })
    }

    public findLikedPost = async (id: string, user_id: string) => {

        const postLikeDB: ILikeDB[] = await BaseDatabase
            .connection("Labook_Likes")
            .select()
            .where("user_id", "=", `${user_id}`)
            .andWhere("post_id", "=", `${id}`)
        
            return postLikeDB[0]
    }

    public likePost = async (like: ILikePostInputDTO) => {
        const likeDB: ILikeDBOutputDTO = {
            user_id: like.user_id,
            post_id: like.post_id
        }

        await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .insert(likeDB)

        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .where("id", "=", `${like.post_id}`)
            .increment("likes", 1)
    }

    public findPostById = async (id: string) => {
        const result = await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .select()
            .where({ id })

        return result
    }

    public dislikePost = async (id: string) => {
        await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .delete()
            .where("post_id", "=", `${id}`)

    }
}