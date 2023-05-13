import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ title, onClick, color, className, classNameButton }) => {
    return (
        <div className={className}>
            <button
                onClick={onClick}
                style={{ backgroundColor: color }}
                className={`${classNameButton} button`}
            >
                {title}
            </button>
        </div>
    );
};

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string,
    className: PropTypes.string,
    classNameButton: PropTypes.string,
};

export default Button;
