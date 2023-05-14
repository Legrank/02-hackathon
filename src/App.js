import React, { useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import "./App.css";
import NotFound from "./layouts/notFound";
import NavBar from "./components/navBar";
import Breadcrumbs from "./components/breadcrumbs";
import Favorites from "./layouts/favorites";
import { useDispatch } from "react-redux";
import { loadUsersList } from "./redux/users";
import ParticipantPage from "./layouts/participantPage";
import Main from "./layouts/main";
import EditUser from "./layouts/editUser";
import { loadSocialList } from "./redux/social";

function App() {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(loadUsersList());
        dispatch(loadSocialList());
    }, []);

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
                <Redirect to="/404" />
            </Switch>
        </>
    );
}

export default App;
