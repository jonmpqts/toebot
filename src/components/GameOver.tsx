import * as React from 'react';
import './GameOver.css';

interface Props {
    winner: 'X' | 'O' | 'XO';
    onRestartClick: () => void;
}

const GameOver = ({ winner, onRestartClick }: Props) => {
    const text = winner === 'XO'
        ? 'It is a tie!'
        : 'Player ' + (winner === 'X' ? '1' : '2') + ' wins!';

    return (
        <div className="gameover">
            <h2>{text}</h2>
            <button onClick={onRestartClick}>Restart</button>
        </div>
    );
};

export default GameOver;
