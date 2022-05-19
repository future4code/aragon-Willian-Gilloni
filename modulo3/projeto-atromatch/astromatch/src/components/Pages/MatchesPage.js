import { useEffect, useState } from "react";
import { BASE_URL, ALUNO } from "../constants/urls"
import axios from "axios";
import styled from "styled-components";

const MatchsPagesStyle = styled.div `
* {
    text-align:center
}
.tituto-match {
    margin:20px
}
`

function MatchesPage() {

    const [matches, setMatches] = useState(undefined)


    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        const url = `${BASE_URL}/${ALUNO}/matches`

        axios
            .get(url)
            .then((response) => {
                setMatches(response.data.matches)
                // console.log(response)
            })
            .catch((error) => {
                console.log(error.message)
            })


    }

    const allMatches = matches && matches.map((match) => {
        return (
            <figure key={match.id} >
                <img
                src={match.photo}
                alt={`foto de ${match.name}`}
                height={"32px"}
                >
                </img>
                <span>{match.name}</span>
                <hr/>
            </figure>
        )
    } )

    return (
        <div>
            <h2 className="titulo-match">Matches</h2>
            {allMatches}
        </div>
    )

}

export default MatchesPage;