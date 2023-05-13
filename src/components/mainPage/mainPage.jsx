import React, { useState } from "react";
import UserCard from "../userCard";
import stacks from "../../api/stacs.json";
import developers from "../../api/developers.json";
import "./mainPage.css";

const MainPage = () => {
    const [users] = useState(developers);

    return (
        <div className="main-page">
            <div>
                <h5 className="main-title">REACT TEAM №1</h5>
                <p className="main-description">
                    Прогрессивная команда амбициозных Junior-frontend
                    разработчиков с большим технологическим стеком исполняющие
                    широкий спектор задач. Наши отличительные особенности
                    высокий профессионализм и серьёзный подход к делу, с высокой
                    степенью ответственности к качеству выполнению задач и их
                    срокам.
                </p>
                <h5 className="main-title">Наш технологический стек</h5>
                <div className="stacks">
                    {stacks.map((stack, index) => (
                        <span key={stack.title}>
                            <a
                                className="stac-a"
                                key={stack.tit}
                                href={stack.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {stack.title}
                            </a>
                            <i
                                className="bi bi-arrow-right-short"
                                hidden={index === stacks.length - 1}
                            ></i>
                        </span>
                    ))}
                </div>
            </div>
            <h5 className="main-title">Наша команда</h5>
            <div className="user-cards">
                {users.map((user) => (
                    <div key={user.name}>
                        <UserCard {...user} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;
