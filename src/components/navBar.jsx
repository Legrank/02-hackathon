import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const renderLink = ({ path, name }) => (
        <li className="nav-item" key={path}>
            <Link
                className={`nav-link ${isActive(path) ? "active" : ""}`}
                to={path}
            >
                {name}
            </Link>
        </li>
    );
    const links = [
        { path: "/", name: "Главная" },
        { path: "/favorites", name: "Избранное" },
    ];
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <ul className="nav nav-pills mb-3">
                    {links.map((link) => renderLink(link))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
