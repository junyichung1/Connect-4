# Connect 4


Description: User needs to connect 4 dots in a row to win
___

Screenshot WireFrame:

<a href="https://imgur.com/K66c6ly"><img src="https://i.imgur.com/K66c6ly.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/gntgsPs"><img src="https://i.imgur.com/gntgsPs.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/187GdhI"><img src="https://i.imgur.com/187GdhI.png" title="source: imgur.com" /></a>



Technologies Used: JavaScript, HTML, CSS, imgur, google, youtube, zoom

-- Detailed pseudocode--

const = object PLAYERS

variable=
board
turn
winner

cached element references:
the message
the whole table

event listeners:
reset button
drop coin
(both on 'click')

functions

initialize()
reset all variables
board all null
turn set to 1
winner null
invoke render

handleDrop()
change turns
obtain index of swuare
update states
loop of where coin should land
check if there is a winner
update the board

render()
coin(empty div inside td) changes color-for loop(if null, change color to red or yellow)
update message (check winner-> you won!, check tie, or leave as is)

getWinner()
research on win logic. 4 separate functions: checkhorizontal, checkvertical, diagonaldown, diagonalup
___
--basic pseudocode--

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

[Image of the box with IDs] 
<a href="https://imgur.com/L4aJdOE"><img src="https://i.imgur.com/L4aJdOE.png" title="source: imgur.com" /></a>

Array [

Column 1 [c0-0,c0-1,c0-2,c0-3,c0-4,c0-5]

Column 2 [c1-0,c1-1,c1-2,c1-3,c1-4,c1-5]

Column 3 [c2-0,c2-1,c2-2,c2-3,c2-4,c2-5]

Column 4 [c3-0,c3-1,c3-2,c3-3,c3-4,c3-5]

Column 5 [c4-0,c4-1,c4-2,c4-3,c4-4,c4-5]

Column 6 [c5-0,c5-1,c5-2,c5-3,c5-4,c5-5]

Column 7 [c6-0,c6-1,c6-2,c6-3,c6-4,c6-5]

______

Class=”r0”

Class=”r1”

Class=”r2”

Class=”r3”

Class=”r4”

Class=”r5”

Think about maybe using the class with .replace(“r”, “”) to access index number as well for child array

Also, dont forget the parseInt()

for future: I may include a win counter, audio

Link to the game: https://junyichung1.github.io/Connect-4/
___