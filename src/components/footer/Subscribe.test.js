import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, cleanup, render, screen } from '@testing-library/react';
import Subscribe from './Subscribe';

afterEach(() => {
  cleanup();
});

test('Navabr renders', () => {
  act(() =>
    render(
      <BrowserRouter>
        <Subscribe />
      </BrowserRouter>
    )
  );
  const SubscribeElement = screen.getByTestId('SubscribeTest');
  expect(SubscribeElement).toBeInTheDocument();
});
