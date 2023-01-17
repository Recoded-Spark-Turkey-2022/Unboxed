import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

afterEach(() => {
  cleanup();
});

test('Text should change when typing function typing', () => {
  render(<Input />);
  const inputElement = screen.getByTestId('input');
  fireEvent.change(inputElement, { target: { value: 'joe@gmail.com' } });
  expect(inputElement.value).toBe('joe@gmail.com');
});
