import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Edit from './Profile-Edit';

afterEach(() => {
  cleanup();
});

test('Navabr renders', () => {
  act(() =>
    render(
      <BrowserRouter>
        <Edit />
      </BrowserRouter>
    )
  );
  const edit = screen.getByTestId('Edit');
  expect(edit).toBeInTheDocument('Edit');
});
