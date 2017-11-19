import { State } from './reducer';
import { createSelector } from 'reselect';

export const getCurrentPlayer = (state: State) =>
    state.currentPlayer;

export const getBoardState = (state: State) =>
    state.boardState;

const winningStates = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

export const getWinner = createSelector(
    getBoardState,
    (boardState) => {
        for (let i = 0; i < winningStates.length; i++) {
            const winningState = winningStates[i];
            const square1 = boardState[winningState[0]];
            const square2 = boardState[winningState[1]];
            const square3 = boardState[winningState[2]];

            if (square1 !== '.' && square1 === square2 && square2 === square3) {
                return square1;
            }
        }

        for (let i = 0; i < boardState.length; i++) {
            if (boardState[i] === '.') {
                return null;
            }
        }

        return 'XO';
    }
);
