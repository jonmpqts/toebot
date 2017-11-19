import reducer, { initialState } from '../reducer';
import { occupySquare } from '../actions';
import {
    getCurrentPlayer,
    getBoardState
} from '../selectors';

const state = reducer(initialState, occupySquare('X', 1));

test('O is current player', () => {
    expect(getCurrentPlayer(state)).toEqual('O');
});

test('board occupied by X', () => {
    expect(getBoardState(state)).toEqual('.X.......');
});
