// Function to get random choice of rock paper or scissors from computer
function getComputerChoice (){
    // Creates an array of choices
    const choice = ["Rock", "Paper", "Scissors"];
   
    // Generates a random index based on the length of the array (0-2). 
    // Math.random() generates a number between 0 and 1
    // Multiplying by choices.length (which is 3) scales this number to a range between 0 and 3 (but not including 3, meaning it can be 0 but will always be less than 3). 
    //Math.floor() rounds this number down to an integer between 0 and 2.
    const randomChoice = Math.floor(Math.random () * choice.length);

    //Return the randomly selected choice from the array.
    return choice[randomChoice];
}

// Function obtains the human users choice
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

// Declare score variables globally so playRound and playGame can access them
let humanScore = 0;
let computerScore = 0;

// Function to play a single round
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
        humanScore++; // add 1 to human score
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")
    ){
        console.log("Shucks, the computers are smarter than you!");
        computerScore++; // add 1 to computer score
    } else {
        console.log("Oopsies try again!");
    }
    // Display the updated scores
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
 }

 // Function to play the game
function playGame (){
    // Prompt for choices and play a round
    const humanSelection = getHumanChoice(); //prompt user and choice
    const computerSelection = getComputerChoice(); // randomly select choice 

    playRound(humanSelection, computerSelection); // Pass choices to the function
}

// Call playGame multiple times to simulate 5 rounds
playGame();
playGame();
playGame();
playGame();
playGame();