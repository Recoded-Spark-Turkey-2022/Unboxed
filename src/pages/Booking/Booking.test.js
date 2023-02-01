import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Booking from './Booking';
import { store } from '../../app/store';

afterEach(() => {
  cleanup();
});

test('Booking page', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Booking />
      </BrowserRouter>
    </Provider>
  );
  const BookingElement = screen.getByTestId('Booking');
  expect(BookingElement).toBeInTheDocument();
});
