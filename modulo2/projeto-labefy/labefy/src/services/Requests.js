
import axios from "axios";

const urlGet = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const urlDelete = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId"
const urlGetTracks = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
const urlSearch = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=string"
const urlCreate = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const urlAddTrack = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
const urlRemoveTrack = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/:trackId"

const header = {
    headers: {
        Authorization: "willian-gilloni-aragon"
    }
}
export const getAllPlaylists = () => {
    axios
        .get(urlGet, header)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
}

export const searchPlaylist = (saveData) => {
    axios
        .get(urlSearch, header)
        .then((response) => {
            console.log(response)
        })
        .catch((error)=> {
        console.log(error)
        })
}

export const getPlayListTracks = (saveData) => {
    axios
    .get(urlGetTracks,header)
    .then((response)=>{
        console.log(response)
    })
    .catch ((error)=>{
        console.log(error)
    })
}


export const createPlayList = (saveData) => {
    axios
    .post(urlCreate,header)
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        console.log(error)
    })
}

export const addTrackToPlayList = (saveData) => {
    axios.post(urlAddTrack,header)
    .then((response)=>{
        console.log(response)
    })
    .catch.log((error)=> {
        console.log(error)
    })
}

export const deleteMusicList = (id) => {
    axios.delete(urlDelete, header)
        .then((response) => {
            console.log(response)
        })  
        .catch.log((error) => {
            console.log(error)
        })

}

export const removeTrackFromPlayList = (saveData) => {
    axios.delete(urlRemoveTrack, header)
        .then((response) => {
            console.log(response)
        })
        .catch.log((error) => {
            console.log(error)
        })
    }