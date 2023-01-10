import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { act, cleanup, render, screen } from '@testing-library/react';
import Footer from './Footer';

afterEach(() => {
  cleanup();
});

test('Navabr renders', () => {
  act(() =>
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
  );
  const footerElement = screen.getByTestId('FooterTest');
  expect(footerElement).toBeInTheDocument();
});
