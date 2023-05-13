import React from "react";
import Button from "../components/button/button";
import PropTypes from "prop-types";
import "./mainPage.css";
import { useHistory } from "react-router-dom";

const UserCard = ({ name, photo, age, about }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/users");
    };
    const handleFavouriteClick = () => {
        console.log("Add to favourite");
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
                                <i
                                    onClick={handleFavouriteClick}
                                    className="bi bi-bookmark-fill"
                                ></i>
                            </div>
                            <h5>Возраст: {age}</h5>
                            <h6>О себе:</h6>
                            <h6>{about}</h6>
                            <Button
                                title="Открыть"
                                onClick={handleClick}
                                className="style-button"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
UserCard.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    age: PropTypes.string,
    about: PropTypes.string,
};

export default UserCard;
