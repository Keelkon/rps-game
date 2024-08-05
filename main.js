let rock = 0
let paper = 1
let scissors = 2

function getComputerChoice (x){
    if (x === 0) {
        console.log("Rock");
    } else if (x === 1){ 
        console.log("Paper");
    } else if (x === 2) {
        console.log("Scissors");
    } else {
        console.log("OOPSY! Redo?");
    }
}

console.log(getComputerChoice(4))