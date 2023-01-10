import { cleanup, render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

afterEach(() => {
  cleanup();
});

afterEach(()=>{
    cleanup()
})

test('Navabr renders', ()=>{
    act(()=> render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    ))
    const navElement = screen.getByTestId("nav")
    expect(navElement).toBeInTheDocument()
})
