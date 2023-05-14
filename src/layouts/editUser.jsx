import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getUsersById, updateUser } from "../redux/users";
import {
    SelectField,
    TextField,
    TextareaField,
} from "../components/common/form";
import Button from "../components/button/button";
import { getSocialList } from "../redux/social";
import { nanoid } from "@reduxjs/toolkit";

function EditUser() {
    useEffect(() => {
        console.log("render");
    });
    const handleChange = useCallback((data) => {
        setData((prevState) => ({
            ...prevState,
            [data.name]: data.value,
        }));
    }, []);
    const handleSocialChange = useCallback((data, i) => {
        setData((prevState) => {
            const { social } = prevState;
            const newSocial = [...social];
            newSocial[i] = { ...social[i], ...data };
            return { ...prevState, social: newSocial };
        });
    }, []);
    const handleSocialChangeName = useCallback((data, i) => {
        setData((prevState) => {
            const { social } = prevState;
            const newSocial = [...social];
            newSocial[i] = { ...social[i], name: data.value };
            return { ...prevState, social: newSocial };
        });
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(data));
        history.push(`/users/${userId}`);
    };
    const addSocial = () => {
        setData((prevState) => {
            const { social } = prevState;
            const newSocial = [...social];
            newSocial.push({ name: "whatsapp", value: "", _id: nanoid(6) });
            return {
                ...prevState,
                social: newSocial,
            };
        });
    };
    const deleteSocial = (id) => {
        setData((prevState) => {
            const { social } = prevState;
            const newSocial = [...social];
            newSocial.splice(id, 1);
            return {
                ...prevState,
                social: newSocial,
            };
        });
    };

    const dispatch = useDispatch();
    const { userId } = useParams();
    const history = useHistory();
    const user = useSelector(getUsersById(userId));
    const socialList = useSelector(getSocialList());
    const [data, setData] = useState(user || {});
    return (
        <div className="d-flex justify-content-center">
            <form className="w-75" onSubmit={handleSubmit}>
                <TextField
                    onChange={handleChange}
                    label="Имя"
                    name="name"
                    value={data.name}
                />
                <TextField
                    onChange={handleChange}
                    label="Фотография"
                    name="photo"
                    value={data.photo}
                />
                <TextField
                    onChange={handleChange}
                    label="Badge"
                    name="badge"
                    value={data.badge}
                />
                {data.social &&
                    data.social.map(({ name, value, _id }, i) => (
                        <div key={_id} className="d-flex align-items-baseline">
                            <SelectField
                                options={socialList}
                                label="Выбирите название"
                                name={name}
                                value={name}
                                onChange={(data) =>
                                    handleSocialChangeName(data, i)
                                }
                            />
                            <TextField
                                onChange={(data) => handleSocialChange(data, i)}
                                label="Контакт"
                                name={name}
                                value={value}
                                className="flex-grow-1 ms-2"
                            />
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Закрыть"
                                onClick={() => deleteSocial(i)}
                            ></button>
                        </div>
                    ))}
                <Button type="button" title="Добавить" onClick={addSocial} />

                <TextareaField
                    onChange={handleChange}
                    label="О себе"
                    name="about"
                    value={data.about}
                />
                <TextareaField
                    onChange={handleChange}
                    label="Чем занимался"
                    name="tasksDone"
                    value={data.tasksDone}
                />
                <Button type="submit" title="Сохранить" />
            </form>
        </div>
    );
}

export default EditUser;
