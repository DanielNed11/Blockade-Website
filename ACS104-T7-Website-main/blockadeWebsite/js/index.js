// INDEX PAGE – BOARD SETUP
const board = document.getElementById('board');
if (board) {
    const colorPattern = [
        ['green', 'blue', 'blue', 'blue', 'red'],
        ['red', 'red', 'red', 'blue', 'yellow'],
        ['red', 'green', 'clear', 'blue', 'yellow'],
        ['red', 'green', 'yellow', 'yellow', 'yellow'],
        ['yellow', 'green', 'green', 'green', 'blue']
    ];

    const cornerColors = {
        '0-0': 'green',
        '0-4': 'red',
        '4-0': 'yellow',
        '4-4': 'blue'
    };

    function createTile(row, col) {
        const tile = document.createElement('div');
        tile.className = 'tile';

        const baseColor = colorPattern[row][col];
        if (cornerColors[`${row}-${col}`]) {
            const color = cornerColors[`${row}-${col}`];
            for (let i = 0; i < 5; i++) {
                const medium = document.createElement('div');
                medium.className = 'piece medium';
                medium.classList.add(color);
                medium.style.transform = `translateZ(${i * 20}px)`;
                tile.appendChild(medium);
            }
        } else if (baseColor !== 'clear') {
            const large = document.createElement('div');
            large.className = 'piece large';
            large.classList.add(baseColor);
            tile.appendChild(large);

            const small = document.createElement('div');
            small.className = 'piece small';
            small.classList.add(baseColor);
            small.style.transform = `translateZ(20px)`;
            tile.appendChild(small);
        }

        return tile;
    }

    function setUpBoard() {
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                board.appendChild(createTile(row, col));
            }
        }
    }
    setUpBoard();
}