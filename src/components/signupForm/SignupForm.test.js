import { cleanup, screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignupForm from './SignupForm';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

afterEach(() => {
  cleanup();
});

test('should render SignupForm', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignupForm />
      </BrowserRouter>
    </Provider>
  );
  const signupElement = screen.getByTestId('signup');
  expect(signupElement).toBeInTheDocument();
});
