import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import YellowSec from './YellowSection';
import { store } from '../../app/store';

afterEach(() => {
  cleanup();
});

test('Renders Login/signup Buttons', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <YellowSec />
      </BrowserRouter>
    </Provider>
  );
  const YellowSecElement = screen.getByTestId('YellowSec');
  expect(YellowSecElement).toBeInTheDocument();
});
