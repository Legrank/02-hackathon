import { createAction, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.service";
import { toast } from "react-toastify";

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
        userUpdate: (state, action) => {
            state.entities[action.payload._id] = action.payload;
        },
        usersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            toast("Loading error. Try again");
        },
        userUpdateRequestFailed: (state, action) => {
            state.error = action.payload;
        },
    },
});

const { reducer: usersReducer, actions } = usersSlice;
const {
    usersRequested,
    usersReceived,
    userUpdate,
    usersRequestFailed,
    userUpdateRequestFailed,
} = actions;
const userUpdateRequested = createAction("user/userUpdateRequest");

export const loadUsersList = () => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const data = await userService.get();
        dispatch(usersReceived(data));
    } catch (error) {
        dispatch(usersRequestFailed(error.message));
    }
};

export const updateUser = (user) => async (dispatch) => {
    dispatch(userUpdateRequested());
    try {
        const data = await userService.update(user);
        dispatch(userUpdate(data));
    } catch (error) {
        dispatch(userUpdateRequestFailed(error.message));
    }
};

// selectors
export const getUsersSelector = () => (state) => {
    const users = state.users.entities;
    return users ? Object.values(users) : [];
};
export const getUsersById = (userId) => (state) => {
    const users = state.users.entities;
    return users ? users[userId] : null;
};
export const getLoadingStatus = () => (state) => state.users.isLoading;

export default usersReducer;
