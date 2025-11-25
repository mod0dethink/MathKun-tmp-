import { Route, Routes } from "react-router-dom";
import HandwritingCanvas from "./components/HandwritingCanvas";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";

export const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={<HandwritingCanvas />} />
        </Routes>
    )
}

export default Router;
