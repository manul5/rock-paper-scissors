let array = ['rock', 'paper', 'scissors'];
let human_score = 0, computer_score = 0;

function capitalize(s)
{
    return String(s[0]).toUpperCase() + String(s).slice(1);
}

function getComputerChoice() {
    return array[parseInt(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        let score = document.querySelector('.score')
        if(score.hasChildNodes()) {
            score.removeChild(score.firstChild)
        }
        let p = document.createElement('p')
        p.setAttribute('class' ,'current-score')
        score.appendChild(p)
        p.innerHTML = `Its a TIE. </br> The current score is: <br/> 
        Human Score : ${human_score} <br/>
        Computer Score: ${computer_score}`

    } else if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissors' && computerChoice == 'paper')){
        human_score++;
        let score = document.querySelector('.score')
        if(score.hasChildNodes()) {
            score.removeChild(score.firstChild)
        }
        let p = document.createElement('p')
        p.setAttribute('class', 'current-score')
        score.appendChild(p)
        p.innerHTML = `You WON the round. ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}. </br>
        The current score is: <br/> 
        Human Score : ${human_score} <br/>
        Computer Score: ${computer_score}`
        
    } else if ((humanChoice == 'rock' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'rock')) {
        computer_score++;
        let score = document.querySelector('.score')
        if(score.hasChildNodes()) {
            score.removeChild(score.firstChild)
        }
        let p = document.createElement('p')
        p.setAttribute('class', 'current-score')
        score.appendChild(p)
        p.innerHTML = `Computer WON the round. ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}. </br>
        The current score is: <br/> 
        Human Score : ${human_score} <br/>
        Computer Score: ${computer_score}`
    }
}

function playGame() {
    
    let count = 0
    btns = document.querySelectorAll('button')
    btns.forEach(element => {
        element.addEventListener('click', () => {
            count ++
            p = document.querySelector('p')
            p.textContent = ('Press a button to play the next round! ' + count)
            playRound(element.classList.value, getComputerChoice());
            if (count == 5) {
                let container = document.querySelector('.button-container')
                container.remove()
                count = 0
                let el = document.createElement('div')
                if(computer_score > human_score) {
                    el.textContent = 'Computer WON the game.'
                } else if (computer_score < human_score){
                    el.textContent = 'You WON the game.'
                } else {
                    el.textContent = 'The game was TIED.'
                }
                document.body.appendChild(el)
            }
        })
    });
    
}

playGame();