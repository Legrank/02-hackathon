import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersSelector, loadUsersList } from "../redux/users";

const WithUsers = (Component) => (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsersList());
    }, []);
    const users = useSelector(getUsersSelector());
    if (users.length === 0) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <Component {...props} />
        </>
    );
};

export default WithUsers;
