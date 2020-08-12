/*----- constants -----*/
const PLAYERS = {
  "1": "red",
  "-1": "yellow",
  null: "black",
};


/*----- app's state (variables) -----*/
let turn;
let winner;
let board;

/*----- cached element references -----*/
const allSquareEl = document.querySelectorAll("td");
const messageEl = document.getElementById("msg");

/*----- event listeners -----*/
document.querySelector("table").addEventListener("click", handleDrop);
document.querySelector("button").addEventListener("click", init);

/*----- functions -----*/
init();

function handleDrop(evt) {
  let colIdx = parseInt(evt.target.className.replace("c", ""));
  if (isNaN(colIdx)) return;
  let rowIdx = board[colIdx].indexOf(null);
  if (rowIdx === -1) {
    return;
  } else {
    board[colIdx][rowIdx] = turn;
  }
  
  if (checkHorizontal() || checkVertical() || checkDiagonalDown() || checkDiagonalUp()
  ) {
    renderMsg();
  } else if (checkTie()) {
    renderTieMsg();
  } else {
    turn *= -1;
    render();
    return;
  }
}

function init() {
  turn = 1;
  winner = null;
  board = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ];
  messageEl.textContent = null;
  render();
}

function render() {
  board.forEach((arr, col) => {
    arr.forEach((cell, row) => {
      document.getElementById(`c${col}-${row}`).style.backgroundColor =
        PLAYERS[cell];

    });
  });
  messageEl.textContent = `Team ${PLAYERS[turn]}'s turn`
}

function renderMsg() {
  if (turn === 1) {
    return (messageEl.textContent = `Team ${PLAYERS["1"]} wins!`);
  } else {
    return (messageEl.textContent = `Team ${PLAYERS["-1"]} wins!`);
  } 
}

function renderTieMsg() {
  return (messageEl.textContent = `This game ended in a tie...`);
}

function absValue(a, b, c, d) {
  let abs = a + b + c + d;
  if (Math.abs(abs) === 4) return true;
}

function checkVertical() {
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row < 3; row++) {
      if (
        absValue(
          board[col][row],
          board[col][row + 1],
          board[col][row + 2],
          board[col][row + 3]
        )
      ) {
        return true;
        console.log(checkVertical());
      }
    }
  }
}

function checkHorizontal() {
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 6; row++) {
      if (
        absValue(
          board[col][row],
          board[col + 1][row],
          board[col + 2][row],
          board[col + 3][row]
        )
      ) {
        return true;
      }
    }
  }
}

function checkDiagonalUp() {
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 2; row++) {
      if (
        absValue(
          board[col][row],
          board[col + 1][row + 1],
          board[col + 2][row + 2],
          board[col + 3][row + 3]
        )
      ) {
        return true;
      }
    }
  }
}

function checkDiagonalDown() {
  for (let col = 0; col < 4; col++) {
    for (let row = 5; row > 2; row--) {
      if (
        absValue(
          board[col][row],
          board[col + 1][row - 1],
          board[col + 2][row - 2],
          board[col + 3][row - 3]
        )
      ) {
        return true;
      }
    }
  }
}

function checkTie() {
  return !board.some((arr) => arr.includes(null));
}

