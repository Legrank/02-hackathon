/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "./progressBar";
import { pickIcon } from "../utils/pickIcon";

const ParticipantPage = ({ user }) => {
    const pickColorForTech = (technology) => {
        const colors = ["green", "primary", "yellow", "red", "cyan"];
        switch (technology) {
            case "html":
                return colors[0];
            case "react":
                return colors[1];
            case "css":
                return colors[2];
            case "javaScript":
                return colors[3];
            case "nodejs":
                return colors[4];
            default:
                return colors[Math.round(Math.random() * 5)];
        }
    };
    // ссылка-затычка
    const IMG_URL =
        "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    return (
        <>
            <h1 className="md-4">Карточка участника</h1>
            <div className="shadow p-4 d-flex">
                <div>
                    <img
                        src={IMG_URL}
                        width="400px"
                        heigth="700px"
                        alt="pizza"
                    />
                </div>
                <div className="d-flex flex-column justify-content-between container">
                    <div>
                        <h1 className="display-1 md-4">{user.name}</h1>
                        <h3>Возраст: {user.age}</h3>
                        <h4>О себе:</h4>
                        <h5>{user.about}</h5>
                        <div className="md-4">
                            <h2>Socialmedia links:</h2>
                            {Object.keys(user.social).map((key) => {
                                return key === "vk" ? (
                                    <a
                                        target="_blank"
                                        key={key}
                                        href={user.social[key]}
                                    >
                                        <h1>{key}</h1>
                                    </a>
                                ) : (
                                    <a
                                        target="_blank"
                                        key={key}
                                        href={user.social[key]}
                                    >
                                        <h1>
                                            <i
                                                className={`${pickIcon(key)}`}
                                                aria-hidden="true"
                                            />
                                        </h1>
                                    </a>
                                );
                            })}
                        </div>
                        <div className="md-4">
                            <h4>Прогресс изучения технологий:</h4>
                            {Object.keys(user.progress).map((key) => {
                                return (
                                    <ProgressBar
                                        key={key}
                                        name={key}
                                        value={user.progress[key]}
                                        color={pickColorForTech(key)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <h1>
                            <span className={`badge bg-${user.badgeColor}`}>
                                {user.badge}
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

ParticipantPage.propTypes = {
    user: PropTypes.object,
};

export default ParticipantPage;
