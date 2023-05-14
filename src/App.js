import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import "./App.css";
import NotFound from "./layouts/notFound";
import NavBar from "./components/ui/navBar";
import Breadcrumbs from "./components/ui/breadcrumbs";
import Favorites from "./layouts/favorites";
import ParticipantPage from "./layouts/participantPage";
import Main from "./layouts/main";
import EditUser from "./layouts/editUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const location = useLocation();

    return (
        <>
            <NavBar />
            <Breadcrumbs pathname={location.pathname} />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/404" component={NotFound} />
                <Route
                    path="/users/:userId"
                    exact
                    component={ParticipantPage}
                />
                <Route path="/users/:userId/edit" exact component={EditUser} />
                <Route path="/favorites" exact component={Favorites} />
                <Redirect to="/" />
            </Switch>
            <ToastContainer />
        </>
    );
}

export default App;
