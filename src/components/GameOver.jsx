import GameState from "./GameState";
function GameOver({ gameState }) {
  if (gameState === GameState.inProgress) {
      return null;
  }

  let message;
  if (gameState === GameState.playerXWins) {
      message = 'Player X Wins!';
  } else if (gameState === GameState.playerOWins) {
      message = 'Player O Wins!';
  } else {
      message = 'The game is a draw.';
  }

  return (
    <div className="game-over">
        <h2>{message}</h2>
    </div>
);
  
}

export default GameOver;