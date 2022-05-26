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



export const deleteTrip = (tripId, getTripsData) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    axios
        .delete(`${BASE_URL}/${ALUNO}/trips/${tripId}`, header)
        .then(() => {
            alert("Viagem excluida com sucesso")
            getTripsData()
        })
        .catch((error) => {
            console.log(error.message)
        })
}

export const createTrip = (body, clear, getTripsData) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    axios.post(`${BASE_URL}/${ALUNO}/trips`, body, header)
    .then(()=> {
        alert("viagem criada com sucesso!")
        clear()
        getTripsData()
    })
    .catch((error)=> {
        alert(error.message)
    })
}