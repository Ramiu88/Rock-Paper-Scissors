let humanScore = 0;
let computerScore = 0;



function getComputerChoice()
{
    let choice = Math.random();
    if (choice >=0 && choice <=0.3)
    {
        choice = "Rock"
    }
    else if (choice > 0.3 && choice <= 0.6)
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
    let result;

     if(choice.localCompare("Rock",undefined,{sensitivity : "base"}))
     {
        result = "Rock"
     }
     else if(choice.localCompare("Paper",undefined,{sensitivity : "base"}))
     {
        result = "Paper"
     }

     else if(choice.localCompare("Scissors",undefined,{sensitivity : "base"}))
     {
        result = "Scissors"
     }

     return result

   
}


function playRound()
{
    
}












