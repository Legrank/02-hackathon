import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./mainPage.css";
import UserCard from "../../ui/userCard";
import { getUsersSelector } from "../../../redux/users";
import { parse, setToggle } from "../../../services/localStorage.service";

const stacks = [
    { title: "JavaScript", href: "https://learn.javascript.ru/" },
    { title: "HTML", href: "https://developer.mozilla.org/ru/docs/Web/HTML" },
    { title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { title: "React.js", href: "https://react.dev/" },
    { title: "React Router v5/v6", href: "https://reactrouter.com/en/main" },
    { title: "GIT", href: "https://git-scm.com/" },
    { title: "Node.js", href: "https://nodejs.org/ru" },
    { title: "Bootstrap", href: "https://getbootstrap.com/" },
    { title: "Redux", href: "https://redux.js.org/" },
    { title: "Redux Toolkit", href: "https://redux-toolkit.js.org/" },
    { title: "Webpack", href: "https://webpack.js.org/" },
    { title: "Rollup", href: "https://rollupjs.org/" },
    { title: "Firebase", href: "https://firebase.google.com/" },
];

const MainPage = () => {
    const users = useSelector(getUsersSelector());

    const [favourite, setFavourite] = useState({});

    useEffect(() => {
        setFavourite(parse() ?? {});
    }, []);

    const handleFavouriteClick = (id) => {
        setFavourite((prevState) => {
            setToggle(id, prevState);
            return { ...prevState, [id]: !prevState[id] };
        });
    };

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
                {users &&
                    Object.values(users).map((user) => (
                        <div key={user.name}>
                            <UserCard
                                {...user}
                                onClick={handleFavouriteClick}
                                isFavourite={favourite[user._id]}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MainPage;
