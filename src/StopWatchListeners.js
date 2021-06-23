import {MilisecondsToString} from "./MilisecondsToString";

function StopWatchListeners(NOW) {
    const CurrentTime_SW = document.querySelector(`#StopWatch${NOW}`);

    let ElapsedTime_SW = 0;
    let StartTime_SW;
    let TimeInterval_SW;

    function StartTimerSW(event) {
        StartTime_SW = Date.now() - ElapsedTime_SW;
        event.target.innerText = `Stop`;
        TimeInterval_SW = setInterval(function printtime() {
            ElapsedTime_SW = Date.now() - StartTime_SW;
            CurrentTime_SW.innerText = MilisecondsToString(ElapsedTime_SW);
        }, 10);
    }

    function StopTimeSW(event) {
        clearInterval(TimeInterval_SW);
        event.target.innerText = `Start`;
    }

    document
        .querySelector(`.start-stop-SW${NOW}`)
        .addEventListener(`click`, function (event) {
            if (event.target.innerText === `Start`) StartTimerSW(event);
            else StopTimeSW(event);
        });

    document
        .querySelector(`.reset-SW${NOW}`)
        .addEventListener(`click`, function () {
            const StartButton = document.querySelector(`.start-stop-SW${NOW}`);
            CurrentTime_SW.innerText = `0s 00`;
            ElapsedTime_SW = 0;
            clearInterval(TimeInterval_SW);
            StartButton.innerText = `Start`;
        });

}

export {StopWatchListeners};