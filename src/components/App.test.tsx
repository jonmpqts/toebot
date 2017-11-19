import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { App } from './App';

it('renders without crashing', () => {
  const component = renderer.create(
    <App
      currentPlayer="X"
      boardState="........."
      winner={null}
      onSquareClick={() => { return; }}
    />
  );

  expect(component.toJSON()).toMatchSnapshot();
});
