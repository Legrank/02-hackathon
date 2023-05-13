import React from "react";
import userService from "../services/user.service";

function Main() {
    const handleClick = async () => {
        const data = await userService.getById("nhRt");
        console.log("data", data);
    };
    return (
        <div>
            <button onClick={handleClick}>Создать</button>
        </div>
    );
}

export default Main;
