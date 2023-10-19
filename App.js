// Select and storing the IDs & Classes
const shipsContainer = document.querySelector(".ships-container");
const shipDirection = document.querySelector("#direction-btn");
const gameBoardsContainer = document.querySelector("#board-container");

let rotate = 0; // Initialize the rotation state outside the function

// Creating options for direction of the ships (Horizontal / Vertical)
function direction() {
  const shipsArray = Array.from(shipsContainer.children);

  // Toggle the rotation state
  rotate = rotate === 0 ? 90 : 0;

  shipsArray.forEach((ship) => (ship.style.transform = `rotate(${rotate}deg)`));
}

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

shipDirection.addEventListener("click", direction);

// Creating Ships using Constructor instead of defining Object Literals
class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }
}

const ship1 = new Ship("ship-1", 5);
const ship2 = new Ship("ship-2", 4);
const ship3 = new Ship("ship-3", 3);
const ship4 = new Ship("ship-4", 3);
const ship5 = new Ship("ship-5", 2);

const ships = [ship1, ship2, ship3, ship4, ship5];
// console.log(ships);

// Randomly place each ship on the game board while avoiding overlapping or splitting
function addShips(ship) {
  const allBoardBlocks = document.querySelectorAll("#computer div");
  let randomBool = Math.random() < 0.5;
  let isHorizontal = randomBool;

  let randomStartIndex;

  if (isHorizontal) {
    // Ensure that the ship can be placed horizontally without wrapping
    randomStartIndex = Math.floor(Math.random() * borderSize * borderSize);
    while ((randomStartIndex % borderSize) + ship.length > borderSize) {
      randomStartIndex = Math.floor(Math.random() * borderSize * borderSize);
    }
  } else {
    // Ensure that the ship can be placed vertically without going out of bounds
    randomStartIndex = Math.floor(Math.random() * borderSize * borderSize);
    while (
      Math.floor(randomStartIndex / borderSize) + ship.length >
      borderSize
    ) {
      randomStartIndex = Math.floor(Math.random() * borderSize * borderSize);
    }
  }

  let shipBlocks = [];

  for (let i = 0; i < ship.length; i++) {
    if (isHorizontal) {
      shipBlocks.push(allBoardBlocks[randomStartIndex + i]);
    } else {
      shipBlocks.push(allBoardBlocks[randomStartIndex + i * borderSize]);
    }
  }

  const notTaken = shipBlocks.every(
    (shipBlock) => !shipBlock.classList.contains("taken")
  );

  if (notTaken) {
    shipBlocks.forEach((shipBlock) => {
      shipBlock.classList.add(ship.name);
      shipBlock.classList.add("taken");
    });
  } else {
    addShips(ship);
  }
}

ships.forEach((ship) => addShips(ship));
