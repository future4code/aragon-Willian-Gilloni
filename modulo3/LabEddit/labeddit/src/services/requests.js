import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator"



export const requestLogin = (form,clear, navigate)=> {
    const body = {
        email:form.email,
        password: form.password
    }

    axios
    .post(`${BASE_URL}/users/login`, body)
    .then((response)=> {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("userEmail", form.email)
        alert("login realizado com sucesso")
        goToFeedPage(navigate)
    })
    .catch((error)=> {
        alert("Email e/ou senha inválidos! Tente novamente")
        clear()
    })
}