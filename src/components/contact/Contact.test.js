import { BrowserRouter } from 'react-router-dom';
import Contact from './Contact';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';

test('Renders Contact Form component', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    )

  const contactFormElement = screen.getByTestId('contactForm');
  expect(contactFormElement).toBeInTheDocument();
});
