import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Ticket from './Ticket';

test('should render Ticket component', () => {
  <BrowserRouter>
    render(
    <Ticket />
    );
  </BrowserRouter>;
});
