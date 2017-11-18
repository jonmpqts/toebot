import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';
import * as classNames from 'classnames';
import './Square.css';

interface Props {
    occupiedBy: 'X' | 'O';
}

const OccupiedSquare = ({ occupiedBy }: Props) => {
    const classes = {
        square: true,
    };

    classes[occupiedBy] = true;

    const icon = occupiedBy === 'X' ? 'times' : 'circle-o';

    return (
        <div className={classNames(classes)}>
            <FontAwesome name={icon} />
        </div>
    );
};

export default OccupiedSquare;
