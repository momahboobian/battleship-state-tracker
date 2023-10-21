// Initialize any necessary variables
let gameOver = false;
let playerTurn;
let playerHits = [];
let computerHits = [];
const playerSunkShips = [];
const computerSunkShips = [];

// Function to start the game
function startGame() {
  // Initialize the game, set up boards, and check if all ships are placed
  if (playerTurn === undefined) {
    if (shipsContainer.children.length !== 0) {
      console.log("All ships must be placed on the board!");
      infoDisplay.textContent = "Please place all your ships on the board!";
    } else {
      // Start the game and set up event listeners
      const allBoardBlocks = document.querySelectorAll("#computer div");
      allBoardBlocks.forEach((block) =>
        block.addEventListener("click", handleClick)
      );
      playerTurn = true;
      turnDisplay.textContent = "Your Go!";
      infoDisplay.textContent = "Game started :)";
      console.log("Game started!");
    }
  }
}

// Logic for computer Turn <<<<-----------------------------------
function computerTurn() {
  if (!gameOver) {
    turnDisplay.textContent = "Computers Turn!";
    infoDisplay.textContent = "The Computer is Turn ...";

    setTimeout(() => {
      let randomGo = Math.floor(Math.random() * borderSize * borderSize);
      const allBoardBlocks = document.querySelectorAll("#player div");

      if (
        allBoardBlocks[randomGo].classList.contains("taken") &&
        allBoardBlocks[randomGo].classList.contains("hit")
      ) {
        computerTurn();
        return;
      } else if (
        allBoardBlocks[randomGo].classList.contains("taken") &&
        !allBoardBlocks[randomGo].classList.contains("hit")
      ) {
        allBoardBlocks[randomGo].classList.add("hit");
        infoDisplay.textContent = "The Computer hit your ship!";

        let classes = Array.from(allBoardBlocks[randomGo].classList);
        classes = classes.filter((className) => className !== "block");
        classes = classes.filter((className) => className !== "hit");
        classes = classes.filter((className) => className !== "taken");
        computerHits.push(...classes);

        // console.log(computerHits)
        checkScore("computer", computerHits, computerSunkShips);
      } else {
        infoDisplay.textContent = "Nothing hit this time!";
        allBoardBlocks[randomGo].classList.add("empty");
      }
    }, 2000);

    setTimeout(() => {
      playerTurn = true;
      turnDisplay.textContent = "Your turn!";
      infoDisplay.textContent = "Please take your go.";
      const allBoardBlocks = document.querySelectorAll("#computer div");
      allBoardBlocks.forEach((block) =>
        block.addEventListener("click", handleClick)
      );
      checkGameStatus();
    }, 4000);
  }
}

// Function to check the score
function checkScore(user, userHits, userSunkShips) {
  function checkShip(shipName, shipLength) {
    if (
      userHits.filter((storedShipName) => storedShipName === shipName)
        .length === shipLength
    ) {
      if (user === "player") {
        infoDisplay.textContent = `You sunk the Computer's ${shipName}`;

        playerHits = userHits.filter(
          (storedShipName) => storedShipName !== shipName
        );
      }
      if (user === "computer") {
        infoDisplay.textContent = `The Computer sunk your ${shipName}`;

        playerHits = userHits.filter(
          (storedShipName) => storedShipName !== shipName
        );
      }
      userSunkShips.push(shipName);
    }
  }
  checkShip("ship-1", 5);
  checkShip("ship-2", 4);
  checkShip("ship-3", 3);
  checkShip("ship-4", 3);
  checkShip("ship-5", 2);

  console.log("playerHits", playerHits);
  console.log("playerSunkShips", playerSunkShips);
}

// Function to check the game status
function checkGameStatus() {
  if (playerSunkShips.length === 5) {
    infoDisplay.textContent = "You sunk all the computer's ships. YOU WON!";
    gameOver = true;
  }

  if (computerSunkShips.length === 5) {
    infoDisplay.textContent = "The Computer sunk all your ships. YOU LOST!";
    gameOver = true;
  }
}

// Export the functions to make available in other files
window.exports = {
  startGame,
  computerTurn,
  checkScore,
  checkGameStatus,
};
