import axios from "axios"
import { ALUNO, BASE_URL } from "../constants/urls"
import { goToAdminPage } from "../routes/coordinator"


export const requestLogin = (email, password, navigate) => {

    const body = {
        email: email,
        password: password
    }

    axios.post(`${BASE_URL}/${ALUNO}/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            alert("login realizado com sucesso")
            goToAdminPage(navigate)
        })
        .catch((error) => {
            alert("um erro ocorreu! Tente novamente")
            console.log(error.message)
        })
}