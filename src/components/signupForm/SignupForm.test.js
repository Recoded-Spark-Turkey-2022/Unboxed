import { cleanup, screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignupForm from './SignupForm';

afterEach(() => {
  cleanup();
});

test('should render SignupForm', () => {
  render(
    <BrowserRouter>
      <SignupForm />
    </BrowserRouter>
  );
  const signupElement = screen.getByTestId('signup');
  expect(signupElement).toBeInTheDocument();
});
