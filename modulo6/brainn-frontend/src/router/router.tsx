import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../page/HomePage"


export const Router = () => {
    return(
        <BrowserRouter>

                <Routes>
                <Route index element={ <HomePage /> } />
                </Routes>

        </BrowserRouter>
    )
} 