import { cleanup,render,screen } from "@testing-library/react";
import LoginButtons from "./LoginButtons";

afterEach(()=>{
    cleanup()
})

test("Renders Login/signup Buttons",()=>{
    render(<LoginButtons />)
    const loginButtonElement= screen.getByTestId("LoginButtons")
    expect (loginButtonElement).toBeInTheDocument()
})