import RenderTabContent from "./RenderTabContent";
import React, {useRef, useState} from "react";


function Timer({timerId, deleteTimer}) {

    const [tab, setTab] = useState("timer");
    const [timer, setTimer] = useState(300000);
    const [stopWatch, setStopWatch] = useState(0);
    //const [timerInterval, setTimerInterval] = useState(-2);
    const timerInterval = useRef(-2);
    const [stopWatchInterval, setStopWatchInterval] = useState(-2);

    function timerStartStop() {
        if (timerInterval.current > 0) {
            clearInterval(timerInterval.current);
            timerInterval.current = -1;
            console.log(timerInterval.current);
        } else {
            timerInterval.current = setInterval(function () {
                setTimer(prevTimer => prevTimer - 10);
            }, 10);
        }
    }


    function timerReset() {
        setTimer(300000);
        clearInterval(timerInterval.current);
        timerInterval.current = -2;
    }

    function stopWatchStartStop() {
        if (stopWatchInterval > 0) {
            clearInterval(stopWatchInterval);
            setStopWatchInterval(-1);
        } else {
            let setIntervalValue = setInterval(function () {
                setStopWatch(prevTimer => prevTimer + 10);
            }, 10);
            setStopWatchInterval(setIntervalValue);
        }
    }

    function stopWatchReset() {

        setStopWatch(0);
        clearInterval(stopWatchInterval);
        setStopWatchInterval(-2);
    }

    return (
        <div id={timerId}>

            <div className="tab">
                <button className={`${tab === "timer" ? "active" : ""}`} onClick={function () {
                    setTab("timer");
                }}>Timer
                </button>
                <button className={`${tab === "stopWatch" ? "active" : ""}`} onClick={function () {
                    setTab("stopWatch");
                }}>Stop Watch
                </button>
            </div>

            <RenderTabContent displayTime={tab === "timer" ? timer : stopWatch}
                              ToggleTimerOrStopWatch={tab === "timer" ? timerStartStop : stopWatchStartStop}
                              resetTimerOrStopWatch={tab === "timer" ? timerReset : stopWatchReset}
                              startStopButtonInnerText={tab === "timer" ? (timerInterval.current > 0 ? "Stop" : "Start") : (stopWatchInterval > 0 ? "Stop" : "Start")}
            />

            <div className="BottomButtons">
                <button
                    className="buttons "
                    onClick={function () {
                        deleteTimer(timerId);
                    }}
                >Delete Timer
                </button>
            </div>

        </div>
    );
}


export default Timer;