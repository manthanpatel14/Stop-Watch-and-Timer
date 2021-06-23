function NewWindowHTML(NOW) {
    const ButtonDiv = document.body;
    var Window = document.createElement(`div`);
    Window.setAttribute(`class`, `Window${NOW}`);

    Window.innerHTML = `<div class="tab">
        <button class="tablinks${NOW}" id="TimerTab${NOW}">Timer</button>
        <button class="tablinks${NOW}" id="StopWatchTab${NOW}">Stop Watch</button>
      </div>
    
      <div id="Timer${NOW}" class="tabcontent HideTabs${NOW}">
        5m 00s 00
      </div>
    
      <div id="StopWatch${NOW}" class="tabcontent HideTabs${NOW}">
        0s 00
      </div>
    
      <div class="BottomButtons">
          <button id="SWBStart${NOW}" class="HideTabs${NOW} buttons start-stop-SW${NOW}">Start</button>
          <button id="SWBStop${NOW}" class="HideTabs${NOW} buttons reset-SW${NOW}">Reset</button>
          <button id="TBStart${NOW}" class="HideTabs${NOW} buttons start-stop-TI${NOW}">Start</button>
          <button id="TBStop${NOW}" class="HideTabs${NOW} buttons reset-TI${NOW}">Reset</button>
      </div>`

    ButtonDiv.insertBefore(Window, document.getElementById("AddWindow"));
}

export {NewWindowHTML};
