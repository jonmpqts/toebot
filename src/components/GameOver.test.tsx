import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import GameOver from './GameOver';

test('first player wins', () => {
    const component = renderer.create(
        <GameOver
            winner="X"
            onRestartClick={() => { return; }}
        />
    ); 

    expect(component.toJSON()).toMatchSnapshot();
});

test('second player wins', () => {
    const component = renderer.create(
        <GameOver
            winner="O"
            onRestartClick={() => { return; }}
        />
    ); 

    expect(component.toJSON()).toMatchSnapshot();
});

test('draw', () => {
    const component = renderer.create(
        <GameOver
            winner="XO"
            onRestartClick={() => { return; }}
        />
    ); 

    expect(component.toJSON()).toMatchSnapshot();
});

test('responds to restart click', () => {
    let clicked = false;

    const wrapper = mount(
        <GameOver
            winner="X"
            onRestartClick={() => { clicked = true; }}
        />
    );

    wrapper.find('button').simulate('click');
    expect(clicked).toBeTruthy();
});
