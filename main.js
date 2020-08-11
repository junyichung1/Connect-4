/*----- constants -----*/
const PLAYERS = {
  "1": "red",
  "-1": "yellow",
  null: "black"
};

const MAXGUESS = 42;
// const WINCOMBOS = ??

/*----- app's state (variables) -----*/
let turn;
let winner;
let board;

/*----- cached element references -----*/
const allSquareEl = document.querySelectorAll("td");
const messageEl = document.getElementById("msg");

/*----- event listeners -----*/
document.querySelector("table").addEventListener("click", handleDrop);
// document.querySelector("button").addEventListener("click", renderMsg);

/*----- functions -----*/
init();

function handleDrop(evt) {
  let colIdx = parseInt(evt.target.className.replace("c", ""));
  for (let i = 0; i < 6; i++) {
    if (board[colIdx][i] === null) {
      board[colIdx][i] = turn;
      
      turn *= -1;
      console.log(evt.target)
      render();
      return;
    }
  }
}

// input where to put in array of array

//   render(evt.target);
//   //     // need to update board in this function
//   //   //   checkWinner();
// }

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




function render() {
  board.forEach((arr, col) => {
    arr.forEach((cell, row) => {
      document.getElementById(`c${col}-${row}`).style.backgroundColor = PLAYERS[cell]
  }) 
})
}



// function renderMsg() {}

// function getWinner() {}
