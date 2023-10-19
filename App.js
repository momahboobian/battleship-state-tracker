// Select and storing the IDs & Classes
const shipsContainer = document.querySelector(".ships-container");
const shipDirection = document.querySelector("#direction-btn");
const gameBoardsContainer = document.querySelector("#board-container");

// Creating options for direction of the ships (Horizontal / Vertical)
function direction() {
  const shipsArray = Array.from(shipsContainer.children);

  // Check the rotation
  rotate = 0;
  rotate === 0 ? (rotate = 90) : (rotate = 0);

  shipsArray.forEach((ship) => (ship.style.transform = `rotate(${rotate}deg)`));
}

// Creating Game Boards (Initializing "width" variable for scalability)
const size = 10; // width x size & height x size

function createBoard(colour, user) {
  const gameBoards = document.createElement("div");
  gameBoards.classList.add("game-board");
  gameBoards.style.background = colour;
  gameBoards.id = user;

  for (let i = 0; i < size * size; i++) {
    const blocks = document.createElement("div");
    blocks.classList.add("block");
    blocks.id = i;

    gameBoards.append(blocks);
  }

  gameBoardsContainer.append(gameBoards);
}

createBoard("beige", "player");
createBoard("bisque", "computer");

shipDirection.addEventListener("click", direction);
