import reducer, { initialState } from '../reducer';
import {
    getCurrentPlayer,
    getBoardState,
    getWinner
} from '../selectors';

const state = reducer(initialState, { type: 'INIT' });

test('X is first player', () => {
    expect(getCurrentPlayer(state)).toEqual('X');
});

test('board starts empty', () => {
    expect(getBoardState(state)).toEqual('.........');
});

test('game not over', () => {
    expect(getWinner(state)).toEqual(null);
});
