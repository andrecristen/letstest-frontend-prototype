import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import PainelPage from "../pages/Painel";
import Dashboard from "../components/Painel/DashboardContent";
import Profile from "../components/Painel/ProfileContent";
import OwnerProjects from "../components/Painel/OwnerProjectsContent";
import TestProjects from "../components/Painel/TestProjectsContent";
import FindProjects from "../components/Painel/FindProjectsContent";
import ManageProject from "../components/Painel/ManageProjectContent";
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
                <Route exact path="/painel" element={<PainelPage><Dashboard /></PainelPage>}></Route>
                <Route exact path="/painel/my-owner-projects" element={<PainelPage><OwnerProjects /></PainelPage>}></Route>
                <Route exact path="/painel/manage-project/:id" element={<PainelPage><ManageProject /></PainelPage>}></Route>
                <Route exact path="/painel/my-test-projects" element={<PainelPage><TestProjects /></PainelPage>}></Route>
                <Route exact path="/painel/find-new-projects" element={<PainelPage><FindProjects /></PainelPage>}></Route>
                <Route exact path="/painel/profile" element={<PainelPage><Profile /></PainelPage>}></Route>
                {/* <Route exact path="/logout" element={<LogoutPage />}></Route>
                {/* Rotas de erros */}
                {/* <Route exact path="*" element={<ErrorPage />}></Route> */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;