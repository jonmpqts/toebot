import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Store } from 'redux';
import Board from './Board';
import { State, occupySquare, getCurrentPlayer, getBoardState } from '../store';

interface Props {
  currentPlayer: 'X' | 'O';
  boardState: string;
  onSquareClick: (id: number) => void;
}

export const App = ({ currentPlayer, boardState, onSquareClick }: Props) => {
  return (
    <Board
      currentPlayer={currentPlayer}
      state={boardState}
      onSquareClick={onSquareClick}
    />
  );
};

interface StateProps {
  currentPlayer: 'X' | 'O';
  boardState: string;
}

const mapStateToProps = (state: State) => ({
  currentPlayer: getCurrentPlayer(state),
  boardState: getBoardState(state)
});

interface DispatchProps {
  onSquareClick: (player: 'X' | 'O', squareNumber: number) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<Store<State>>) => ({
  onSquareClick: (player: 'X' | 'O', squareNumber: number) =>
    dispatch(occupySquare(player, squareNumber))
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
