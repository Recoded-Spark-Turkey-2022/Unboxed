import { cleanup,render,screen } from "@testing-library/react";
import TeamM from "./TeamM";

afterEach(()=>{
    cleanup()
})

test("Renders Login/signup Buttons",()=>{
    render(<TeamM />)
    const TeamMElement= screen.getByTestId("TeamM")
    expect (TeamMElement).toBeInTheDocument()
})