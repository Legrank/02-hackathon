import { createSlice } from "@reduxjs/toolkit";
import socialService from "../services/social.service";

const initialState = {
    entities: [],
    isLoading: true,
    error: null,
};

const socialSlice = createSlice({
    name: "social",
    initialState,
    reducers: {
        socialRequested: (state) => {
            state.isLoading = true;
        },
        socialReceived: (state, action) => {
            state.entities = action.payload || [];
            state.isLoading = false;
        },
        socialRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

const { reducer: socialReducer, actions } = socialSlice;
const { socialRequested, socialReceived, socialRequestFailed } = actions;

export const loadSocialList = () => async (dispatch) => {
    dispatch(socialRequested());
    try {
        const data = await socialService.get();
        dispatch(socialReceived(data));
    } catch (error) {
        dispatch(socialRequestFailed(error.message));
    }
};

// selectors
export const getSocialList = () => (state) => state.social.entities;
export const getSocialLoadingStatus = () => (state) => state.social.isLoading;

export default socialReducer;
