import reducer, { initialState } from '../reducer';
import { occupySquare } from '../actions';
import {
    getCurrentPlayer,
    getBoardState,
    getWinner
} from '../selectors';

const state = reducer(
    Object.assign(initialState, {
        currentPlayer: 'X',
        boardState: 'XXOOXX.OO'
    }),
    occupySquare('X', 6));

test('game over', () => {
    expect(getWinner(state)).toEqual('XO');
});
