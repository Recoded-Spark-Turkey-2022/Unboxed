import { cleanup,render,screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

afterEach(()=>{
    cleanup()
})

  test('Text should change when typing function typing', () => {
    render(<LoginForm />)
    const inputElement = screen.getByTestId('emailInput');
    fireEvent.change(inputElement, { target: { value: "joe@gmail.com" } });
    expect(inputElement.value).toBe('joe@gmail.com');
  })

  test('Return "Invalid" in case of invalid input', () => {
    render(<LoginForm />)
    fireEvent.click(screen.getByTestId('loginButton'));
    expect(screen.queryByTestId('loginError')).not.toBeInTheDocument();
  })