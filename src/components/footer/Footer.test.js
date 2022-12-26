import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('Footer is rendering', () => {
  render(<Footer />);
  const footerElement = screen.getByTestId('Footer');
  expect(footerElement).toBeInTheDocument();
});
test('Footer is rendering', () => {
  render(<footer />);
  const footerElement = screen.getByTestId('Footer');
  expect(footerElement).toMatchSnapshot();
});


