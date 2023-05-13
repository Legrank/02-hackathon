import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "./progressBar";

const ParticipantPage = ({ user }) => {
    // ссылка-затычка
    const IMG_URL =
        "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    return (
        <>
            <h1 className=" md-4">Карточка участника</h1>
            <div className="d-flex">
                <div>
                    <img
                        src={IMG_URL}
                        width="400px"
                        height="700px"
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
                                return (
                                    <a key={key} href={user.social[key]}>
                                        <h3>{key}</h3>
                                    </a>
                                );
                            })}
                        </div>
                        <div className="md-4">
                            <h4>Прогресс изучения технологий:</h4>
                            <ProgressBar
                                name="HTML"
                                value={user.progress.html}
                                color="green"
                            />
                            <ProgressBar
                                name="JavaScript"
                                value={user.progress.javaScript}
                                color="red"
                            />
                            <ProgressBar
                                name="CSS"
                                value={user.progress.css}
                                color="yellow"
                            />
                        </div>
                    </div>

                    <div>
                        <h1>
                            <span className={`badge bg-${user.badgeColor}`}>
                                Teamlead
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
