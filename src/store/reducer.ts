import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from './actions';

export interface State {
    currentPlayer: 'X' | 'O';
    boardState: string;
}

export const initialState: State = {
    currentPlayer: 'X',
    boardState: '.........'
};

const currentPlayer = handleActions<'X' | 'O', actions.SquareOccupied>(
    {
        [actions.SQUARE_OCCUPIED]: (state, action) => {
            if (!action.payload) {
                return state;
            }

            return state === 'X' ? 'O' : 'X';
        }
    },
    initialState.currentPlayer
);

const boardState = handleActions<string, actions.SquareOccupied>(
    {
        [actions.SQUARE_OCCUPIED]: (state, action) => {
            if (!action.payload) {
                return state;
            }

            const a = state.split('');
            a[action.payload.squareNumber] = action.payload.player;
            return a.join('');
        }
    },
    initialState.boardState);

export default combineReducers<State>({
    currentPlayer,
    boardState
});
