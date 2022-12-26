import { render, screen } from '@testing-library/react';
import Subscribe from './Subscribe';

test('Footer is rendering', () => {
  render(<Subscribe />);
  const footerElement = screen.getByTestId('Footer');
  expect(footerElement).toBeInTheDocument();
});
test('Footer is rendering', () => {
  render(<Subscribe />);
  const footerElement = screen.getByTestId('Footer');
  expect(footerElement).toMatchSnapshot();
});


