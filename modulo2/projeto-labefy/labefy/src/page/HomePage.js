import React from "react"
import styled from "styled-components"
import axios from "axios"
import { BASE_URL } from "../constants/Urls"
import { header } from "../constants/Header"


const Corpo = styled.div`

`
export default class HomePage extends React.Component {

    state = {
        playlists: [],
        nome: "",
        autor: "",
        urlDaMusica: "",
        newPlayListTrack:{}
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    componentDidUpdate() {
        this.getAllPlaylists()
    }
    handleName = (event) => {
        this.setState({ nome: event.target.value })
    }
    handleAutor = (event) => {
        this.setState({ autor: event.target.value })
    }

    handleUrl = (event) => {
        this.setState({ urlDaMusica: event.target.value })
    }

    getAllPlaylists = () => {
        axios.get(`${BASE_URL}/playlists`, header)
            .then((response) => this.setState({ playlists: response.data.result.list }))
            .catch((error) => console.log(error.response))
    }

    addTrackToPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
        const body = {
            name: this.state.nome,
            autor: this.state.autor,
            url: this.state.urlDaMusica
        }
        axios.post(url, body,header, {

        })
            .then((response) => {
                alert("Musica cadastrada com sucesso")
                this.setState({ nome: "", autor: "", urlDaMusica: "" })
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    render() {

        const listaDePlaylists = this.state.playlists.map((playlist) => {
            return <p key={playlist.id} >{playlist.name}</p>
        })



        return (
            <div>
                {listaDePlaylists}
                <button onClick={this.props.irParaLista}>Ir para playlist</button>
                
                <Corpo>
                    <h1>Labefy</h1>
                    <h2>Playlist da labefy</h2>
                    <h4>Adicione nome da música, autor e url</h4>
                    <h2>Nome</h2>
                    <input
                        placeholder={"nome da musica"}
                        value={this.state.nome}
                        onChange={this.handleName}
                    />
                    <h2>autor</h2>
                    <input placeholder="autor da musica"
                        value={this.state.autor}
                        onChange={this.handleAutor}
                    />
                    <h2>Url da musica</h2>
                    <input placeholder="url da musica"
                        value={this.state.urlDaMusica}
                        onChange={this.handleUrl}
                    />
                    

                    <button onClick={this.addTrackToPlaylist}>Inserir Musica</button>

                </Corpo>
            </div>
        )
    }
}