import { createSelector } from 'reselect';
import { State } from './reducer';
import { win, availableMoves } from '../game';

export const getCurrentPlayer = (state: State) =>
    state.currentPlayer;

export const getBoardState = (state: State) =>
    state.boardState;

export const getWinner = createSelector(
    getCurrentPlayer,
    getBoardState,
    (currentPlayer, boardState) => {
        const previousPlayer = currentPlayer === 'X' ? 'O' : 'X';

        if (win(previousPlayer, boardState)) {
            return previousPlayer;
        }

        if (availableMoves(boardState).length === 0) {
            return 'XO';
        }

        return null;
    }
);
