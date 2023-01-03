import { cleanup, screen, render } from '@testing-library/react';
import SignupForm from './SignupForm';

afterEach(() => {
  cleanup();
});

test('should render SignupForm', () => {
  render(<SignupForm />);
  const signupElement = screen.getByTestId('signup');
  expect(signupElement).toBeInTheDocument();
});
