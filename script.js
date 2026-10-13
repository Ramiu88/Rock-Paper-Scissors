

let humanScore = 0
let computerScore = 0


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



function getHumanChoice()
{

    let choice = prompt("Enter your choice");
    let result;

     if(choice.localeCompare("Rock",undefined,{sensitivity : "base"}) == 0)
     {
        result = "Rock"
     }
     else if(choice.localeCompare("Paper",undefined,{sensitivity : "base"}) == 0)
     {
        result = "Paper"
     }

     else if(choice.localeCompare("Scissors",undefined,{sensitivity : "base"}) == 0)
     {
        result = "Scissors"
     }

     return result;

   
}

function playRound(humanSelection, computerSelection)
{

    let result;

    if(humanSelection == computerSelection)
    {
        result = "That's a tie!!!"
        humanScore++;
        computerScore++;
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



    return result;
    
}




const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const divDisplay = document.querySelector(".display");
const hscore = document.querySelector(".human-score");
const cscore = document.querySelector(".computer-score");





rockButton.addEventListener('click',function() {
 
    let result = playRound("Rock",getComputerChoice())

    divDisplay.textContent = result;
    hscore.textContent = "Human score : " + humanScore;
    cscore.textContent = "Computer score : " + computerScore;




});


paperButton.addEventListener('click',function() {
 
    let result = playRound("Rock",getComputerChoice())

    divDisplay.textContent = result;
    hscore.textContent = "Human score : " + humanScore;
    cscore.textContent = "Computer score : " + computerScore;



});


scissorsButton.addEventListener('click',function() {
 
    let result = playRound("Rock",getComputerChoice())

    divDisplay.textContent = result;
    hscore.textContent = "Human score : " + humanScore;
    cscore.textContent = "Computer score : " + computerScore;

});






















