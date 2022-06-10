function StartTheCountdown()
{
    //this function is for the countdown and control the countdown also declare variables
    var countdown = 10;
    //used to track actual time
    //1000 = 1 sec because of millisecond usage
    var timeout = 11000;
    // continue copy and paste for the next 10 times
    setTimeout(() => {
        document.getElementById("CountdownDisplay").innerHTML = "Blastoff!!";
    }, timeout)
    timeout = timeout - 1000;
     //10
    setTimeout(() => {
        document.getElementById("CountdownDisplay").innerHTML = countdown;
        countdown = countdown -1;
    }, timeout)
    timeout = timeout - 1000;
     //9
    setTimeout(() => {
        document.getElementById("CountdownDisplay").innerHTML = countdown;
        countdown = countdown -1;
    }, timeout)
    timeout = timeout - 1000;
     //8
    setTimeout(() => {
        document.getElementById("CountdownDisplay").innerHTML = countdown;
        countdown = countdown -1;
    }, timeout)
    timeout = timeout - 1000;
     //7
    setTimeout(() => {
        document.getElementById("CountdownDisplay").innerHTML = countdown;
        countdown = countdown -1;
    }, timeout)
    timeout = timeout - 1000;
     //6
    setTimeout(() => {
        document.getElementById("CountdownDisplay").innerHTML = countdown;
        countdown = countdown -1;
    }, timeout)
    timeout = timeout - 1000;
     //5
    setTimeout(() => {
        document.getElementById("CountdownDisplay").innerHTML = countdown;
        countdown = countdown -1;
    }, timeout)
    timeout = timeout - 1000;
     //4
    setTimeout(() => {
        document.getElementById("CountdownDisplay").innerHTML = countdown;
        countdown = countdown -1;
    }, timeout)
    timeout = timeout - 1000;
     //3
    setTimeout(() => {
        document.getElementById("CountdownDisplay").innerHTML = countdown;
        countdown = countdown -1;
    }, timeout)
    timeout = timeout - 1000;
     //2
    setTimeout(() => {
        document.getElementById("CountdownDisplay").innerHTML = countdown;
        countdown = countdown -1;
    }, timeout)
    timeout = timeout - 1000;
     //1
    setTimeout(() => {
        document.getElementById("CountdownDisplay").innerHTML = countdown;
        countdown = countdown -1;
    }, timeout)
    timeout = timeout - 1000;
     //copy and pasted for text print
    setTimeout(() => {
        document.getElementById("CountdownDisplay").innerHTML = "Start the Countdown";
    }, timeout)
}