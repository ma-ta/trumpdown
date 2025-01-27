// Set the date we're counting down to
var countDownDate = new Date("2029-01-20T12:00:00-05:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for years, days, hours, minutes and seconds
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var years = Math.floor(days / 365);
    days = days % 365;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="counter-trump"
    document.getElementById("counter-trump").innerHTML = years + " year(s) " + days + "d<br />" + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text
    if (distance <= 0) {
        clearInterval(x);
        document.getElementById("counter-trump").innerHTML = "Crazy Donald<br>is fully retired!";
        document.body.style.filter = "grayscale(100%)";
    }
}, 1000);
