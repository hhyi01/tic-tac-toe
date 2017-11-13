// build a board
// enter 'x' or 'o' for player1, player2
var Board = function(player1, player2) {
  var grid = [];
  for (var i = 0; i < 5; i++) {
    var line = [];
    for (var j = 0; j < 5; j++) {
      if (j % 2 === 1) {
        line.push('|');
      } else if (i % 2 === 1) { 
        line.push('_');
      } else {
        line.push(' ');
      }
    }
    grid.push(line);
  }
  this.board = grid;
  this.player1 = player1;
  this.player2 = player2;
}

// enter coordinates for move
Board.prototype.makeMove = function(x, y, player) {
  if (player === this.player1) {
    return this.board[x][y] = this.player1;
  } else {
    return this.board[x][y] = this.player2;
  }
}

Board.prototype.movesExhausted = function() {
  var done = true;
  for (var i = 0; i < this.board.length; i++) {
    for (var j = 0; j < this.board.length; j++) {
      if (this.board[i][j] === ' ') {
        done = false;
      }
    }
  }
  if (done) {
    return 'Game Over';
  } else {
    return 'Continue Play';
  }
}

Board.prototype.checkWinner = function() {
  // iterate through board to check whether there is winner
  // 3 consecutive X's or O's
  
}

var game = new Board('X', 'O');
console.log(game);
game.makeMove(0, 0, 'player1');
game.makeMove(0, 2, 'player1');
game.makeMove(0, 4, 'player1');
console.log(game);
