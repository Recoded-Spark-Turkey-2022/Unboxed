import { cleanup, render, screen } from '@testing-library/react';
import Title from './Title';

afterEach(() => {
  cleanup();
});

test('Renders Login/signup Buttons', () => {
  render(<Title />);
  const titleElement = screen.getByTestId('title');
  expect(titleElement).toBeInTheDocument();
});
