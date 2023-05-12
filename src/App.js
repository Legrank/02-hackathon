import React from "react";
import "./App.css";
import ParticipantPage from "./components/participantPage";

function App() {
    const user = {
        name: "Дмитрий Брижак",
        age: "36",
        photo: "",
        about: "Программированием начал интересоваться лет 5 назад.  Сначала это было просто увлечение, но со временем я понял что это именно то, чем я хочу заниматься. Наблюдать за тем как написанные тобою строчки кода оживают это потрясающе!",
        social: { telegtram: "https://t.me/legrank" },
        tasksDone: "",
        progress: { html: "50%", javaScript: "80%", css: "40%" },
        badge: "Teamlead",
        badgeColor: "primary",
    };

    return (
        <>
            <div className="container">
                <div className="App">Hackathon</div>
                <ParticipantPage user={user} />
            </div>
        </>
    );
}

export default App;
