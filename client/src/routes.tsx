import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HandwritingCanvas from './components/HandwritingCanvas';

export const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HandwritingCanvas />} />
        </Routes>
    )
}

export default Router;