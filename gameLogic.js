/**
 * Initialize necessary game variables.
 */
let gameOver = false;
let playerTurn;
let playerHits = [];
let computerHits = [];
const playerSunkShips = [];
const computerSunkShips = [];

/**
 * Start the game and set up event listeners.
 */
function startGame() {
  /**
   * Initialize the game, set up boards, and check if all ships are placed.
   * If all ships are not placed, display a message to place them on the board.
   * If all ships are placed, start the game, set up event listeners,
   * and display a message to indicate the game has started.
   */
  if (playerTurn === undefined) {
    if (shipsContainer.children.length !== 0) {
      infoDisplay.textContent = "Please place all your ships on the board!";
    } else {
      const allBoardBlocks = document.querySelectorAll("#computer div");
      allBoardBlocks.forEach((block) =>
        block.addEventListener("click", handleClick)
      );
      playerTurn = true;
      turnDisplay.textContent = "Your Go!";
      infoDisplay.textContent = "Game started :)";
    }
  }
}

/**
 * Implement computer's turn logic.
 */
function computerTurn() {
  /**
   * Execute the logic for the computer's turn.
   * This includes simulating the computer's choices, handling hits,
   * misses, and sunk ships, and setting up the next player's turn.
   */
  if (!gameOver) {
    turnDisplay.textContent = "Computer's Turn!";
    infoDisplay.textContent = "The Computer is taking its turn...";

    setTimeout(() => {
      const randomGo = Math.floor(Math.random() * borderSize * borderSize);
      const allBoardBlocks = document.querySelectorAll("#player div");

      const isTaken = allBoardBlocks[randomGo].classList.contains("taken");
      const isHit = allBoardBlocks[randomGo].classList.contains("hit");

      if (isTaken && isHit) {
        computerTurn();
        return;
      }

      allBoardBlocks[randomGo].classList.add("hit");

      if (isTaken) {
        infoDisplay.textContent = "The Computer hit your ship!";
        const classes = Array.from(allBoardBlocks[randomGo].classList).filter(
          (className) => !["block", "hit", "taken"].includes(className)
        );
        computerHits.push(...classes);
        checkScore("computer", computerHits, computerSunkShips);
      } else {
        infoDisplay.textContent = "Nothing hit this time!";
        allBoardBlocks[randomGo].classList.add("empty");
      }
    }, 1000);

    setTimeout(() => {
      playerTurn = true;
      turnDisplay.textContent = "Your turn!";
      infoDisplay.textContent = "Please take your go.";
      const allBoardBlocks = document.querySelectorAll("#computer div");
      allBoardBlocks.forEach((block) =>
        block.addEventListener("click", handleClick)
      );
      checkGameStatus();
    }, 2000);
  }
}

// Export functions for use in other files
window.exports = {
  startGame,
  computerTurn,
};
