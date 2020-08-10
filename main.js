/*----- constants -----*/
const PLAYERS = {
  player1: 1,
  player2: -1,
};

const MAXGUESS = 42;
// const WINCOMBOS = ??

/*----- app's state (variables) -----*/
let turn;
let winner;
let board;

/*----- cached element references -----*/
const rowEl = document.querySelectorAll("tr");
const messageEl = document.getElementById("msg");

/*----- event listeners -----*/
document.querySelector("table").addEventListener("click", handleDrop);
// document.querySelector("button").addEventListener("click", renderMsg);

/*----- functions -----*/
init();

function handleDrop(evt) {
  let colIdx = evt.target.className.replace("c", "");
  for (let i = 0; i < 6; i++) {
    if (board[colIdx][i] === null) {
      board[colIdx][i] = turn;
      return;
    }
    turn *= -1;
    // input where to put in array of array
  }
  render(evt.target);
  //     // need to update board in this function
  //   //   checkWinner();
}

function init() {
  // reset all variables
  turn = 1;
  winner = null;
  // each array inside the array is a column
  board = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ];
}

function render(elem) {
  //   change color of board
  let row = [];
  let colIdx = elem.className.replace("c", "");
  for (let i = 5; i > -1; i--) {
    if (rowEl[i].children[colIdx].style.backgroundColor === "black") {
        row.push(rowEl[i].children[colIdx])
        if (turn >0) {
            row[0].style.backgroundColor = "red";
        } else {
            row[0].style.backgroundColor = "yellow";
        }
    //   rowEl[i].children[colIdx].style.backgroundColor =
    //     turn > 0 ? "red" : "yellow";
      
    }
  }
}

// function renderMsg() {}

// function getWinner() {

// }
