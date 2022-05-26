

export const goToHomePage = (navigate)=> {
    navigate("/")
}

export const goToAdminPage = (navigate)=> {
    navigate("/admin")
}

export const goToTripDetailsPage = (navigate)=> {
    navigate(`/admin/:tripId/details`)
}