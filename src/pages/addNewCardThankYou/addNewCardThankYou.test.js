import { cleanup, render, screen } from '@testing-library/react';
import AddNewCardThankYou from './AddNewCardThankYou';

afterEach(() => {
  cleanup();
});

test('Renders Login/signup Buttons', () => {
  render(<AddNewCardThankYou />);
  const loginButtonElement = screen.getByTestId('addNewCardThankYou');
  expect(loginButtonElement).toBeInTheDocument();
});
