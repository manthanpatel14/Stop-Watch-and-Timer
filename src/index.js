function clickHandle(evt, tabName, BIDStart, BIDStop, HideTabs, HideLinks) {
    // Function for switching tabs
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName(HideTabs); // Hidetabs is the class name for tab contains and buttons
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = `none`;
    }

    tablinks = document.getElementsByClassName(HideLinks);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(` active`, ``); // Both the tabs are inactive
    }
    document.getElementById(tabName).style.display = `block`; // hide tabcontent here

    document.getElementById(BIDStart).style.display = `block`;

    document.getElementById(BIDStop).style.display = `block`;

    evt.currentTarget.className += ` active`; // setting current tab active
}

//window.clickHandle = clickHandle;

function MilisecondsToString(ElsTime) {
    let days = Math.floor(ElsTime / 86400000);
    ElsTime = ElsTime % 86400000;

    let hrs = Math.floor(ElsTime / 3600000);
    ElsTime = ElsTime % 3600000;

    let mins = Math.floor(ElsTime / 60000);
    ElsTime = ElsTime % 60000;

    let secs = Math.floor(ElsTime / 1000);
    ElsTime = ElsTime % 1000;

    var ReturnString = "";
    if (days > 0) {
        ReturnString += `${days}d `;
    }
    if (hrs > 0) {
        ReturnString += `${hrs}h `;
    }
    if (mins > 0) {
        ReturnString += `${mins}m `;
    }
    if (secs > 0) {
        ReturnString += `${secs}s `;
    }

    ReturnString += `${ElsTime}`;

    return ReturnString;
}

let NumberOfWindows = 0;
const ButtonDiv = document.body;

function NewWindowHTML() {

    var Window = document.createElement(`div`);
    Window.setAttribute(`class`, `Window${NumberOfWindows}`);

    Window.innerHTML = `<div class="tab">
        <button class="tablinks${NumberOfWindows}" id="TimerTab${NumberOfWindows}">Timer</button>
        <button class="tablinks${NumberOfWindows}" id="StopWatchTab${NumberOfWindows}">Stop Watch</button>
      </div>
    
      <div id="Timer${NumberOfWindows}" class="tabcontent HideTabs${NumberOfWindows}">
        5m 00s 00
      </div>
    
      <div id="StopWatch${NumberOfWindows}" class="tabcontent HideTabs${NumberOfWindows}">
        0s 00
      </div>
    
      <div class="BottomButtons">
          <button id="SWBStart${NumberOfWindows}" class="HideTabs${NumberOfWindows} buttons start-stop-SW${NumberOfWindows}">Start</button>
          <button id="SWBStop${NumberOfWindows}" class="HideTabs${NumberOfWindows} buttons reset-SW${NumberOfWindows}">Reset</button>
          <button id="TBStart${NumberOfWindows}" class="HideTabs${NumberOfWindows} buttons start-stop-TI${NumberOfWindows}">Start</button>
          <button id="TBStop${NumberOfWindows}" class="HideTabs${NumberOfWindows} buttons reset-TI${NumberOfWindows}">Reset</button>
      </div>`

    ButtonDiv.insertBefore(Window, document.getElementById("AddWindow"));
}

function TabSwitchListeners() {
    document.getElementById(`TimerTab${NumberOfWindows}`).addEventListener("click", function (event) {
        clickHandle(event, `Timer${NumberOfWindows}`, `TBStart${NumberOfWindows}`, `TBStop${NumberOfWindows}`, `HideTabs${NumberOfWindows}`, `tablinks${NumberOfWindows}`);
    });

    document.getElementById(`StopWatchTab${NumberOfWindows}`).addEventListener("click", function (event) {
        clickHandle(event, `StopWatch${NumberOfWindows}`, `SWBStart${NumberOfWindows}`, `SWBStop${NumberOfWindows}`, `HideTabs${NumberOfWindows}`, `tablinks${NumberOfWindows}`);
    });
}

function StopWatchListeners() {
    const CurrentTime_SW = document.querySelector(`#StopWatch${NumberOfWindows}`);

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
        .querySelector(`.start-stop-SW${NumberOfWindows}`)
        .addEventListener(`click`, function (event) {
            if (event.target.innerText === `Start`) StartTimerSW(event);
            else StopTimeSW(event);
        });

    document
        .querySelector(`.reset-SW${NumberOfWindows}`)
        .addEventListener(`click`, function () {
            const StartButton = document.querySelector(`.start-stop-SW${NumberOfWindows}`);
            CurrentTime_SW.innerText = `0s 00`;
            ElapsedTime_SW = 0;
            clearInterval(TimeInterval_SW);
            StartButton.innerText = `Start`;
        });

}


