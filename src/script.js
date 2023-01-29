"use strict";

function showTime() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    const session = "AM";

    if (h === 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        let session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + "" + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").innerText = time;

    setTimeout(showTime, 1000);
}

showTime();