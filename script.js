const eventDate =
new Date("August 12, 2026 09:00:00").getTime();


setInterval(function () {

    const now = new Date().getTime();

    const distance = eventDate - now;


    const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds =
    Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );


    document.getElementById("days")
    .innerHTML = days;

    document.getElementById("hours")
    .innerHTML = hours;

    document.getElementById("minutes")
    .innerHTML = minutes;

    document.getElementById("seconds")
    .innerHTML = seconds;


},1000);

window.onscroll = function () {

    let scrollTop =
    document.documentElement.scrollTop;

    let height =
    document.documentElement.scrollHeight
    -
    document.documentElement.clientHeight;


    let progress =
    (scrollTop / height) * 100;


    document.getElementById(
        "progress-bar"
    ).style.width =
    progress + "%";

};

const topBtn =
document.getElementById("topBtn");


window.addEventListener(
"scroll",

function () {

    if (
        document.documentElement.scrollTop
        >
        300
    )

    {
        topBtn.style.display =
        "block";
    }

    else {

        topBtn.style.display =
        "none";
    }

});


topBtn.addEventListener(
"click",

function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});