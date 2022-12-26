import { cleanup,render,screen } from "@testing-library/react";
import LoginButtons from "./LoginButtons";

test("Renders Login/signup Buttons",()=>{
    render(<LoginButtons />)
    const loginButtonElement= screen.getByTestId("LoginButtons")
    expect (loginButtonElement).toBeInTheDocument()
})