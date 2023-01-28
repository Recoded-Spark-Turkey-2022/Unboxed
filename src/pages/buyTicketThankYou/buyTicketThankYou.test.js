import { cleanup, render, screen } from '@testing-library/react';
import BuyTicketThankYou from './BuyTicketThankYou';

afterEach(() => {
  cleanup();
});

test('Renders Login/signup Buttons', () => {
  render(<BuyTicketThankYou />);
  const loginButtonElement = screen.getByTestId('buyTicketThankYou');
  expect(loginButtonElement).toBeInTheDocument();
});
