import { BrowserRouter } from 'react-router-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import CardForm from './CardForm';
import { store } from '../../app/store';

afterEach(() => {
  cleanup();
});

test('Renders CardForm', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CardForm />
      </BrowserRouter>
    </Provider>
  );

  const cardFormElement = screen.getByTestId('cardForm');
  expect(cardFormElement).toBeInTheDocument();
});
