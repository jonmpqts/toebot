export const win = (player: 'X' | 'O', boardState: string) => {
    const winningStates = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winningStates.length; i++) {
        const winningState = winningStates[i];
        const square1 = boardState[winningState[0]];
        const square2 = boardState[winningState[1]];
        const square3 = boardState[winningState[2]];

        if (square1 === player && square2 === player && square3 === player) {
            return true;
        }
    }

    return false;
};

export const availableMoves = (boardState: string) => {
    const moves = [];

    for (let i = 0; i < boardState.length; i++) {
        if (boardState[i] === '.') {
            moves.push(i);
        }
    }

    return moves;
};

export const nextMove = (currentPlayer: 'X' | 'O', boardState: string) => {
    const minimax = (player: 'X' | 'O', board: string) => {
        if (win(player, board)) {
            return { value: player === currentPlayer ? 10 : -10, move: -1 };
        }

        const m = availableMoves(board);

        if (m.length === 0) {
            return { value: 0, move: -1 };
        }

        let bestMove = -1;
        let bestVal = player === currentPlayer ? -10 : 10;

        for (let i = 0; i < m.length; i++) {
            const newState = board.split('');
            newState[m[i]] = player;
            const result = minimax(player === 'X' ? 'O' : 'X', newState.join(''));
            if ((player === currentPlayer && result.value > bestVal)
                || (player !== currentPlayer && result.value < bestVal)) {
                bestVal = result.value;
                bestMove = m[i];
            }
        }

        return { value: bestVal, move: bestMove };
    };

    return minimax(currentPlayer, boardState).move;
};
