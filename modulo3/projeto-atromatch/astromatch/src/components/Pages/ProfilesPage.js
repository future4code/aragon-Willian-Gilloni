import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL, ALUNO } from "../constants/urls"


function ProfilesPage() {

    const [profile, setProfile] = useState(undefined)

    useEffect(() => {
        getProfile()

    }, [])

    const getProfile = () => {

        const url = `${BASE_URL}/${ALUNO}/person`

        axios
            .get(url)
            .then((response)=> {
                setProfile(response.data.profile)
                console.log(response.data)
            })
            .catch((error)=> {
                alert("tente novamente")
                console.log(error.message)
            })
    }
    const profileCard = profile && (
        <section>
            <img
            src={profile.photo}
            alt={profile.photo_alt}
            height={"240px"}
            >
            </img>
            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>

            <button onClick={()=> getProfile()} >Proximo Perfil</button>
        </section>
    )

    return (
        <div>
            Olá,eu sou o perfil
            {profileCard}
        </div>
    )

} export default ProfilesPage;