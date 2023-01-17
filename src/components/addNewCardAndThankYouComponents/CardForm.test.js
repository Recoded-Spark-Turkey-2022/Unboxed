import { BrowserRouter } from 'react-router-dom';
import { act, cleanup, render, screen } from '@testing-library/react';
import CardForm from './CardForm';

afterEach(() => {
  cleanup();
});

test('Renders CardForm', () => {
  act(() =>
    render(
      <BrowserRouter>
        <CardForm />
      </BrowserRouter>
    )
  );
  const cardFormElement = screen.getByTestId('cardForm');
  expect(cardFormElement).toBeInTheDocument();
});
