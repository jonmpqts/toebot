import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Board from './Board';

test('empty board', () => {
    const component = renderer.create(
        <Board
            currentPlayer="X"
            state="........."
            onSquareClick={(id) => { return; }}
        />
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('second player move', () => {
    const component = renderer.create(
        <Board
            currentPlayer="O"
            state="X........"
            onSquareClick={(id) => { return; }}
        />
    );

    expect(component.toJSON()).toMatchSnapshot();
});
