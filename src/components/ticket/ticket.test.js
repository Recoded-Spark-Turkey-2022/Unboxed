import { render, screen, cleanup } from '@testing-library/react';
import Ticket from './Ticket';

test('should render Ticket component', () => {
  render(<Ticket />);
});
