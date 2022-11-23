import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage"


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/profile/:name" element={<ProfilePage />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;