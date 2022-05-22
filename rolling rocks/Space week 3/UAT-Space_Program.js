//"function is a module that returns a value back to the part of the program that called it"
function play() {

    document.write("<b>Simple Craps</b>")
    //breaking the line
    document.write("<br/>")
    document.write("<br/>")

    //included player name
    myName = prompt("Enter Name")
    document.write("Playername: " + myName)
    document.write("<br/>")
    document.write("<br/>")
    
//randomized numbers between 0-6
    var die1 = Math.random() * 6;
    var die2 = Math.random() * 6;
    //Math.floor is to round to the total for a whole integer then with a remainder
    die1 = Math.floor(die1)
    die2 = Math.floor(die2)
    
    var sum = die1+die2
    //documnet.write to hold parameter () to tell interpreter () what text to display.
    //var die1 will be added after text "Die 1 =" to Die 1 = 5
    document.write("Die 1 = " + die1)
    //breaking the line
    document.write("<br/>")
    //var die2 will be added after text "Die 2 =" to Die 2 = 2
    document.write("Die 2 = " + die2)
    //breaking the line
    document.write("<br/>")
    document.write("<br/>")
    //This will present a text adding die1 and die2 to find the sum
    //"Sum = 7"
    document.write("Sum = " + sum)  
    //breaking the line
    document.write("<br/>")
    document.write("<br/>")
    //demonstrating the 'or' ||
    if (sum == 7 || sum == 11)
    { document.write("CRAPS - you lose " + myName)
    //breaking the line
    document.write("<br/>")
    }
    //if equal to eachother is a win
    else if (die1== die2 && die1%2 == 0)
    {
    document.write("DOUBLES - you win " + myName)
    //breaking the line
    document.write("<br/>")
    }
}
    play()