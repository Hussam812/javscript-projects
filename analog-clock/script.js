let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();


    let hRotation = 30*hh + mm/2;
    let mRoutation = 6*mm;
    let sRoutation = 6*ss;


    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRoutation}deg)`;
    sec.style.transform = `rotate(${sRoutation}deg)`;

}

setInterval(displayTime, 1000);