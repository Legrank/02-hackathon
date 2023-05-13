import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.service";

const initialState = {
    entities: null,
    isLoading: true,
    error: null,
    dataLoaded: false,
    currentUser: null,
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
export const getUsersSelector = () => (state) => state.users.entities;

export default usersReducer;
