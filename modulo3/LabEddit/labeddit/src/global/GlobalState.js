import axios from "axios"
import { useState } from "react"
import { size } from "../constants/pagination"
import { BASE_URL } from "../constants/urls"
import GlobalStateContext from "./GlobalStateContext"


const GlobalState = (props) => {

        const [posts, setPosts] = useState([])

        const [post,setPost] = useState({})

        const [postComments, setPostComments] = useState([])

        const [page,setPage] = useState(1)

        const [isLoading, setIsLoading] = useState(false)

        const getPosts = (currentPage) => {
            
            setIsLoading(true)

            const header = {
                headers: {
                  authorization: localStorage.getItem("token")
                }
              };

            axios
            .get (`${BASE_URL}/posts?page=${currentPage}&size=${size}`, header)
            .then((response)=> {
                setPosts(response.data)
                setIsLoading(false)
            })
            .catch((error)=> {
                console.log(error.message)
            })
        }
        
        const getPostComments = (postId) => {

            setIsLoading(true)

            const header = {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            }

            axios
            .get(`${BASE_URL}/posts/${postId}/comments`, header)
            .then((response)=> {
                setPostComments(response.data)
                setIsLoading(false)
            })
            .catch((error)=> {
                console.log(error.message)
            })
        }

        const states = {posts,post, postComments,page,isLoading}

        const setters = {setPosts,setPost, setPostComments,setPage,setIsLoading}

        const getters = {getPosts,getPostComments}


        return (
            <GlobalStateContext.Provider value = {{ states, setters, getters}}>
            {props.children}
            </GlobalStateContext.Provider>
        )
}

export default GlobalState