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

[Image of the box with IDs](https://i.imgur.com/hGbAe6G.png)

Array [
Column 1 [ c1-0, c1-1, c1-2, c1-3, c1-4, c1-5]
Column 2 [c2-0, c2-1, c2-2, c2-3, c2-4, c2-5]
Column 3 [c3-0, c3-1, c3-2, c3-3, c3-4, c3-5]
Column 4 [c4-0, c4-1, c4-2, c4-3, c4-4, c4-5]
Column 5 [c5-0, c5-1, c5-2, c5-3, c5-4, c5-5]
Column 6 [c6-0, c6-1, c6-2, c6-3, c6-4, c6-5]
Column 7 [c7-0, c7-1, c7-2, c7-3, c7-4, c7-5]

Class=”r0”
Class=”r1”
Class=”r2”
Class=”r3”
Class=”r4”
Class=”r5”

Use evt.target.id.substr(3, 3) to access index number inside the parent array

Think about maybe using the class with .replace(“r”, “”) to access index number as well for child array

Also, dont forget the parseInt()
