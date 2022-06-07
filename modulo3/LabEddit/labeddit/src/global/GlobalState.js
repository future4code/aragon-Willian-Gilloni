import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../constants/urls"
import GlobalStateContext from "./GlobalStateContext"


const GlobalState = (props) => {

        const [posts, setPosts] = useState([])

        const getPosts = () => {
            
            const header = {
                headers: {
                  authorization: localStorage.getItem("token")
                }
              };

            axios
            .get (`${BASE_URL}/posts`, header)
            .then((response)=> {
                setPosts(response.data)
            })
            .catch((error)=> {
                console.log(error.message)
            })
        }

        const states = {posts}

        const setters = {setPosts}

        const getters = {getPosts}

        return (
            <GlobalStateContext.Provider value = {{ states, setters, getters}}>
            {props.children}
            </GlobalStateContext.Provider>
        )
}

export default GlobalState