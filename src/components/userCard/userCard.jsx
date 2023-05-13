import React from "react";
import Button from "../button/button";
import PropTypes from "prop-types";
import "./userCard.css";
import { useHistory } from "react-router-dom";
import FavouriteButton from "../favouriteButton";
// import { parse } from "../../utils/localStorageFavourite";

const UserCard = ({ _id, name, photo, age, about, onClick, isFavourite }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/users");
    };

    return (
        <>
            <div className="style-card">
                <div className="shadow p-3 d-flex">
                    <div className="style-div-image">
                        <img
                            className="style-image"
                            src={photo}
                            alt="MDN logo"
                        />
                    </div>
                    <div className="d-flex flex-column justify-content-between container">
                        <div className="style-content">
                            <div className="style-header-wrapper">
                                <h3>{name}</h3>
                                <FavouriteButton
                                    onClick={() => onClick(_id)}
                                    active={isFavourite}
                                />
                            </div>
                            <h5>Возраст: {age}</h5>
                            <h6>О себе:</h6>
                            <h6>{about}</h6>
                            <Button
                                title="Открыть"
                                onClick={handleClick}
                                className="style-button-wrapper"
                                classNameButton="style-button"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

UserCard.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
    age: PropTypes.string,
    about: PropTypes.string,
    onClick: PropTypes.func,
    isFavourite: PropTypes.bool,
};

export default UserCard;
