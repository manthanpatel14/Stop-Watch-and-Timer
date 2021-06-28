import ReactDOM from "react-dom";
import React, {useState, useEffect, useRef} from "react";
import css from './style.css'

function Timer({timerid, DeleteTimer}) {

    const [timer, setTimer] = useState(0);
    const interval = useRef(null);


    useEffect(function () {
        interval.current = setInterval(function () {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);

        return () => {
             clearInterval(interval.current);
        }
    }, []);
    return (
        <div id={timerid}>
            <div className="tabcontent">{timer}</div>

            <div className="BottomButtons">
            <button
                className="buttons "
                onClick={function () {
                    DeleteTimer(timerid);
                }}
            >
                Delete Timer
            </button>
        </div>
</div>
);
}

function App() {
    const [timers, setTimers] = useState([]);

    const DeleteTimer = (id) => {
        setTimers((prevTimers) => prevTimers.filter((timerId) => timerId !== id));
    };

    return (
        <div>
            <h1>Timer App</h1>
            {timers.map((timer) => (
                <Timer key={timer} DeleteTimer={DeleteTimer} timerid={timer}/>
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
