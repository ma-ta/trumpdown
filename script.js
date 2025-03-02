// Set the date we're counting down to
var countDownDate = new Date("2029-01-20T12:00:00-05:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    
    // Find the delta between now an the count down date
    var delta = countDownDate - now;
    
    // Time calculations for years, days, hours, minutes and seconds
    
    var days = Math.floor(delta / (1000 * 60 * 60 * 24));
    var years = Math.floor(days / 365);
    days = days % 365;

    var hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((delta % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="counter-trump"
    document.getElementById("counter-trump").innerHTML = years + "&nbsp;year(s) " + days + "&nbsp;d<br />" + hours + ":"
    + minutes + ":" + seconds;
    
    // If the count down is over, write some text
    if (delta <= 0) {
        clearInterval(x);
        document.getElementById("counter-trump").innerHTML = "Crazy Donald<br>is fully retired!";
        document.body.style.filter = "grayscale(100%)";
    }
}, 1000);
