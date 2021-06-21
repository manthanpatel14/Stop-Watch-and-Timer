function clickHandle(evt, animalName) {
    let i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(animalName).style.display = "block";
    evt.currentTarget.className += " active";
  }

document.getElementById("default").click();

const CurrentTime = document.querySelector("#StopWatch");

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

    if(days>0)
    {
        return `${days}d ${hrs}h ${mins}m ${secs}s ${ElsTime}`;
    }
    else if(hrs>0)
    {
        return `${hrs}h ${mins}m ${secs}s ${ElsTime}`;
    }
    else if(mins>0)
    {
        return `${mins}m ${secs}s ${ElsTime}`;
    }
    else if(secs>0)
    {
        return `${secs}s ${ElsTime}`;
    }
    else{
        return `${ElsTime}`;
    }
}

let ElapsedTime = 0;
let StartTime;
let TimeInterval;

function StartTimer(event)
{
        StartTime = Date.now() - ElapsedTime;
        let r=0;
        event.target.innerText = "Stop";
        TimeInterval = setInterval(function printtime(){
            ElapsedTime = Date.now() - StartTime;
            CurrentTime.innerText = UpdateTime(ElapsedTime);
        }, 10);
}

function EndTime(event){
    clearInterval(TimeInterval);
    event.target.innerText = "Start";
}

document.querySelector('.start-stop-SW').addEventListener("click",function(event){
        if(event.target.innerText==="Start")
        StartTimer(event);
        else
        EndTime(event);
})



document.querySelector('.reset-SW').addEventListener("click",function(event){
    const StartButton = document.querySelector(".start-stop-SW");
    CurrentTime.innerText = "0s 00";
    ElapsedTime = 0;
    clearInterval(TimeInterval);
    StartButton.innerText = "Start";
}
)