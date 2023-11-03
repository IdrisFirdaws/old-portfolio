const board = document.getElementById('board');
        const cells = document.querySelectorAll('[data-cell]');
        const result = document.getElementById('result');
        let currentPlayer = 'X';
        let gameBoard = ['','','','','','','','',''];

        board.addEventListener('click', handleCellClick);
        
        function handleCellClick(e) {
            const cell = e.target;
            const index = Array.from(cells).indexOf(cell);

            if (gameBoard[index] === '' && !checkWinner()) {
                gameBoard[index] = currentPlayer;
                cell.textContent = currentPlayer;
                cell.classList.add('filled');

                if (checkWinner()) {
                    result.textContent = `Player ${currentPlayer} wins!`;
                    highlightWinningCells();
                } else if (gameBoard.every(cell => cell !== '')) {
                    result.textContent = 'It\'s a draw!';
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        }

        function checkWinner() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];

            for (const pattern of winPatterns) {
                const [a, b, c] = pattern;
                if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                    return true;
                }
            }

            return false;
        }

        function highlightWinningCells() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];

            for (const pattern of winPatterns) {
                const [a, b, c] = pattern;
                if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                    cells[a].classList.add('winner');
                    cells[b].classList.add('winner');
                    cells[c].classList.add('winner');
                }
            }
        }