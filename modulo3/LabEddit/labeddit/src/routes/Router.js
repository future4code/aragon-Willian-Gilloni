import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import FeedPage from "../pages/FeedPage";
import LoginPage from "../pages/LoginPage";
import PostDetailsPage from "../pages/PostDetailsPage";
import SignupPage from "../pages/SignupPage";


function Router() {

    return (
            <BrowserRouter>
                <Routes>
                    <Route index element={< FeedPage />} />
                    <Route path="/signup" element={< SignupPage />} />
                    <Route path="/login" element={< LoginPage />} />
                    <Route path="/post/:postId" element={< PostDetailsPage />} />
                    <Route path="*" element={< ErrorPage />} />
                </Routes>
            </BrowserRouter>
    );
}

export default Router;