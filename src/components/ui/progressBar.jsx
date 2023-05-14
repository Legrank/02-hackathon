import React from "react";
import PropTypes from "prop-types";
import { pickColor } from "../../utils/pickColor";

const ProgressBar = ({ value, color, name }) => {
    return (
        <div className="progress" style={{ height: "30px" }}>
            <div
                className={`progress-bar progress-bar-striped progress-bar-animated${pickColor(
                    color
                )}`}
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: value }}
            >
                {name}
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    value: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string,
};

export default ProgressBar;
