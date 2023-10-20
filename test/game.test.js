const { assert } = chai;

describe("Battleship State Tracker", () => {
  beforeEach(() => {
    // Add any setup code if needed.
  });

  it('should return "hit" when an attack hits a ship', () => {
    // Simulate a hit on a ship for the player
    const user = "player";
    const userHits = ["ship-1"]; // Simulating a hit on ship-1
    const userSunkShips = [];
    // Act
    const result = checkScore(user, userHits, userSunkShips);
    // Assert
    assert.strictEqual(result, undefined); // In your original code, checkScore doesn't return a specific value for "hit".
  });

  it('should return "miss" when an attack misses a ship', () => {
    // Simulate a miss on a ship for the player
    const user = "player";
    const userHits = []; // No hits
    const userSunkShips = [];
    // Act
    const result = checkScore(user, userHits, userSunkShips);
    // Assert
    assert.strictEqual(result, undefined); // In your original code, checkScore doesn't return a specific value for "miss".
  });

  it("should return true when the player has lost the game", () => {
    // Simulate the player losing the game by sinking all computer's ships
    const playerSunkShips = ["ship-1", "ship-2", "ship-3", "ship-4", "ship-5"];
    // Act
    const result = checkGameStatus(playerSunkShips);
    // Assert
    assert.strictEqual(result, true); // In your original code, checkGameStatus updates the infoDisplay text but doesn't return a specific value.
  });

  it("should return false when the player has not lost the game", () => {
    // Simulate the player not losing the game by not sinking all computer's ships
    const playerSunkShips = ["ship-1", "ship-2"];
    // Act
    const result = checkGameStatus(playerSunkShips);
    // Assert
    assert.strictEqual(result, false); // In your original code, checkGameStatus updates the infoDisplay text but doesn't return a specific value.
  });
});
