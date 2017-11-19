import { State } from './reducer';

export const getCurrentPlayer = (state: State) =>
    state.currentPlayer;

export const getBoardState = (state: State) =>
    state.boardState;
