const gameBoardsContainer = document.querySelector("#board-container");

// Creating Game Boards (Initializing "width" variable for scalability)
const borderSize = 10; // width x size & height x size

function createBoard(colour, user) {
  const gameBoards = document.createElement("div");
  gameBoards.classList.add("game-board");
  gameBoards.style.background = colour;
  gameBoards.id = user;

  for (let i = 0; i < borderSize * borderSize; i++) {
    const blocks = document.createElement("div");
    blocks.classList.add("block");
    blocks.id = i;

    gameBoards.append(blocks);
  }

  gameBoardsContainer.append(gameBoards);
}

createBoard("beige", "player");
createBoard("bisque", "computer");

// Function to add ships to the game board
// Randomly place each ship on the game board while avoiding overlapping or splitting
function addShips(user, ship, id) {
  const allBoardBlocks = document.querySelectorAll(`#${user} div`);
  let randomBool = Math.random() < 0.5;
  let isHorizontal = user === "player" ? rotate === 0 : randomBool;

  let randomStartIndex;

  if (id) {
    randomStartIndex = id; // If an id is provided, use it as the starting index
  } else {
    if (isHorizontal) {
      // Ensure that the ship can be placed horizontally without wrapping
      const maxStartIndex = borderSize * borderSize - ship.length;
      randomStartIndex = Math.floor(Math.random() * (maxStartIndex + 1));
    } else {
      // For vertical ship
      const maxStartIndex = borderSize * borderSize - ship.length * borderSize;
      randomStartIndex = Math.floor(Math.random() * (maxStartIndex + 1));
    }
  }

  let shipBlocks = [];
  let invalidPlacement = false;

  for (let i = 0; i < ship.length; i++) {
    let blockIndex;

    if (isHorizontal) {
      blockIndex = randomStartIndex + i;
    } else {
      blockIndex = randomStartIndex + i * borderSize;
    }

    const block = allBoardBlocks[blockIndex];

    if (block && !block.classList.contains("taken")) {
      shipBlocks.push(block);
    } else {
      invalidPlacement = true;
      break;
    }
  }

  if (!invalidPlacement) {
    shipBlocks.forEach((shipBlock) => {
      shipBlock.classList.add(ship.name);
      shipBlock.classList.add("taken");
    });
  } else {
    if (user === "computer") addShips(user, ship, id);
    if (user === "player") notDropped = true;
  }
}

// Export the functions or objects you want to make available in other files
window.exports = {
  createBoard,
  addShips,
};
