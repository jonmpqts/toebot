import { createAction } from 'redux-actions';

export const SQUARE_OCCUPIED = 'SQUARE_OCCUPIED';
export const GAME_RESTARTED = 'GAME_RESTARTED';

export interface SquareOccupied {
    player: 'X' | 'O';
    squareNumber: number;
}

export interface GameRestarted {}

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

export const restartGame =
    createAction<GameRestarted>(
        GAME_RESTARTED,
        () => ({})
    );
