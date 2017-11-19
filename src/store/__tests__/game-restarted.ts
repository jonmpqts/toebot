import reducer, { initialState } from '../reducer';
import { restartGame } from '../actions';
import {
    getCurrentPlayer,
    getBoardState
} from '../selectors';

const state = reducer(
    Object.assign(initialState, {
        currentPlayer: 'O',
        boardState: 'XOX......'
    }),
    restartGame()
);

test('current player reset', () => {
    expect(getCurrentPlayer(state)).toEqual('X');
});

test('board state reset', () => {
    expect(getBoardState(state)).toEqual('.........');
});
