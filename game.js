
const maze = [
    [1, 0, 1, 0, 9],
    [0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 0]
];

let playerPosition = { x: 1, y: 1 };

function renderMaze() {
    const container = document.getElementById('game-container');
    container.innerHTML = '';
    
    maze.forEach((row, y) => {
        row.forEach((cell, x) => {
            const div = document.createElement('div');
            div.classList.add('cell');

            if (cell === 1) div.classList.add('wall');
            else if (cell === 0) div.classList.add('path');
            else if (cell === 9) div.classList.add('exit');

            if (playerPosition.x === x && playerPosition.y === y) div.classList.add('player');

            // Add torches to random positions
            if (cell === 0 && Math.random() < 0.1) {
                const torch = document.createElement('div');
                torch.classList.add('torch');
                div.appendChild(torch);
            }

            // Append the div to the game container
            container.appendChild(div);
        });
    });
}

renderMaze();
