import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ value, color, name }) => {
  const pickColor = (color) => {
    switch (color) {
      case "green":
        return " bg-success";
      case "cyan":
        return " bg-info";
      case "yellow":
        return " bg-warning";
      case "red":
        return " bg-danger";
      default:
        return "";
    }
  };

  return (
    <div className="progress">
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
