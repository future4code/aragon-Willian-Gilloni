import React from "react"
import axios from "axios"
import { header } from "../constants/Header"

export default class ListaDeMusicas extends React.Component {
    state = {
        musica: {},
    }

    // componentDidMount() {
    //     getPlayListTracks(this.props.url, this.saveTrack)
    // }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.musica !== prevState.musica) {
        }
    }
    saveTrack = (data) => {
        this.setState({ musica: data })
    }
    getPlayListTracks = () => {
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`,header )
        .then((response)=>{
            console.log(response)
        })
        .catch ((error)=>{
            console.log(error)
        })
    }
    // getAllPlaylists = () => {
    //     axios.get(`${BASE_URL}/playlists`, header)
    //         .then((response) => this.setState({ playlists: response.data.result.list }))
    //         .catch((error) => console.log(error.response))
    // }
    render() {
        return (
            <div>
                {this.state.musica.name && this.state.autor ?
                    (
                        <div>
                            <p>Nome: {this.state.musica.name}</p>
                            <p>autor: {this.state.autor}</p>
                        </div>
                    ) : <p>Carregando... </p>
                }
                <button onClick={this.props.goToListPage}>Voltar para Lista</button>
            </div>
        )
    }
}