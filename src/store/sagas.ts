import { fork, put, select, take } from 'redux-saga/effects';
import {
    occupySquare
} from './actions';
import { getCurrentPlayer, getBoardState } from './selectors';
import { State } from './reducer';
import { nextMove } from '../game';

const playerIsComputer = (state: State) => getCurrentPlayer(state) === 'X';

function* waitFor(selector: (state: State) => boolean, saga: () => void) {
    if (yield select(selector)) {
        yield fork(saga);
    }

    while (true) {
        yield take('*');
        
        if (yield select(selector)) {
            yield fork(saga);
        }
    }
}

function* makeNextMove() {
    const currentPlayer = yield select(getCurrentPlayer);
    const boardState = yield select(getBoardState);

    yield put(occupySquare(currentPlayer, nextMove(currentPlayer, boardState)));
}

export default () => {
    return function* root() {
        yield waitFor(playerIsComputer, makeNextMove);
    };
};
