function getComputerChoice()
{
    let choice = Math.random();
    if (choice == 0)
    {
        choice = "Rock"
    }
    else if (choice > 0.5)
    {
        choice = "Paper"
    }
    else {
        choice = "Scissors"
    }

    return choice;

}



function getHumanChoice(choice)
{
   
}



console.log(getComputerChoice())
