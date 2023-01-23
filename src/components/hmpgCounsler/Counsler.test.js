import { cleanup, render, screen } from '@testing-library/react';
import Counsler from './Counsler';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

afterEach(() => {
  cleanup();
});

test('Counsler renders', () => {
  act(() =>
    render(
      <BrowserRouter>
        <Counsler />
      </BrowserRouter>
    )
  );
  const CounslerRendering = screen.getByTestId('counselor');
  expect(CounslerRendering).toBeInTheDocument();
});
