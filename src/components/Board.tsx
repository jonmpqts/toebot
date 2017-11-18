import * as React from 'react';
import './Board.css';
import OpenSquare from './OpenSquare';
import OccupiedSquare from './OccupiedSquare';

interface Props {
    currentPlayer: 'X' | 'O';
    state: string;
    onSquareClick: (id: number) => void;
}

const Board = ({ currentPlayer, state, onSquareClick }: Props) => {
    const squares = state.split('').map((s, i) => {
        if (s === 'X') {
            return <OccupiedSquare key={i} occupiedBy="X" />;
        }

        if (s === 'O') {
            return <OccupiedSquare key={i} occupiedBy="O" />;
        }

        return (
            <OpenSquare
                key={i}
                currentPlayer={currentPlayer}
                onClick={() => onSquareClick(i)}
            />
        );
    });

    return (
        <div className="board">
            {squares}
        </div>
    );
};

export default Board;
