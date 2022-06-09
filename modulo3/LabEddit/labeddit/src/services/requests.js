import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator"



export const requestLogin = (form, clear, navigate) => {
    const body = {
        email: form.email,
        password: form.password
    }

    axios
        .post(`${BASE_URL}/users/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("userEmail", form.email)
            alert("login realizado com sucesso")
            goToFeedPage(navigate)
        })
        .catch((error) => {
            console.log(error.message)
            alert("Email e/ou senha inválidos! Tente novamente")
            clear()
        })
}

export const requestSignUp = (form, clear, navigate) => {

    const body = {
        username: form.name,
        email: form.email,
        password: form.password
    }

    axios.post(`${BASE_URL}/users/signup`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("userEmail", form.email)
            alert("Usuário criado com sucesso! Seja bem-vindo!")
            goToFeedPage(navigate)
        })
        .catch((error) => {
            console.log(error.message)
            alert("Algo deu errado! Tente novamente")
            clear()
        })
}

export const requestCreatePost = (form, clear, getPosts) => {

    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }


    const body = {
        title: form.title,
        body: form.body
    }

    axios
        .post(`${BASE_URL}/posts`, body, header)
        .then((response) => {
            alert(response.data)
            getPosts()
            clear()
        })
        .catch((error) => {
            console.log(error.message)
        })
}

export const requestCreateComment = (form, clear, getPostComments, postId) => {

    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }

    const body = {
        body: form.body
    }

    axios
        .post(`${BASE_URL}/posts/${postId}/comments`, body, header)
        .then((response) => {
            alert(response.data)
            getPostComments(postId)
            clear()
        })
        .catch((error) => {
            console.log(error.message)
        })
}

export const requestCreatePostVote = (postId, direction, getPosts) => {

    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }

    const body = {
        direction: direction
    }

    axios
        .post(`${BASE_URL}/posts/${postId}/votes`, body, header)
        .then(() => {
            alert("Voto registrado com sucesso")
            getPosts()
        })
        .catch((error) => {
            console.log(error.message)
        })
}

export const requestCreateCommentVote = (commentId, direction, getPostComments, postId) => {

    const header = {
        authorization: localStorage.getItem("token")
    }

    const body = {
        direction: direction
    }

    axios
        .post(`${BASE_URL}/comments/${commentId}/votes`, body, header)
        .then(() => {
            alert("Voto registrado com sucesso")
            getPostComments(postId)
        })
        .catch((error) => {
            console.log(error.message)
        })
}

export const requestChangePostVote = (postId, direction, getPosts) => {

    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    };

    const body = {
        direction: direction
    }

    axios
        .put(`${BASE_URL}/posts/${postId}/votes`, body, header)
        .then(() => {
            alert("Voto modificado com sucesso")
            getPosts()
        })
        .catch((error) => {
            console.log(error.message)
        })
}

export const requestChangeCommentVote = (commentId, direction, getPostComments, postId) => {

    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }

    const body = {
        direction: direction
    }

    axios
        .put(`${BASE_URL}/comments/${commentId}/votes`, body, header)
        .then(() => {
            alert("Voto modificado com sucesso!")
            getPostComments(postId)
        })
        .catch((error) => {
            console.log(error.message)
        })
}

export const requestDeletePostVote = (postId, getPosts) => {

    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }

    axios
    .delete(`${BASE_URL}/posts/${postId}/votes`,header)
    .then(()=> {
        alert("Voto removido com sucesso")
    })
    .catch((error)=> {
        console.log(error.message)
    })
}

export const requestDeleteCommentVote = (commentId, getPostComments,postId)=> {

    const header = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    }

    axios
    .delete(`${BASE_URL}/comments/${commentId}/votes`, header)
    .then(()=> {
        alert("Voto removido com sucesso")
        getPostComments(postId)
    })
    .catch((error)=> {
        console.log(error.message)
    })

}