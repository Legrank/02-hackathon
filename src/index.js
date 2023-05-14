import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "react-router-dom";
import "./index.css";
import history from "./utils/history";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "./redux/createStore";
import WithUsers from "./HOC/withUsers";

const store = createStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
const AppWithUsers = WithUsers(App);

root.render(
    <Router history={history}>
        <React.StrictMode>
            <Provider store={store}>
                <AppWithUsers />
            </Provider>
        </React.StrictMode>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
