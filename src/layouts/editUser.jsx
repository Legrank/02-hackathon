import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUsersById } from "../redux/users";
import { TextField, TextareaField } from "../components/common/form";
import Button from "../components/button/button";
import userService from "../services/user.service";

function EditUser() {
    const handleChange = useCallback((data) => {
        setData((prevState) => ({
            ...prevState,
            [data.name]: data.value,
        }));
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        userService.update(data);
    };
    const { userId } = useParams();
    const user = useSelector(getUsersById(userId));
    const [data, setData] = useState(user || {});
    return (
        <form onSubmit={handleSubmit}>
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
                label="Заметка"
                name="badge"
                value={data.badge}
            />
            <TextareaField
                onChange={handleChange}
                label="О себе"
                name="about"
                value={data.about}
            />
            <Button type="submit" title="Сохранить" />
        </form>
    );
}

export default EditUser;
