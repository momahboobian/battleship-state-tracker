import "./GameBoard.css";

function GameBoard() {
  // Generate a 10x10 grid for the game board
  const boardSize = 10;
  const rows = [];
  for (let i = 0; i < boardSize; i++) {
    const cells = [];
    for (let j = 0; j < boardSize; j++) {
      cells.push(<div key={`cell-${i}-${j}`} className="cell"></div>);
    }
    rows.push(
      <div key={`row-${i}`} className="row">
        {cells}
      </div>
    );
  }

  return <div className="game-board">{rows}</div>;
}

export default GameBoard;
