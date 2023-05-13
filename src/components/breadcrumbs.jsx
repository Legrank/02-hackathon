import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Breadcrumbs({ pathname }) {
    const segments = pathname === "/" ? [""] : pathname.split("/");
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {segments.map((segment, i) => {
                    const firstUpperCase = (str) =>
                        str[0].toUpperCase() + str.slice(1).toLowerCase();
                    if (segments.length - 1 === i) {
                        return (
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                                key={segment + i}
                            >
                                {segment ? firstUpperCase(segment) : "Главная"}
                            </li>
                        );
                    }
                    return (
                        <li
                            className="breadcrumb-item"
                            aria-current="page"
                            key={segment + i}
                        >
                            <NavLink to={segments.slice(0, i + 1).join("/")}>
                                {segment ? firstUpperCase(segment) : "Главная"}
                            </NavLink>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

Breadcrumbs.propTypes = { pathname: PropTypes.string.isRequired };

export default Breadcrumbs;
