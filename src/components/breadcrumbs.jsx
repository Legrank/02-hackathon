import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUsersById } from "../redux/users";

function Breadcrumbs({ pathname }) {
    const segments = pathname === "/" ? [""] : pathname.split("/");
    const indexBeforeUserId = segments.findIndex(
        (segment) => segment === "users"
    );
    const user = useSelector(getUsersById(segments[indexBeforeUserId + 1]));
    const firstUpperCase = (str) =>
        str[0].toUpperCase() + str.slice(1).toLowerCase();
    const transformSegmrntToDisplayName = (segment) => {
        switch (segment) {
            case "favorites":
                return "Избранное";
            case "users":
                return "Команда";
            case "edit":
                return "Изменение данных";
            default:
                return user ? user.name : firstUpperCase(segment);
        }
    };
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {segments.map((segment, i) => {
                    if (segments.length - 1 === i || segment === "users") {
                        return (
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                                key={segment + i}
                            >
                                {segment
                                    ? transformSegmrntToDisplayName(segment)
                                    : "Главная"}
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
                                {segment
                                    ? transformSegmrntToDisplayName(segment)
                                    : "Главная"}
                            </NavLink>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

Breadcrumbs.propTypes = {
    pathname: PropTypes.string.isRequired,
};

export default Breadcrumbs;
