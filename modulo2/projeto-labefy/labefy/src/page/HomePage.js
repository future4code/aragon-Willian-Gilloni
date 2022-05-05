import { createPlayList } from "../services/Requests.js"
import React from "react"
import styled from "styled-components"


const Corpo = styled.div`

`
export default class HomePage extends React.Component {

    state = {
        nome: "",
        music: ""
    }
    handleName = (event) => {
        this.setState({ nome: event.target.value })
    }
    handleMusic = (event) => {
        this.setState({ music: event.target.value })
    }

    render() {
        return (
            <div>

                <button onClick={this.props.irParaLista}>Ir para lista</button>

                <Corpo>
                    <h1>Labefy</h1>
                    <h2>Playlist da labefy</h2>
                    <h4>Digite o nome da musica e seu autor</h4>
                    <h2>Nome</h2>
                    <input
                        placeholder={"nome da musica"}
                        value={this.state.nome}
                        onChange={this.handleName}
                    />
                    <h2>Musica</h2>
                    <input placeholder="autor da musica"
                        value={this.state.music}
                        onChange={this.handlemusic}
                    />

                    <button onClick={this.inserirMusica}>Inserir Musica</button>

                </Corpo>
            </div>
        )
    }
}