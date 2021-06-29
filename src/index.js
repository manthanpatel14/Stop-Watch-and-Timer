import ReactDOM from "react-dom";
import React, {useState} from "react";
import css from './style.css'
import Timer from "./Timer";

function App() {
    const [timers, setTimers] = useState([]);

    const deleteTimer = (id) => {
        setTimers((prevTimers) => prevTimers.filter((timerId) => timerId !== id));
    };

    return (
        <div>
            <h1>Timer App</h1>
            {timers.map((timer) => (
                <Timer key={timer} deleteTimer={deleteTimer} timerId={timer}/>
            ))}
            <button
                className="buttons AddWindow"
                onClick={function () {
                    if (timers.length > 0)
                        setTimers((prevTimer) => [
                            ...prevTimer,
                            prevTimer[prevTimer.length - 1] + 1,
                        ]);
                    else setTimers([1]);
                }}
            >
                Add Timer
            </button>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("App"));
