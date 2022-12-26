import { cleanup,render,screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

test("Renders Login/signup Buttons",()=>{
    render(<LoginForm />)
    const loginFormElement= screen.getByTestId("loginForm")
    expect (loginFormElement).toBeInTheDocument()
})