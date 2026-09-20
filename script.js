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


function playRound(humanSelection, computerSelection)
{

    let result;

    if(humanSelection == computerSelection)
    {
        result = "That's a tie!!!"
    }
    

    if (humanSelection == "Rock")
    {
        if(computerSelection == "Scissors")
        {
            result = "You won! Rock beats Scissors";
            humanScore++;
        }
        else if(computerSelection == "Paper")
        {
            result = "You lose! Paper beats Rock";
            computerScore++;
                    
        }
    }

     if (humanSelection == "Paper")
    {
        if(computerSelection == "Scissors")
        {
            result = "You lose! Scissors beats Paper"
            computerScore++;
        }
        else if(computerSelection == "Rock")
        {
            result = "You won! Paper beats Rock"
            humanScore++;
                    
        }
    }

     if (humanSelection == "Scissors")
    {
        if(computerSelection == "Paper")
        {
            result = "You won! Scissors beats Paper"
            humanScore++;
        }
        else if(computerSelection == "Rock")
        {
            result = "You lose! Rock beats Scissors"
            computerScore++;
                    
        }
    }

    if (computerSelection == "Rock")
    {
        if(humanSelection == "Scissors")
        {
            result = "You won! Rock beats Scissors"
            humanScore++;
        }
        else if(computerSelection == "Paper")
        {
            result = "You lose! Paper beats Rock"
            computerScore++;
                    
        }
    }

     if (computerSelection == "Paper")
    {
        if(humanSelection == "Scissors")
        {
            result = "You lose! Scissors beats Paper"
            computerScore++;
        }
        else if(humanSelection == "Rock")
        {
            result = "You won! Paper beats Rock"
             humanScore++;
                    
        }
    }

     if (computerSelection == "Scissors")
    {
        if(humanSelection == "Paper")
        {
            result = "You won! Scissors beats Paper"
            humanScore++;
        }
        else if(humanSelection == "Rock")
        {
            result = "You lose! Rock beats Scissors"
            computerScore++;
                    
        }
    }

    return result;
    
}












