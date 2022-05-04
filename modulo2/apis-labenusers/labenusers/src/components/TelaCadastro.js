import axios from "axios";
import React from "react";
import styled from "styled-components"

const Corpo = styled.div`
margin-top:200px;
border: 1px solid black;
display:flex;
justify-content: center;
align-items:center;
`



export default class TelaCadastro extends React.Component {

    state = {
        nome: "",
        email: ""
    }
    handleName = (event) => {
        this.setState({ nome: event.target.value })
    }
    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url, body, {
            headers: {
                Authorization: "willian-gilloni-aragon"
            }
        })
            .then((response) => {
                alert("Usuário(a) cadastrado com sucesso")
                this.setState({ nome: "", email: "" })
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }
    render() {
        return (
            <div>
                
                    <button onClick={this.props.irParaLista}>Ir para lista</button>
                
                <Corpo>
                    <h2>Nome</h2>
                    <input
                        placeholder={"nome"}
                        value={this.state.nome}
                        onChange={this.handleName}
                    />
                    <h2>Email</h2>
                    <input placeholder="E-mail"
                        value={this.state.email}
                        onChange={this.handleEmail}
                    />
                    
                        <button onClick={this.fazerCadastro}>Cadastrar</button>
                    
                </Corpo>
            </div>
        )
    }
}