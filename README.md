# Battleship Game

![Game Screenshot](./public/battleship.png)

## Introduction

This is a classic Battleship game implemented in JavaScript, HTML, and CSS. The game allows you to place your fleet of ships on a grid and take turns attacking your opponent's grid. The goal is to sink all of your opponent's ships before they sink yours.

## Features

- Place your ships on the grid by dragging and dropping.
- Play against the computer, which will take turns attacking your grid.
- Toggle ship placement orientation (horizontal/vertical).
- View game messages in the information display.
- A user-friendly interface with a responsive design.

## How to Play

1. Start by placing your fleet of ships on the player's grid. You can toggle the orientation of the ships using the "Direction" button.

2. Once you've placed all your ships, click the "Start" button to begin the game. The computer will randomly place its ships on the grid.

3. The game starts with your turn. Click on the computer's grid to attack. If you hit an opponent's ship, you will see a "hit" message in the information display. If you miss, you will see a "miss" message.

4. The computer takes its turn, attacking your grid. The game will display the outcome of each attack in the information display.

5. Continue taking turns, alternating between you and the computer, until one of the following conditions is met:
   - You sink all of the computer's ships. You win!
   - The computer sinks all of your ships. You lose!

## Development

The game was developed using HTML, CSS, and JavaScript. It includes features like drag-and-drop ship placement and logic for the computer's turns. Ships are represented as CSS classes on the grid, and their placement is checked for validity.

## Author

- [Your Name]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
