import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import Breadcrumbs from "./components/breadcrumbs";
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

                <Route
                    path="/users/:userId"
                    exact
                    component={ParticipantPage}
                />
                <Route path="/users/:userId/edit" exact component={EditUser} />
                <Route path="/favorites" exact component={Favorites} />
            </Switch>
            <ToastContainer />
        </>
    );
}

export default App;
