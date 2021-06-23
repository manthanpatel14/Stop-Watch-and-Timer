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

export {MilisecondsToString};