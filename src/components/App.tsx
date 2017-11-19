import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Store } from 'redux';
import Board from './Board';
import GameOver from './GameOver';
import {
  State,
  occupySquare,
  restartGame,
  getCurrentPlayer,
  getBoardState,
  getWinner
} from '../store';

interface Props {
  currentPlayer: 'X' | 'O';
  boardState: string;
  winner: 'X' | 'O' | 'XO' | null;
  onSquareClick: (id: number) => void;
  onRestartClick: () => void;
}

export const App = ({
  currentPlayer,
  boardState,
  winner,
  onSquareClick,
  onRestartClick
}: Props) => {

  const over = winner
    ? <GameOver winner={winner} onRestartClick={onRestartClick} />
    : null;

  return (
    <div>
      <Board
        currentPlayer={currentPlayer}
        state={boardState}
        onSquareClick={onSquareClick}
      />
      {over}
    </div>
  );
};

interface StateProps {
  currentPlayer: 'X' | 'O';
  boardState: string;
  winner: 'X' | 'O' | 'XO';
}

const mapStateToProps = (state: State) => ({
  currentPlayer: getCurrentPlayer(state),
  boardState: getBoardState(state),
  winner: getWinner(state)
});

interface DispatchProps {
  onSquareClick: (player: 'X' | 'O', squareNumber: number) => void;
  onRestartClick: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch<Store<State>>) => ({
  onSquareClick: (player: 'X' | 'O', squareNumber: number) =>
    dispatch(occupySquare(player, squareNumber)),
  onRestartClick: () =>
    dispatch(restartGame())
});

interface OwnProps {}

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  onSquareClick: (squareNumber: number) => {
    return dispatchProps.onSquareClick(stateProps.currentPlayer, squareNumber);
  }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
