import { nextMove } from './game';

test('O blocks initial move', () => {
    const boardState = 'X........';
    const move = nextMove('O', boardState);
    expect(move).toEqual(4);
});

test('X picks winning move', () => {
    const boardState = 'O.XX..XOO';
    const move = nextMove('X', boardState);
    expect(move).toEqual(4);
});

test('O picks best move', () => {
    const boardState = '.X...XOOX';
    const move = nextMove('O', boardState);
    expect(move).toEqual(2);
});
