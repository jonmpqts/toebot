import * as React from 'react';
import * as renderer from 'react-test-renderer';
import OccupiedSquare from './OccupiedSquare';

test('renders first player', () => {
    const component = renderer.create(
        <OccupiedSquare occupiedBy="X" />
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('renders second player', () => {
    const component = renderer.create(
        <OccupiedSquare occupiedBy="O" />
    );

    expect(component.toJSON()).toMatchSnapshot();
});
