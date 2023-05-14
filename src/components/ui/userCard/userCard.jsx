import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../../common/button";
import "./userCard.css";

const UserCard = ({ _id, name, photo, age, about, onClick, isFavourite }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/users/${_id}`);
    };
    const getClasses = () => {
        return isFavourite ? " favorite" : "style-button";
    };
    const getTitle = () => {
        return isFavourite ? "Удалить с избранного" : "Добавить в избранное";
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
                            </div>
                            <h5>Возраст: {age}</h5>
                            <h6>О себе:</h6>
                            <h6>{about}</h6>
                            <div className="style-buttons">
                                <Button
                                    onClick={() => onClick(_id)}
                                    title={getTitle()}
                                    className="style-button-wrapper"
                                    classNameButton={getClasses()}
                                />
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
