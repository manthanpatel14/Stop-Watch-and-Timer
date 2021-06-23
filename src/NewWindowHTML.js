function NewWindowHTML(NOF) {
    const ButtonDiv = document.body;
    var Window = document.createElement(`div`);
    Window.setAttribute(`class`, `Window${NOF}`);

    Window.innerHTML = `<div class="tab">
        <button class="tablinks${NOF}" id="TimerTab${NOF}">Timer</button>
        <button class="tablinks${NOF}" id="StopWatchTab${NOF}">Stop Watch</button>
      </div>
    
      <div id="Timer${NOF}" class="tabcontent HideTabs${NOF}">
        5m 00s 00
      </div>
    
      <div id="StopWatch${NOF}" class="tabcontent HideTabs${NOF}">
        0s 00
      </div>
    
      <div class="BottomButtons">
          <button id="SWBStart${NOF}" class="HideTabs${NOF} buttons start-stop-SW${NOF}">Start</button>
          <button id="SWBStop${NOF}" class="HideTabs${NOF} buttons reset-SW${NOF}">Reset</button>
          <button id="TBStart${NOF}" class="HideTabs${NOF} buttons start-stop-TI${NOF}">Start</button>
          <button id="TBStop${NOF}" class="HideTabs${NOF} buttons reset-TI${NOF}">Reset</button>
      </div>`

    ButtonDiv.insertBefore(Window, document.getElementById("AddWindow"));
}

export {NewWindowHTML};
