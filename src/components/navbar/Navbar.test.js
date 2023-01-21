import { cleanup, render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

afterEach(() => {
  cleanup();
});

test('Navabr renders', () => {
  act(() =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>
    )
  );
  const currentUser = screen.getByTestId('currentUser');
  expect(currentUser).toBeInTheDocument();
});
