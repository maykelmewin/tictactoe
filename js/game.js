const tiles = document.getElementsByClassName('board__tile');
gameStart();

function gameStart() {
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].textContent = ""; // clear box
        // mousehandler
        tiles[i].onclick = () => turn(i, player);
        // keyhandler
        tiles[i].addEventListener("keydown", (e) => {
            const column = 3;
            const row = 3;
            switch (e.key) {
                case "ArrowLeft":
                    ( i > 0) ? tiles[i - 1].focus() : tiles[i + tiles.length - 1].focus();
                    break;
                case "ArrowRight":
                    ( i < tiles.length - 1) ? tiles[i + 1].focus() : tiles[i - (tiles.length - 1)].focus();
                    break;
                case "ArrowUp":
                    ( i >= column) ? tiles[i - row].focus() : tiles[i + (column * (row - 1))].focus();
                    break;
                case "ArrowDown":
                    ( i < column * (row - 1)) ? tiles[i + row].focus() : tiles[i - (column * (row - 1))].focus();
                    break;
                case "Enter":
                    turn(i, player);
                    break;
            }
        });
    }
    board = [0,1,2,3,4,5,6,7,8];
    player = "x"; // player x and player o
    turnlogs = []; // {position: 1, player: x}
}
                                                                         
function gameEnd(message){
    message ? console.log(message) : console.log("Congratulation Player " + player);
    alert('Game End');
    gameStart();
}

function gameRestart(){
    gameEnd('game restarted');
}

function turn(tileNumber, player) {
    if (!isNaN(board[tileNumber])) {
        tiles[tileNumber].textContent = player;
        board.splice(tileNumber, 1, player);
        turnlogs.push({"position" : tileNumber, player});
    }
    gameValidate();
    swapPlayer();
}

function undoTurn(){
    let position = turnlogs[turnlogs.length - 1]?.position;
    if (typeof position !== 'undefined') {
        board.splice(position, 1, position);
        turnlogs.pop();
        tiles[position].textContent = "";
    };
    showAgainLoadingScreen.restart();
}

function gameValidate(){
    
    // validate if we have a winner
    let winningPosition = [
       [ 0,1,2 ],
       [ 3,4,5 ],
       [ 6,7,8 ],
       [ 0,3,6 ],
       [ 1,4,7 ],
       [ 2,5,8 ],
       [ 0,4,8 ],
       [ 2,4,6 ]
    ]
    for (let i in winningPosition ){
        const valueA = board[winningPosition[i][0]];
        const valueB = board[winningPosition[i][1]];
        const valueC = board[winningPosition[i][2]];
        if( valueA == valueB && valueB == valueC) return gameEnd();
    }
    
    // validate if board is completed
    const xCount = board.filter(x => x =='x');
    const oCount = board.filter(o => o =='o');
    if ( (xCount.length + oCount.length) > 8) return gameEnd('draw');
        
}

function swapPlayer() {
    player = (player == "x") ? "o" : "x";
}