function TimerListeners() {
    const CurrentTime_TI = document.querySelector(`#Timer${NumberOfWindows}`); // Timer current time

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
        .querySelector(`.start-stop-TI${NumberOfWindows}`)
        .addEventListener(`click`, function (event) {
            if (event.target.innerText === `Start`) StartTimerTI(event);
            else StopTimeTI(event);
        });

    document
        .querySelector(`.reset-TI${NumberOfWindows}`)
        .addEventListener(`click`, function () {
            const StartButton = document.querySelector(`.start-stop-TI${NumberOfWindows}`);
            CurrentTime_TI.innerText = `5m 00s 00`;
            ElapsedTime_TI = 0;
            clearInterval(TimeInterval_TI);
            StartButton.innerText = `Start`;
        });
}

function initializeTimerInstance() {

    NumberOfWindows++;

    NewWindowHTML();

    TabSwitchListeners();

    StopWatchListeners();

    TimerListeners();
    document.getElementById(`TimerTab${NumberOfWindows}`).click(); // default tab selection (I am taking Timer as a default tab currently)

}

document
    .getElementById("AddWindow")
    .addEventListener(`click`, initializeTimerInstance); // Add a new window


// Code for NewWindowHTML() function using createElement functions of javascript
// To use this, replace NewWindowHTML() code with below one

/*
var Window = document.createElement(`div`);
Window.setAttribute(`class`, `Window${NumberOfWindows}`);

var tagTab = document.createElement(`div`);
tagTab.setAttribute(`class`, `tab`);

var tagTablink = document.createElement(`button`);
tagTablink.setAttribute(`class`, `tablinks${NumberOfWindows}`);
tagTablink.setAttribute(`id`, `default${NumberOfWindows}`);
tagTablink.setAttribute(
  `onclick`,
  `clickHandle(event, "Timer${NumberOfWindows}","TBStart${NumberOfWindows}","TBStop${NumberOfWindows}","HideTabs${NumberOfWindows}","tablinks${NumberOfWindows}")`
);
tagTablink.appendChild(document.createTextNode(`Timer ${NumberOfWindows}`));

tagTab.appendChild(tagTablink);

var tagtablink2 = document.createElement(`button`);
tagtablink2.setAttribute(`class`, `tablinks${NumberOfWindows}`);
tagtablink2.setAttribute(
  `onclick`,
  `clickHandle(event, "StopWatch${NumberOfWindows}","SWBStart${NumberOfWindows}","SWBStop${NumberOfWindows}","HideTabs${NumberOfWindows}","tablinks${NumberOfWindows}")`
);
tagtablink2.appendChild(document.createTextNode(`Stop Watch ${NumberOfWindows}`));

tagTab.appendChild(tagtablink2);

Window.appendChild(tagTab);

var tagTimer = document.createElement(`div`);
tagTimer.setAttribute(`id`, `Timer${NumberOfWindows}`);
tagTimer.setAttribute(`class`, `tabcontent HideTabs${NumberOfWindows}`);
tagTimer.appendChild(document.createTextNode(`5m 00s 00`));

Window.appendChild(tagTimer);

var tagSW = document.createElement(`div`);
tagSW.setAttribute(`id`, `StopWatch${NumberOfWindows}`);
tagSW.setAttribute(`class`, `tabcontent HideTabs${NumberOfWindows}`);
tagSW.appendChild(document.createTextNode(`0s 00`));

Window.appendChild(tagSW);

var tagBottom = document.createElement(`div`);
tagBottom.setAttribute(`class`, `BottomButtons`);

var StartSW = document.createElement(`button`);
StartSW.setAttribute(`id`, `SWBStart${NumberOfWindows}`);
StartSW.setAttribute(
  `class`,
  `HideTabs${NumberOfWindows} buttons start-stop-SW${NumberOfWindows}`
);
StartSW.appendChild(document.createTextNode(`Start`));
tagBottom.appendChild(StartSW);

var StopSW = document.createElement(`button`);
StopSW.setAttribute(`id`, `SWBStop${NumberOfWindows}`);
StopSW.setAttribute(
  `class`,
  `HideTabs${NumberOfWindows} buttons reset-SW${NumberOfWindows}`
);
StopSW.appendChild(document.createTextNode(`Reset`));
tagBottom.appendChild(StopSW);

var StartTI = document.createElement(`button`);
StartTI.setAttribute(`id`, `TBStart${NumberOfWindows}`);
StartTI.setAttribute(
  `class`,
  `HideTabs${NumberOfWindows} buttons start-stop-TI${NumberOfWindows}`
);
StartTI.appendChild(document.createTextNode(`Start`));
tagBottom.appendChild(StartTI);

var StopTI = document.createElement(`button`);
StopTI.setAttribute(`id`, `TBStop${NumberOfWindows}`);
StopTI.setAttribute(
  `class`,
  `HideTabs${NumberOfWindows} buttons reset-TI${NumberOfWindows}`
);
StopTI.appendChild(document.createTextNode(`Reset`));
tagBottom.appendChild(StopTI);

Window.appendChild(tagBottom);

ButtonDiv.insertBefore(Window, AddWindow);*/

  
  