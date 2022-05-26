import Header from "../components/Header";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import { goToAdminPage } from "../routes/coordinator";
import TripCard from "../components/TripCard"

function HomePage() {

    const navigate = useNavigate()

    const [tripsData] = useRequestData("trips", {})

    useEffect(() => {
        if (localStorage.getItem("token")) {
            goToAdminPage(navigate)
        }
    }, [])

    const tripList = tripsData.trips ? tripsData.trips.map((trip) => {
        return (
            
            <TripCard
                key={trip.id}
                trip={trip}
            />
        )
    }) : <p>carregando...</p>

    return (
        <>
            <Header actualPage={"home-page"} />
            <hr />
            <main>
                <section>
                    <h2>Inscreva-se numa nova viagem!</h2>
                </section>
                <hr />
                <section>
                    <h2>Lista de Viagens</h2>
                    {tripList}
                </section>
            </main>
        </>
    )
}

export default HomePage;