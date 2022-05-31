import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
`
const Lista = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
`


export default class TelaListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }
    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios
            .get(url, {
                headers: {
                    Authorization: "willian-gilloni-aragon"
                }
            })
            .then((response) => {
                this.setState({ usuarios: response.data })
            })
            .catch((error) => {
                alert("Ocorreu um problema, tente novamente")
            })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "willian-gilloni-aragon"
            }
        })
            .then((response) => {
                alert("Usuário(a) deletado com sucesso")
                this.pegarUsuarios()
            })

            .catch((error) => {
                alert("ocorreu um erro,tente novamente")
            })
    }

    render() {
        console.log(this.state.usuarios)
        const listaUsuarios = this.state.usuarios.map((user) => {

            return <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>X</button>
            </CardUsuario>
        })

        return (
            <div>
                <button onClick={this.props.irParaCadastro}>ir para cadastro</button>
                <Lista>
                <h2>Lista de usuários</h2>
                {listaUsuarios}
                </Lista>
            </div>
        )
    }
}