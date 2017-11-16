import * as React from 'react';
import Board from './Board';

interface State {
  currentPlayer: 'X' | 'O';
  boardState: string;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentPlayer: 'X',
      boardState: '.........',
    };

    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  handleSquareClick(id: number) {
    let newBoardState = this.state.boardState.split('');
    newBoardState[id] = this.state.currentPlayer;
    this.setState({
      currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X',
      boardState: newBoardState.join(''),
    });
  }

  render() {
    return (
      <Board
        currentPlayer={this.state.currentPlayer}
        state={this.state.boardState}
        onSquareClick={this.handleSquareClick}
      />
    );
  }
}

export default App;
