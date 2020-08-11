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

[Image of the box with IDs](https://i.imgur.com/weNQpzV.png)

Array [
Column 1 [35,28,21,14,7,0]
Column 2 [36,29,22,15,8,1]
Column 3 [37,30,23,16,9,2]
Column 4 [38,31,24,17,10,3]
Column 5 [39,32,25,18,11,4]
Column 6 [40,33,26,19,12,5]
Column 7 [41,34,27,20,13,6]

**chose this array arrangement because when I console.log(the whole table) that is the order of the array it spits back out.

Class=”r0”
Class=”r1”
Class=”r2”
Class=”r3”
Class=”r4”
Class=”r5”

Use evt.target.id.substr(3, 3) to access index number inside the parent array

Think about maybe using the class with .replace(“r”, “”) to access index number as well for child array

Also, dont forget the parseInt()
