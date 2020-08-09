/*----- constants -----*/
const PLAYERS = {
    player1: 1,
    player2: -1
}

const MAXGUESS = 42;
// const WINCOMBOS = ??


/*----- app's state (variables) -----*/
let turn;
let winner;
let board;

/*----- cached element references -----*/
const squareEl = document.querySelectorAll("tr td");
const messageEl = document.getElementById("msg");

/*----- event listeners -----*/
document.querySelector("table").addEventListener('click', handleDrop);
document.querySelector("button").addEventListener('click', renderMsg);

/*----- functions -----*/
init();

function init() {
// reset all variables
    turn = 1;
    winner = null;
    // each array inside the array is a column
    // board = [
    //     [null, null, null, null, null, null,],
    //     [null, null, null, null, null, null,],
    //     [null, null, null, null, null, null,],
    //     [null, null, null, null, null, null,],
    //     [null, null, null, null, null, null,],
    //     [null, null, null, null, null, null,],
    //     [null, null, null, null, null, null,]
    // ]
    board = new Array(7).fill([null, null, null, null, null, null])
    render();
}

function render() {
    
}

function handleDrop(evt) {
    let squareIdx = parseInt(evt.target.id.substr(3,3));
    let rowIdx = parseInt(evt.target.className.replace("c", ""));
    turn *= -1;
    // need to update board in this function
    checkWinner();
}

function renderMsg() {

}

function getWinner() {

}