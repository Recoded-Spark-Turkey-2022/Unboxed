import { cleanup, render, screen } from '@testing-library/react';
import Button from './Button';

afterEach(() => {
  cleanup();
});

test('Renders Login/signup Buttons', () => {
  render(<Button />);
  const buttonElement = screen.getByTestId('buttons');
  expect(buttonElement).toBeInTheDocument();
});
