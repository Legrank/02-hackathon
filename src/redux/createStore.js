import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";
import socialReducer from "./social";

const rootReducer = combineReducers({
    users: usersReducer,
    social: socialReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
