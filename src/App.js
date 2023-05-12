import React from "react";
import "./App.css";
import ParticipantPage from "./components/participantPage";

function App() {
    return (
        <>
            <div className="container">
                <div className="App">Hackathon</div>
                <ParticipantPage />
            </div>
        </>
    );
}

export default App;
