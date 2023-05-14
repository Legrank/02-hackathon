import React, { useState, useEffect } from "react";
import { parse, setToggle } from "../../services/localStorage.service";
import UserCard from "../userCard";
import { useSelector } from "react-redux";
import { getUsersSelector } from "../../redux/users";

const FavouriteUsers = () => {
    const users = useSelector(getUsersSelector());

    const [favourite, setFavourite] = useState({});

    useEffect(() => {
        setFavourite(parse() ?? {});
    }, []);

    const handleFavouriteClick = (id) => {
        setFavourite((prevState) => {
            setToggle(id, prevState);
            return { ...prevState, [id]: !prevState[id] };
        });
    };

    const filteredUsers = users
        ? Object.values(users).filter((user) => favourite[user._id])
        : [];

    return (
        <>
            {filteredUsers.length === 0 ? (
                <h5 className="main-title">Список избранного пуст</h5>
            ) : (
                <div>
                    <h5 className="main-title">Список избранного</h5>
                    <div className="user-cards">
                        {filteredUsers.map((user) => (
                            <div key={user.name}>
                                <UserCard
                                    {...user}
                                    onClick={handleFavouriteClick}
                                    isFavourite={favourite[user._id]}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default FavouriteUsers;
