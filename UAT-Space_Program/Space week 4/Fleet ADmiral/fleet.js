//Isabel Ramos
function StartCountdown() 
{
//text before the function starts
    document.write("<b>Countdown</b>")
    document.write("<br></br>")
//varibles connected to the while function
    var Countdown = 10;

    var x = 0;

  

//x is less than 10 so during the function it will go up to ten
//also repeating function used 'while'
//first iteration
    while(x < 10)
{ 
    //text added with the countdown repeating the texts as it goes
    document.write(Countdown);
    document.write("<br></br>");
    //countdown = 9
    Countdown--;
    //x = 1
    x++;

    //if the count down hits lesss than 5 the warning will present itself
    if (Countdown < 5 )
{
    document.write("<b>Warning Less than 1/2 way to launch, time left = </b>");

} 
}
    //ending text
    document.write("0")
    document.write("<br></br>");
    document.write("<br></br>");
    document.write("<b>Blastoff!!</b>")
}
