import {NewWindowHTML} from './NewWindowHTML.js';
import {TabSwitchListeners} from './TabSwitchListeners.js'
import {StopWatchListeners} from './StopWatchListeners.js'
import {TimerListeners} from './TimerListeners.js'

let NumberOfWindows = 0;

function initializeTimerInstance() {

    NumberOfWindows++;

    NewWindowHTML(NumberOfWindows);

    TabSwitchListeners(NumberOfWindows);

    StopWatchListeners(NumberOfWindows);

    TimerListeners(NumberOfWindows);
    document.getElementById(`TimerTab${NumberOfWindows}`).click(); // default tab selection (I am taking Timer as a default tab currently)

}

document
    .getElementById("AddWindow")
    .addEventListener(`click`, initializeTimerInstance); // Add a new window