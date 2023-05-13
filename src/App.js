import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import "./App.css";
import NotFound from "./layouts/notFound";
import NavBar from "./components/navBar";
import Main from "./layouts/main";
import Test1 from "./layouts/test1";
import Breadcrumbs from "./components/breadcrumbs";
import Test2 from "./layouts/test2";
import Favorites from "./layouts/favorites";

function App() {
    const location = useLocation();
    return (
        <>
            <NavBar />
            <Breadcrumbs pathname={location.pathname} />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/404" component={NotFound} />
                <Route path="/users" exact component={Test1} />
                <Route path="/favorites" exact component={Favorites} />
                <Route path="/users/test" component={Test2} />
                <Redirect to="/404" />
            </Switch>
        </>
    );
}

export default App;
