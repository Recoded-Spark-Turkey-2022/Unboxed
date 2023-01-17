import { cleanup,render,screen } from "@testing-library/react";
import Comm from "./Comm";

afterEach(()=>{
    cleanup()
})

test("Renders Login/signup Buttons",()=>{
    render(<Comm />)
    const CommElement= screen.getByTestId("Comm")
    expect (CommElement).toBeInTheDocument()
})
