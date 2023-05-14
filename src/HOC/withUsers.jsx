import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersList } from "../redux/users";
import { loadSocialList } from "../redux/social";

const WithUsers = (Component) => (props) => {
    const dispatch = useDispatch();
    const loadingStatus = useSelector((state) => state.users.isLoading);
    useEffect(() => {
        dispatch(loadUsersList());
        dispatch(loadSocialList());
    }, []);

    if (loadingStatus) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <Component {...props} />
        </>
    );
};

export default WithUsers;
