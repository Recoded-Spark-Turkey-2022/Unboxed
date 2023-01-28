import { cleanup, screen, render } from '@testing-library/react';
import SignupThanks from './SignupThanks';

afterEach(() => {
  cleanup();
});

test('should render SignupForm', () => {
  render(<SignupThanks />);
  const signupElement = screen.getByTestId('signupThanks');
  expect(signupElement).toBeInTheDocument();
});
