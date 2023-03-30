let timesRun = 0;

const board =  [['0','1','2'],['3','4','5'],['6','7','8']]
const otherboard = [[]]
for(var i = 0; i < 3; i++) {
    const otherboard = [i];
    for(var j = 0; j < 3; j++) {
        const otherboard = [i][j];
    }
}
console.log(otherboard);
const player1 = (button, choice) =>{
    console.log('made1');
    this.choice = choice; 
    const addChoice = document.createElement('h1');
    addChoice.textContent = choice;
    button.appendChild(addChoice);
}

const player2 = (button, choice) =>{
    console.log('made2');
    this.choice = choice; 
    const addChoice = document.createElement('h1');
    addChoice.textContent = choice;
    button.appendChild(addChoice);
}


const runGame = (button) => {
    console.log('yo');
    if(timesRun%2 == 0){
        player1(button, 'X');
    }
    else{
        player2(button, 'O');
    }
    timesRun += 1;
}

const container = document.querySelector(".game-borders");

for(let i = 0; i < 9; i++){
    const box = document.createElement("div");
    box.setAttribute('id', 'box' + String(i));
    container.appendChild(box);
}

const buttons = container.querySelectorAll('div');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        runGame(button)
    })
})

