import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

afterEach(() => {
  cleanup();
});

test('Text should change when typing function typing', () => {
  render(
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );
  const inputElement = screen.getByTestId('emailInput');
  fireEvent.change(inputElement, { target: { value: 'joe@gmail.com' } });
  expect(inputElement.value).toBe('joe@gmail.com');
});

test('Return "Invalid" in case of invalid input', () => {
  render(
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );
  fireEvent.click(screen.getByTestId('loginButton'));
  expect(screen.queryByTestId('loginError')).not.toBeInTheDocument();
});
