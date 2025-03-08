// Set the date we're counting down to
let countDownDate = new Date("2029-01-20T12:00:00-05:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

    // Get todays date and time
    let now = new Date().getTime();


    // Find the delta between now an the count down date
    let delta = countDownDate - now;

    // Time calculations for years, days, hours, minutes and seconds

    let days = Math.floor(delta / (1000 * 60 * 60 * 24));
    let years = Math.floor(days / 365);
    days = days % 365;

    let hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((delta % (1000 * 60)) / 1000);

    // Format time
    let formattedTime = String(hours).padStart(2, "0")   + ":"
                      + String(minutes).padStart(2, "0") + ":"
                      + String(seconds).padStart(2, "0");

    // Output the result in an element with id="counter-trump"
    document.getElementById("counter-trump").innerHTML = years + "&nbsp;year(s) " + days + "&nbsp;d<br />"
    + formattedTime;

    // If the count down is over, write some text
    if (delta <= 0) {
        clearInterval(x);
        document.getElementById("counter-trump").innerHTML = "Crazy Donald<br>is fully retired!";
        document.body.style.filter = "grayscale(100%)";
    }
}, 1000);
