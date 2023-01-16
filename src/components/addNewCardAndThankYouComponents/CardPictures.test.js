import { cleanup, render, screen } from '@testing-library/react';
import CardPictures from './CardPictures';

afterEach(() => {
  cleanup();
});

test('Renders Login/signup Buttons', () => {
  render(<CardPictures />);
  const cardPictureElement = screen.getByTestId('cardPictures');
  expect(cardPictureElement).toBeInTheDocument();
});
