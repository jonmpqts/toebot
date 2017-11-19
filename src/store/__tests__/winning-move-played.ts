import reducer, { initialState } from '../reducer';
import { occupySquare } from '../actions';
import {
    getWinner
} from '../selectors';

const state = reducer(
    Object.assign(initialState, {
        currentPlayer: 'X',
        boardState: 'XX.OO....'
    }),
    occupySquare('X', 2)
);

test('X wins', () => {
    expect(getWinner(state)).toEqual('X');
});
