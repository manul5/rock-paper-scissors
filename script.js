let array = ['rock', 'paper', 'scissors'];
let human_score = 0, computer_score = 0;

function getComputerChoice() {
    return array[parseInt(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = (prompt('rock paper scissors'));
    let array_choice = array.find(item => item === choice.toLowerCase());
    if (array_choice) {
        return array_choice
    } else
    alert(choice + ' is not a valid option. Try again.')
        return false
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log('TIE')
        console.log('THE CURRENT SCORE IS: ')
        console.log('HUMAN SCORE: ' + human_score)
        console.log('COMPUTER SCORE: ' + computer_score)
    } else if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissors' && computerChoice == 'paper')){
        console.log('YOU WON THE ROUND: ' + humanChoice.toUpperCase() + ' BEATS ' + computerChoice.toUpperCase())
        human_score++;
        console.log('THE CURRENT SCORE IS: ')
        console.log('HUMAN SCORE: ' + human_score)
        console.log('COMPUTER SCORE: ' + computer_score)
    } else if ((humanChoice == 'rock' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'rock')) {
        console.log('COMPUTER WON THE ROUND: ' + computerChoice.toUpperCase() + ' BEATS ' + humanChoice.toUpperCase())
        computer_score++;
        console.log('THE CURRENT SCORE IS: ')
        console.log('HUMAN SCORE: ' + human_score)
        console.log('COMPUTER SCORE: ' + computer_score)
    }
    console.log('-----------------------------------')
}

function playGame() {
    while (human_score < 3 && computer_score < 3) {
        computer = getComputerChoice();
        do {
            human = getHumanChoice();
        } while (human == false)
        
        playRound(human, computer);

        if (human_score == 3) {
            console.log('YOU WON THE GAME')
        } else if (computer_score == 3) {
            console.log('COMPUTER WON THE GAME')
        }
    }
}

playGame();