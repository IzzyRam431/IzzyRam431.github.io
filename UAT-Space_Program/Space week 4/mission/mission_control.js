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
    while(x < 10)
{
    //text added with the countdown repeating the texts as it goes
    document.write("Countdown in " + Countdown);
    document.write("<br></br>");
    Countdown--;
    x++;
}
//ending text
    document.write("Blastoff!!")
}