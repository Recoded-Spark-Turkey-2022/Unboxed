import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import HeroSec from './HeroSection';
import { store } from '../../app/store';

afterEach(() => {
  cleanup();
});

test('Renders Login/signup Buttons', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <HeroSec />
      </BrowserRouter>
    </Provider>
  );
  const HeroSecElement = screen.getByTestId('HeroSec');
  expect(HeroSecElement).toBeInTheDocument();
});
