import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import PainelPage from "../pages/Painel";
// import LogoutPage from "../pages/Logout";
// import ErrorPage from "../pages/Error";

const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                    {/* Rotas públicas */}
                    <Route exact path="/" element={<HomePage />}></Route>
                    <Route exact path="/login" element={<LoginPage />}></Route>
                    <Route exact path="/register" element={<RegisterPage />}></Route> 
                    <Route exact path="/painel" element={<PainelPage />}></Route> 
                    {/* <Route exact path="/logout" element={<LogoutPage />}></Route>
                    <Route exact path="/register" element={<RegisterPage />}></Route> */}
                    {/* Rotas de erros */}
                    {/* <Route exact path="*" element={<ErrorPage />}></Route> */}
                </Routes>
        </Router>
    );
}

export default AppRoutes;