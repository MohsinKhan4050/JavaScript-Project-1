let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".second");
let amPm = document.querySelector(".am-pm");

function updateClock() {



    let h = new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let periods="AM";

    if (h > 12) {
        h = h - 12;
        periods="PM"
    }

    hours.innerHTML = h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    amPm.innerHTML=periods;


}


updateClock();
setInterval(updateClock , 1000)

