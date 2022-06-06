import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import FeedPage from "../pages/FeedPage";
import LoginPage from "../pages/LoginPage";
import DetailsPage from "../pages/PostDetailsPage";
import SignupPage from "../pages/SignupPage";


function Router() {

    return (
            <BrowserRouter>
                <Routes>
                    <Route index element={< FeedPage />} />
                    <Route path="/signup" element={< SignupPage />} />
                    <Route path="/login" element={< LoginPage />} />
                    <Route path="/post/:postId" element={< DetailsPage />} />
                    <Route path="*" element={< ErrorPage />} />
                </Routes>
            </BrowserRouter>
    );
}

export default Router;