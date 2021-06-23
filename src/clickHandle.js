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

export {clickHandle};