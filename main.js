// function to get random choice of rock paper or scissors from computer
function getComputerChoice (){
    //Creates an array of choices
    const choice = ["Rock", "Paper", "Scissors"];
   
    // Generates a random index based on the length of the array (0-2). 
    // Math.random() generates a number between 0 and 1
    // Multiplying by choices.length (which is 3) scales this number to a range between 0 and 3 (but not including 3, meaning it can be 0 but will always be less than 3). 
    //Math.floor() rounds this number down to an integer between 0 and 2.
    const randomChoice = Math.floor(Math.random () * choice.length);

    //Return the randomly selected choice from the array.
    return choice[randomChoice];
}

//function obtains the human users choice for the game
function getHumanChoice (){
    // Creates prompt for the user to enter a choice
    const input = prompt(" Are you throwing Rock, Paper, or Scissors?"); 
    // Allows for variances in spelling by converting all inputs to lowercase. Catches ROCK, rock, RoCk etc.
    // const normalizedInput = input.toLowerCase();

    // conditonal statement to check the normalized input and show the corresponding choice to user.
    if (input === "rock") {
        return("Rock")
    } else if (input === "paper"){
        return("Paper");
    } else if (input === "scissors"){
        return("Scissors");
    } else {
        //handles invalid inputs
        return("invalid");
    }
}


let humanScore = 0;
let computerScore = 0;


 function playRound (humanChoice, computerChoice) {
      // Convert both choices to lowercase for case-insensitive comparison
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // Determine outcome based on the choices made
    if (humanChoice === computerChoice){
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ){
        console.log("You win!");
        // add 1 to human score
        humanScore++;
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")
    ){
        console.log("Shucks, the computers are smarter than you!");
        // add 1 to computer score
        computerScore++;
    } else {
        console.log("Oopsies try again!");
    }
    // Display the updated scores
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
 }


 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();


 playRound(humanSelection, computerSelection);

