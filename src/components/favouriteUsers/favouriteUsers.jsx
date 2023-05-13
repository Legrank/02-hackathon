import React, { useState, useEffect } from "react";
import { parse } from "../../utils/localStorageFavourite";
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
            const prevLS = parse() ?? {};
            localStorage.setItem(
                "favourite",
                JSON.stringify({ ...prevLS, [id]: !prevState[id] })
            );
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
            )}
        </>
    );
};

export default FavouriteUsers;
