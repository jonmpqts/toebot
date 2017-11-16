import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';
import * as classNames from 'classnames';
import './Square.css';

interface Props {
    currentPlayer: 'X' | 'O';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const OpenSquare = ({ currentPlayer, onClick }: Props) => {
    const classes = {
        square: true,
        open: true,
    };

    const icon = currentPlayer === 'X' ? 'times' : 'circle-o';

    return (
        <button className={classNames(classes)} onClick={onClick}>
            <FontAwesome name={icon} />
        </button>
    );
};

export default OpenSquare;
