import * as React from 'react';
import './GameOver.css';

interface Props {
    winner: 'X' | 'O' | 'XO';
}

const GameOver = ({ winner }: Props) => {
    const text = winner === 'XO'
        ? 'It is a tie!'
        : 'Player ' + (winner === 'X' ? '1' : '2') + ' wins!';

    return (
        <div className="gameover">
            <h2>{text}</h2>
        </div>
    );
};

export default GameOver;
