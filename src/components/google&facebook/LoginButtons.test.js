import { cleanup, render, screen } from '@testing-library/react';
import LoginButtons from './LoginButtons';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { BrowserRouter } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Renders Login/signup Buttons', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginButtons />
      </BrowserRouter>
    </Provider>
  );
  const loginButtonElement = screen.getByTestId('LoginButtons');
  expect(loginButtonElement).toBeInTheDocument();
});

// describe("Login Buttons", () => {
//   it("Calls onClick prop when clicked", async () => {
//       const handleClick  = jest.fn()
//       render(<LoginButtons googleLogin={handleClick } />)
//       const button = screen.queryByTestId('googleButton')
//       fireEvent.click(button);
//       expect(handleClick).toHaveBeenCalledTimes(1)
//   });
// });
