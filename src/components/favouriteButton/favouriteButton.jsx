import React from "react";
import PropTypes from "prop-types";

const FavouriteButton = ({ onClick, active }) => {
    return (
        <>
            {active ? (
                <i onClick={onClick} className="bi bi-bookmark-fill"></i>
            ) : (
                <i onClick={onClick} className="bi bi-bookmark"></i>
            )}
        </>
    );
};

FavouriteButton.propTypes = {
    onClick: PropTypes.func,
    active: PropTypes.bool,
};

export default FavouriteButton;
