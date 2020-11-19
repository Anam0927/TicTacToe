# Tic-Tac-Toe Game

> *Implemented with vanilla JS*

A simple two-player tic-tac-toe game. When the first player clicks, an **"X"** mark appears in the clicked cell. The second click puts an **"O"** mark in the clicked cell, and so on.

The game accounts for all three possible outcomes:
 - X wins
 - O wins
 - Cat's Game (Draw or Tie)
 
The game automatically reloads once a result is achieved.

## Note about JS used
I've used functions for each task required:

 - making the required symbols and line (*oMaker*, *xMaker* and      
   *lMaker*)
- adding the made symbol to the cell (*symbolAdder*)
-  check for three in a row - a function for each row (*firstLineChecker*, *secondLineChecker* and *thirdLineChecker*) 
- check for three in a column - a function for each column (*firstColumnChecker*, *secondColumnChecker* and      
   *thirdColumnChecker*) 
- check for three in a diagonal- a function for each diagonal (*firstDiagonalChecker* and *secondDiagonalChecker*) 
- countdown before page reloads (*countDown*)
- checking for three consecutive symbols - a function for each **X** and **O** (*checkForXThreeInRow* and *checkForOThreeInRow*)

## UI
The game is made with simple UI. I designed it first in **Adobe XD** and then implemented in code.
