import reducer, { initialState } from '../reducer';
import { occupySquare } from '../actions';
import {
    getCurrentPlayer,
    getBoardState,
    getWinner
} from '../selectors';

const state = reducer(
    Object.assign(initialState, {
        currentPlayer: 'O',
        boardState: 'X........'
    }),
    occupySquare('O', 1));

test('X is current player', () => {
    expect(getCurrentPlayer(state)).toEqual('X');
});

test('board occupied by O', () => {
    expect(getBoardState(state)).toEqual('XO.......');
});

test('game not over', () => {
    expect(getWinner(state)).toEqual(null);
});
