import React, { useState } from "react";
import PropTypes from "prop-types";
import ProgressBar from "../components/ui/progressBar";
import { pickIcon } from "../utils/pickIcon";
import { useSelector } from "react-redux";
import { getUsersById } from "../redux/users";
import { useHistory, useLocation, useParams } from "react-router";
import Button from "../components/common/button";
import { parse, setToggle } from "../services/localStorage.service";

const ParticipantPage = () => {
    const favourite = parse() || {};
    const { userId } = useParams();
    const [isFavourite, setFavourite] = useState(
        favourite ? favourite[userId] : false
    );
    const handleClick = () => {
        history.push(`${location.pathname}/edit`);
    };
    const getClasses = () => {
        return isFavourite ? " favorite" : "style-button";
    };
    const getTitle = () => {
        return isFavourite ? "Удалить с избранного" : "Добавить в избранное";
    };
    const toggleFav = (id) => {
        setFavourite((prev) => !prev);
        setToggle(id, favourite);
    };
    const history = useHistory();
    const location = useLocation();
    const user = useSelector(getUsersById(userId));
    if (!user) return "Загрузка";
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
                        src={user.photo || IMG_URL}
                        width="400px"
                        height="700px"
                        alt="pizza"
                    />
                </div>
                <div className="d-flex flex-column justify-content-between container">
                    <div>
                        <Button
                            onClick={() => toggleFav(userId)}
                            title={getTitle()}
                            className="style-button-wrapper"
                            classNameButton={getClasses()}
                        />
                        <h1 className="display-1 md-4">{user.name}</h1>
                        <h3>Возраст: {user.age}</h3>
                        <h4>О себе:</h4>
                        <h5>{user.about}</h5>
                        <h4>Чем занимался в разработке проекта:</h4>
                        <h5>{user.tasksDone}</h5>
                        <div className="md-4">
                            <h2>Socialmedia links:</h2>
                            {user.social &&
                                user.social.map(({ _id, value, name }) => {
                                    return name === "vk" ? (
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            key={_id}
                                            href={value}
                                        >
                                            <h1>{name}</h1>
                                        </a>
                                    ) : (
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            key={_id}
                                            href={value}
                                        >
                                            <h1>
                                                <i
                                                    className={`${pickIcon(
                                                        name
                                                    )}`}
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
                    {user.badge && (
                        <div>
                            <h1>
                                <span className={`badge bg-secondary`}>
                                    {user.badge}
                                </span>
                            </h1>
                        </div>
                    )}
                    <Button title="Изменить" onClick={handleClick} />
                </div>
            </div>
        </>
    );
};

ParticipantPage.propTypes = {
    user: PropTypes.object,
};

export default ParticipantPage;
