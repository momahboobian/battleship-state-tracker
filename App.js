// Select and storing the IDs & Classes
const shipsContainer = document.querySelector(".ships-container");
const shipDirection = document.querySelector("#direction-btn");
const startBtn = document.querySelector("#start-btn");
const infoDisplay = document.querySelector("#info");
const turnDisplay = document.querySelector("#turn-state");

let rotate = 0; // Initialize the rotation state outside the function

// Creating options for direction of the ships (Horizontal / Vertical)
function direction() {
  const shipsArray = Array.from(shipsContainer.children);

  // Toggle the rotation state
  rotate = rotate === 0 ? 90 : 0;

  shipsArray.forEach((ship) => (ship.style.transform = `rotate(${rotate}deg)`));
}

shipDirection.addEventListener("click", direction);

// Creating Ships using Constructor instead of defining Object Literals

const ship1 = new Ship("carrier", 5);
const ship2 = new Ship("battleship", 4);
const ship3 = new Ship("destroyer", 3);
const ship4 = new Ship("submarine", 3);
const ship5 = new Ship("patrol-boat", 2);

const ships = [ship1, ship2, ship3, ship4, ship5];
let notDropped;

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

ships.forEach((ship) => addShips("computer", ship));

// Handling player ships <<<<-----------------------------------
const optionShips = document.querySelectorAll(".ships-container > div");

optionShips.forEach((ship) => {
  ship.addEventListener("dragstart", dragStart);
  ship.addEventListener("dragend", dragEnd);
});

let draggedShip = null;

function dragStart(event) {
  // Store the ship being dragged
  draggedShip = event.target;

  // Add a class to indicate dragging
  draggedShip.classList.add("dragging");
}

/**
 * Handle the end of a drag operation.
 */
function dragEnd() {
  if (draggedShip) {
    draggedShip.classList.remove("dragging");
  }
}

const allowDrop = (e) => {
  e.preventDefault();
};

const dragOver = (e) => {
  e.preventDefault();
};

const dragEnter = (e) => {
  e.target.classList.add("hovered");
};

const dragLeave = (e) => {
  e.target.classList.remove("hovered");
};

/**
 * Handle the drop operation.
 * @param {Event} e - The drop event.
 */
function drop(e) {
  e.target.classList.remove("hovered");
  const shipId = draggedShip.getAttribute("data-id");
  addShips("player", ships[shipId], parseInt(event.target.id));
  if (draggedShip) {
    shipsContainer.removeChild(draggedShip);
    draggedShip = null;
  }
}

// Add event listeners to game board blocks and ships
const blocksAndShips = document.querySelectorAll(
  ".game-board .block, .ships-container > div"
);

blocksAndShips.forEach(function (element) {
  element.addEventListener("dragstart", dragStart);
  element.addEventListener("dragend", dragEnd);
  element.addEventListener("dragover", dragOver);
  element.addEventListener("dragenter", dragEnter);
  element.addEventListener("dragleave", dragLeave);
  element.addEventListener("drop", drop);
});

startBtn.addEventListener("click", startGame);

function handleClick(e) {
  if (!gameOver) {
    if (e.target.classList.contains("taken")) {
      e.target.classList.add("hit");
      infoDisplay.textContent = "Computer's ship has been hit!";

      let classes = Array.from(e.target.classList);
      classes = classes.filter((className) => className !== "block");
      classes = classes.filter((className) => className !== "hit");
      classes = classes.filter((className) => className !== "taken");
      playerHits.push(...classes);

      checkScore("player", playerHits, playerSunkShips);
    }
    if (!e.target.classList.contains("taken")) {
      infoDisplay.textContent = "Nothing hit this time";
      e.target.classList.add("empty");
    }
    playerTurn = false;
    const allBoardBlocks = document.querySelectorAll("#computer div");
    allBoardBlocks.forEach((block) => block.replaceWith(block.cloneNode(true)));
    setTimeout(computerTurn, 1000);
  }
}
