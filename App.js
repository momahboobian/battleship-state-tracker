// Storing the IDs
const shipsContainer = document.querySelector(".ships-container");
const shipDirection = document.querySelector("#direction-btn");

// Creating function for direction of the ship (Horizontal / Vertical)
function direction() {
  const shipsArray = Array.from(shipsContainer.children);
  shipsArray.forEach((ship) => (ship.style.transform = "rotate(90deg"));
}

shipDirection.addEventListener("click", direction);
