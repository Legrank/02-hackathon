import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.service";

const initialState = {
    entities: null,
    isLoading: true,
    error: null,
    dataLoaded: false,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        usersRequested: (state) => {
            state.isLoading = true;
        },
        usersReceived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        usersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

const { reducer: usersReducer, actions } = usersSlice;
const { usersRequested, usersReceived, usersRequestFailed } = actions;

export const loadUsersList = () => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const data = await userService.get();
        dispatch(usersReceived(data));
    } catch (error) {
        dispatch(usersRequestFailed(error.message));
    }
};

// selectors
export const getUsersSelector = () => (state) => {
    const users = state.users.entities;
    return users ? Object.values(users) : [];
};
export const getUsersById = (userId) => (state) => {
    return state.users.entities ? state.users.entities[userId] : null;
};
export const getLoadingStatus = () => (state) => state.users.isLoading;

export default usersReducer;
