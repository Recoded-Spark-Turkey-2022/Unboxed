import Carousel from './Carousel';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Slider from 'react-slick';
import { act } from 'react-dom/test-utils';

test('should render Carousel component', () => {
  act(() =>
    render(
      <BrowserRouter>
        <Carousel />
      </BrowserRouter>
    )
  );
  const blogImage = screen.getByTestId('blogImage');
  expect(blogImage).toBeInTheDocument();
});
