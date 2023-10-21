/**
 * Check the score and determine if any ships have been sunk by the user.
 * If all the ships of the user's opponent have been sunk, the game stops.
 *
 * @param {string} user - The user's identifier ('player' or 'computer').
 * @param {string[]} userHits - An array of ship names that the user has hit.
 * @param {string[]} userSunkShips - An array to store the names of ships sunk by the user.
 */
function checkScore(user, userHits, userSunkShips) {
  // Define information about ship names and their lengths.
  const shipsInfo = [
    { name: "carrier", length: 5 },
    { name: "battleship", length: 4 },
    { name: "destroyer", length: 3 },
    { name: "submarine", length: 3 },
    { name: "patrol-boat", length: 2 },
  ];

  /**
   * Check if a ship has been sunk and update the game state accordingly.
   *
   * @param {string} shipName - The name of the ship to check.
   * @param {number} shipLength - The length of the ship to check.
   */
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

  // Iterate through each ship and check if it's been sunk.
  shipsInfo.forEach((shipInfo) => {
    const { name, length } = shipInfo;
    checkShip(name, length);
  });
}

/**
 * Check the game status to determine if the game is over.
 * If all the user's ships or the opponent's ships have been sunk, the game stops.
 */
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

// Export functions for use in other files
window.exports = {
  checkScore,
  checkGameStatus,
};
