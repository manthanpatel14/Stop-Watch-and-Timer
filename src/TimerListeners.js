import {MilisecondsToString} from "./MilisecondsToString";

function TimerListeners(NOW) {
    const CurrentTime_TI = document.querySelector(`#Timer${NOW}`); // Timer current time

    let ElapsedTime_TI = 0;
    let StartTime_TI;
    let TimeInterval_TI;

    function StartTimerTI(event) {
        StartTime_TI = Date.now() - ElapsedTime_TI;
        event.target.innerText = `Stop`;
        TimeInterval_TI = setInterval(function printtime() {
            ElapsedTime_TI = Date.now() - StartTime_TI;
            if (300000 - ElapsedTime_TI > 0)
                CurrentTime_TI.innerText = MilisecondsToString(300000 - ElapsedTime_TI);
            else return;
        }, 10);
    }

    function StopTimeTI(event) {
        clearInterval(TimeInterval_TI);
        event.target.innerText = `Start`;
    }

    document
        .querySelector(`.start-stop-TI${NOW}`)
        .addEventListener(`click`, function (event) {
            if (event.target.innerText === `Start`) StartTimerTI(event);
            else StopTimeTI(event);
        });

    document
        .querySelector(`.reset-TI${NOW}`)
        .addEventListener(`click`, function () {
            const StartButton = document.querySelector(`.start-stop-TI${NOW}`);
            CurrentTime_TI.innerText = `5m 00s 00`;
            ElapsedTime_TI = 0;
            clearInterval(TimeInterval_TI);
            StartButton.innerText = `Start`;
        });
}



export {TimerListeners};