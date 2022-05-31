import axios from "axios"
import { useEffect, useState } from "react"
import { ALUNO, BASE_URL } from "../constants/urls"



const useRequestData = (path, initialState) => {
    const [data, setData] = useState(initialState)

    const getData = () => {
        const header = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        axios.get(`${BASE_URL}/${ALUNO}/${path}`, header)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                alert(error.message)
                console.log(error)
            })
    }

    useEffect(() => {
        getData()
    }, [path])


    return [data, getData]
}

export default useRequestData