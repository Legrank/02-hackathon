import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ title, onClick, color, className }) => {
    return (
        <>
            <button
                onClick={onClick}
                style={{ backgroundColor: color }}
                className={`${className || "button"}`}
            >
                {title}
            </button>
        </>
    );
};

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
