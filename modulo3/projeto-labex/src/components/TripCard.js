import { useNavigate } from "react-router-dom"
import { goToTripDetailsPage } from "../routes/coordinator"

function TripCard(props) {

    const navigate = useNavigate()
    const{id, name , description , planet, durationDays,date} = props.trip
    const token = localStorage.getItem("token")

    return (
        <main>
            <p><b>Nome:</b>{name}</p>
            <p><b>Descrição:</b>{description}</p>
            <p><b>Planeta:</b>{planet}</p>
            <p><b>Duração:</b>{durationDays}</p>
            <p><b>Data:</b>{date}</p>
        

        {token && (
            <section>
            <button onClick={()=> goToTripDetailsPage(navigate, id)}>Exibir detalhes</button>
            <button onClick={()=> props.removeTrip(id)} >Excluir viagem</button>
            </section>
        )}
        <hr/>
        </main>
    )
}

export default TripCard