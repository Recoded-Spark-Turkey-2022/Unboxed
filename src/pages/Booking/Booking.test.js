import { cleanup, render, screen } from '@testing-library/react';
import Booking from './Booking';

afterEach(() => {
  cleanup();
});

test('Booking page', () => {
  render(<Booking />);
  const BookingElement = screen.getByTestId('Booking');
  expect(BookingElement).toBeInTheDocument();
});
