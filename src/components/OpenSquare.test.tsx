import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import OpenSquare from './OpenSquare';

test('renders first player', () => {
    const component = renderer.create(
        <OpenSquare currentPlayer="X" />
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('renders second player', () => {
    const component = renderer.create(
        <OpenSquare currentPlayer="O" />
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('responds to click', () => {
    let clicked = false;

    const wrapper = mount(
        <OpenSquare
            currentPlayer="X"
            onClick={() => { clicked = true; }}
        />
    );

    wrapper.find('button').simulate('click');
    expect(clicked).toBeTruthy();
});
