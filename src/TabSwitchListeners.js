import {clickHandle} from "./clickHandle";

function TabSwitchListeners(NOW) {
    document.getElementById(`TimerTab${NOW}`).addEventListener("click", function (event) {
        clickHandle(event, `Timer${NOW}`, `TBStart${NOW}`, `TBStop${NOW}`, `HideTabs${NOW}`, `tablinks${NOW}`);
    });

    document.getElementById(`StopWatchTab${NOW}`).addEventListener("click", function (event) {
        clickHandle(event, `StopWatch${NOW}`, `SWBStart${NOW}`, `SWBStop${NOW}`, `HideTabs${NOW}`, `tablinks${NOW}`);
    });
}

export {TabSwitchListeners};