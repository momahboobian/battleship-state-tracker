/**
 * Create a game board with a title for a user.
 *
 * @param {string} colour - The background color of the game board.
 * @param {string} user - The user identifier ('player' or 'computer').
 */
const gameBoardsContainer = document.querySelector("#board-container");

const borderSize = 10; // width x size & height x size

function createBoard(colour, user) {
  const boardContainer = document.createElement("div");
  boardContainer.classList.add("board-container");

  const title = document.createElement("h2");
  title.textContent = user === "player" ? "Player" : "Computer";
  boardContainer.appendChild(title);

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

  boardContainer.appendChild(title);
  boardContainer.appendChild(gameBoards);

  gameBoardsContainer.append(boardContainer);
}

createBoard("beige", "player");
createBoard("bisque", "computer");

/**
 * Add ships to the game board.
 *
 * @param {string} user - The user identifier ('player' or 'computer').
 * @param {object} ship - The ship object to add to the board.
 * @param {number} id - The starting index for ship placement.
 */
function addShips(user, ship, id) {
  const allBoardBlocks = document.querySelectorAll(`#${user} div`);
  let randomBool = Math.random() < 0.5;
  let isHorizontal = user === "player" ? rotate === 0 : randomBool;

  let randomStartIndex;

  if (id) {
    randomStartIndex = id;
  } else {
    if (isHorizontal) {
      const maxStartIndex = borderSize * borderSize - ship.length;
      randomStartIndex = Math.floor(Math.random() * (maxStartIndex + 1));
    } else {
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

window.exports = {
  createBoard,
  addShips,
};
