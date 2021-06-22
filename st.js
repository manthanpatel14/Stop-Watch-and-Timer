
function clickHandle(evt, tabName, BIDStart,BIDStop) {
    let i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName(`tabcontent`);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = `none`;
    }
  
    tablinks = document.getElementsByClassName(`tablinks`);
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(` active`, ``);
    }
    document.getElementById(tabName).style.display = `block`;

    document.getElementById(BIDStart).style.display = `block`;

    document.getElementById(BIDStop).style.display = `block`;


    evt.currentTarget.className += ` active`;
  }


function UpdateTime(ElsTime)
{
    let days = Math.floor(ElsTime/86400000);
    ElsTime = ElsTime%86400000;

    let hrs = Math.floor(ElsTime/3600000);
    ElsTime = ElsTime%3600000;

    let mins = Math.floor(ElsTime/60000);
    ElsTime = ElsTime%60000;

    let secs = Math.floor(ElsTime/1000);
    ElsTime = ElsTime%1000;

    ReturnString = ``;
    if(days>0)
    {
        ReturnString += `${days}d `;
    }
    if(hrs>0)
    {
        ReturnString += `${hrs}h `;    }
    if(mins>0)
    {
        ReturnString += `${mins}m `;    }
    if(secs>0)
    {
        ReturnString += `${secs}s `;    }

    ReturnString += `${ElsTime}`;    
    
    return ReturnString;

}

let current_id = 0;

function initialfunction()
{ const ButtonDiv = document.body;
 
    current_id++;





var tagTab = document.createElement(`div`);
tagTab.setAttribute(`class`,`tab`);

var tagTablink = document.createElement(`button`);
tagTablink.setAttribute(`class`,`tablinks`);
tagTablink.setAttribute(`onclick`,`clickHandle(event, "Timer${current_id}","TBStart${current_id}","TBStop${current_id}")`);
tagTablink.appendChild(document.createTextNode(`Timer`));

tagTab.appendChild(tagTablink);

var tagtablink2 = document.createElement(`button`);
tagtablink2.setAttribute(`class`,`tablinks`);
tagtablink2.setAttribute(`onclick`,`clickHandle(event, "StopWatch${current_id}","SWBStart${current_id}","SWBStop${current_id}")`);
tagtablink2.appendChild(document.createTextNode(`Stop Watch`));

tagTab.appendChild(tagtablink2);

ButtonDiv.appendChild(tagTab);

var tagTimer = document.createElement(`div`);
tagTimer.setAttribute(`id`,`Timer${current_id}`);
tagTimer.setAttribute(`class`,`tabcontent`);
tagTimer.appendChild(document.createTextNode(`5m 00s 00`));

ButtonDiv.appendChild(tagTimer);


var tagSW = document.createElement(`div`);
tagSW.setAttribute(`id`,`StopWatch${current_id}`);
tagSW.setAttribute(`class`,`tabcontent`);
tagSW.appendChild(document.createTextNode(`0s 00`));

ButtonDiv.appendChild(tagSW);

var tagBottom = document.createElement(`div`);
tagBottom.setAttribute(`class`,`BottomButtons`);

var StartSW = document.createElement(`button`);
StartSW.setAttribute(`id`,`SWBStart${current_id}`);
StartSW.setAttribute(`class`,`tabcontent buttons start-stop-SW${current_id}`);
StartSW.appendChild(document.createTextNode(`Start`));
tagBottom.appendChild(StartSW);

var StopSW = document.createElement(`button`);
StopSW.setAttribute(`id`,`SWBStop${current_id}`);
StopSW.setAttribute(`class`,`tabcontent buttons reset-SW${current_id}`);
StopSW.appendChild(document.createTextNode(`Reset`));
tagBottom.appendChild(StopSW);


var StartTI = document.createElement(`button`);
StartTI.setAttribute(`id`,`TBStart${current_id}`);
StartTI.setAttribute(`class`,`tabcontent buttons start-stop-TI${current_id}`);
StartTI.appendChild(document.createTextNode(`Start`));
tagBottom.appendChild(StartTI);

var StopTI = document.createElement(`button`);
StopTI.setAttribute(`id`,`TBStop${current_id}`);
StopTI.setAttribute(`class`,`tabcontent buttons reset-TI${current_id}`);
StopTI.appendChild(document.createTextNode(`Reset`));
tagBottom.appendChild(StopTI);

ButtonDiv.appendChild(tagBottom);






console.log(ButtonDiv);
console.log(5);

// For stop watch

const CurrentTime_SW = document.querySelector(`#StopWatch${current_id}`);

let ElapsedTime_SW = 0;
let StartTime_SW;
let TimeInterval_SW;

function StartTimerSW(event)
{
        StartTime_SW = Date.now() - ElapsedTime_SW;
        let r=0;
        event.target.innerText = `Stop`;
        TimeInterval_SW = setInterval(function printtime(){
            ElapsedTime_SW = Date.now() - StartTime_SW;
            CurrentTime_SW.innerText = UpdateTime(ElapsedTime_SW);
        }, 10);
}

function EndTimeSW(event){
    clearInterval(TimeInterval_SW);
    event.target.innerText = `Start`;
}

document.querySelector(`.start-stop-SW${current_id}`).addEventListener(`click`,function(event){
        if(event.target.innerText===`Start`)
        StartTimerSW(event);
        else
        EndTimeSW(event);
})



document.querySelector(`.reset-SW${current_id}`).addEventListener(`click`,function(event){
    const StartButton = document.querySelector(`.start-stop-SW${current_id}`);
    CurrentTime_SW.innerText = `0s 00`;
    ElapsedTime_SW = 0;
    clearInterval(TimeInterval_SW);
    StartButton.innerText = `Start`;
}
)





// For Timer

const CurrentTime_TI = document.querySelector(`#Timer${current_id}`);

let ElapsedTime_TI= 0;
let StartTime_TI;
let TimeInterval_TI;

function StartTimerTI(event)
{
        StartTime_TI = Date.now() - ElapsedTime_TI;
        let r=0;
        event.target.innerText = `Stop`;
        TimeInterval_TI = setInterval(function printtime(){
            ElapsedTime_TI = Date.now() - StartTime_TI;
            if(300000 - ElapsedTime_TI > 0)
            CurrentTime_TI.innerText = UpdateTime(300000 - ElapsedTime_TI);
            else
            return;
        }, 10);
}

function EndTimeTI(event){
    clearInterval(TimeInterval_TI);
    event.target.innerText = `Start`;
}

document.querySelector(`.start-stop-TI${current_id}`).addEventListener(`click`,function(event){
        if(event.target.innerText===`Start`)
        StartTimerTI(event);
        else
        EndTimeTI(event);
})



document.querySelector(`.reset-TI${current_id}`).addEventListener(`click`,function(event){
    const StartButton = document.querySelector(`.start-stop-TI${current_id}`);
    CurrentTime_TI.innerText = `5m 00s 00`;
    ElapsedTime_TI = 0;
    clearInterval(TimeInterval_TI);
    StartButton.innerText = `Start`;
}
)
}

document.getElementById("AddButton").addEventListener(`click`,initialfunction());
