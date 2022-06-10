//Isabel Ramos
function operator() 
{
    //users input information popping up in prompts
    var firstName = prompt("Enter First Name...");              
    var lastName = prompt("Enter Last Name...");   
    var badgeNumber = prompt("Enter Badge Number..."); 
    
    //having the names and badge characters a certain lengths
    while (firstName.length <= 0 || firstName.length > 20)                                 
    {
        prompt("Please enter your first name between 1 to 20 characters.");
    }
   
    while (lastName.length <= 0 || lastName.length > 20)                              
    {
        prompt("Please enter your last name between 1 to 20 characters.");

    }
       
    while (badgeNumber.length <= 0 || lastName.length > 4)                                  
    {
        prompt("Please enter Badge Number between 1 to 4 Characters.");
    }

    document.write("Welcome in " + firstName + lastName)
    document.write("<br></br>")
    document.write("Badge Number: " + badgeNumber)
}