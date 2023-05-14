import React from "react";
import PropTypes from "prop-types";

function TextField({ value = "", label, name, onChange, ...rest }) {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="md-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    {...rest}
                />
            </div>
        </div>
    );
}

TextField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

export default React.memo(TextField);
