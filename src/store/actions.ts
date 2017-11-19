import { createAction } from 'redux-actions';

export const SQUARE_OCCUPIED = 'SQUARE_OCCUPIED';

export interface SquareOccupied {
    player: 'X' | 'O';
    squareNumber: number;
}

export const occupySquare =
    createAction<SquareOccupied, 'X' | 'O', number>(
        SQUARE_OCCUPIED,
        (player, squareNumber) => {
            return {
                player: player,
                squareNumber: squareNumber
            };
        }
    );
