import milisecondsToString from "./milisecondsToString";
import React, {useState, useRef} from "react";


function RenderTabContent({
                              displayTime,
                              ToggleTimerOrStopWatch,
                              resetTimerOrStopWatch,
                              startStopButtonInnerText
                          }) {


    return (
        <div>
            <div className="tabcontent">{milisecondsToString(displayTime)}</div>

            <button className="buttons startStopTimer" onClick={ToggleTimerOrStopWatch}>{startStopButtonInnerText}</button>
            <button className="buttons" onClick={resetTimerOrStopWatch}>Reset</button>
        </div>
    )

}

export default RenderTabContent;


//toggle