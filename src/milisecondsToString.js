function milisecondsToString(ElsTime) {
    let days = Math.floor(ElsTime / 86400000);
    ElsTime = ElsTime % 86400000;

    let hrs = Math.floor(ElsTime / 3600000);
    ElsTime = ElsTime % 3600000;

    let mins = Math.floor(ElsTime / 60000);
    ElsTime = ElsTime % 60000;

    let secs = Math.floor(ElsTime / 1000);
    ElsTime = ElsTime % 1000;

    let finalString = "";
    if (days > 0) {
        finalString += `${days}d `;
    }
    if (hrs > 0) {
        finalString += `${hrs}h `;
    }
    if (mins > 0) {
        finalString += `${mins}m `;
    }
    if (secs > 0) {
        finalString += `${secs}s `;
    }

    finalString += `${ElsTime}`;
    return finalString;
}

export default milisecondsToString;