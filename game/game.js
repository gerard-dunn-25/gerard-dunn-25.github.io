console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let cells = document.getElementsByTagName('TD')

console.log(cells)

function sayHello() {
  console.log('hello')
}

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

function randomisePlayerTurn() {
  return Math.random() >= 0.5
}

let noughtsTurn = randomisePlayerTurn()

let gameIsOver

var moveCounter = 0

// function for handling clicks on cells
function cellClicked(e) {
  // create a variable for the clicked cell so I can do stuff with it
  if (!gameIsOver) {
    let cell = e.target
    e.target.onclick = ++moveCounter
    console.log('Move count: ' + moveCounter)
    console.log('i clicked on: ' + cell)
    // if the cell is empty (check it's .innerHTML property)
    console.log(e.target.innerHTML == '')
    // figure out which symbol to put inside the cell ("O" or "X" based on the naughtsTurn boolean)
    let symbol = noughtsTurn === true ? 'O' : 'X'
    // put the symbol inside the cell (by using .innerHTML again)
    if (e.target.innerHTML == '') {
      e.target.innerHTML = symbol
      // switch to the other player (using the naughtsTurn boolean again)
      noughtsTurn = !noughtsTurn
    } else if (e.target.innerHTML !== '') {
      alert('That square is already used')
    }
    console.log('Player Turn: ' + symbol)
    // check to see if the player won with that move (probably using a new function, like checkForWin() which I'll need to write later)
    checkForWin(symbol)
    // if the game isn't over
    !gameIsOver
    console.log('Is it Player Ones turn? ' + noughtsTurn)
    // update the subtitle saying whose turn it is now
    if (noughtsTurn == true)
      document.getElementById('subtitle').innerHTML = 'Turn: Player One O'
    if (noughtsTurn == false)
      document.getElementById('subtitle').innerHTML = 'Turn: Player Two X'
    if (gameIsOver == true)
      document.getElementById('subtitle').innerHTML = 'Winner: ' + symbol + '!'
    else if (moveCounter === 9)
      document.getElementById('subtitle').innerHTML = 'Stalemate!'
  }
}

// the function takes a string as an argument ("X" or "O")
// *in this example we called the argument 'symbol' but you can call it whatever you want (hint: bananas)

function checkForWin(symbol) {
  // if a symbol appears three times in a row in the board cells i.e. a winning line

  // either horizontally, vertically, OR diagonally
  // Horizontal Check:
  if (
    cells[0].innerHTML == symbol &&
    cells[1].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[3].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[5].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[6].innerHTML == symbol &&
    cells[7].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true

  // Vertical Check:
  if (
    cells[0].innerHTML == symbol &&
    cells[3].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[1].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[7].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[5].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true

  // // Diagonal Check:
  if (
    cells[0].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true
  console.log('Game is over: ' + gameIsOver)
  // the game is over
  gameIsOver
  // if the game is over
  if (gameIsOver == true) console.log(symbol + ' wins')
  // update the subtitle with the winner
  // if (gameIsOver == true)
  //   document.getElementById('subtitle').innerHTML = 'Winner: ' + symbol
}

document.getElementById('resetButton').onclick = reset

function reset() {
  location.reload()
}
