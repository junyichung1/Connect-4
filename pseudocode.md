Title: Connect 4

Description: User needs to connect 4 dots in a row to win

Screenshot WireFrame: (create screenshot of how game will look with winner in it)

https://i.imgur.com/K66c6ly.png

Technologies Used: JavaScript, HTML, CSS

Pseudocode:
const = MAXGUESS(42)
const = WinningCombos (look up how to create constant)

variable= playerChoice array

Display the game (6x7 grid in css) red and yellow circles
2 players
switch function for who's turn it is
the bottom rows need to be filled before you can add higher up (possibly use same class for each column. name each id from smallest to largest bottom to top) no matter where you click in column, itll go to the most bottom.
event listener will be 'click'.
initialize function will state all variables(turn, playerChoice array) reset game( message ='', empty the board)
render function add the different players circle into corresponding column. switch the turn.
handleClick function- render
once there is a winner return winning message or tie if no more moves left
check winning combos
play again game button

relational position on winning combo. also think about edge cases.
look up array.some()

Bonus: get piece to show it going down and sideways
