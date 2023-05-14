import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import "./App.css";
import NotFound from "./layouts/notFound";
import NavBar from "./components/navBar";
import Breadcrumbs from "./components/breadcrumbs";
import Favorites from "./layouts/favorites";
import ParticipantPage from "./layouts/participantPage";
import Main from "./layouts/main";

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
                <Route path="/favorites" exact component={Favorites} />
                <Redirect to="/404" />
            </Switch>
        </>
    );
}

export default App;
