import { cleanup,render,screen } from "@testing-library/react";
import YellowSec from "./YellowSection";

afterEach(()=>{
    cleanup()
})

test("Renders Login/signup Buttons",()=>{
    render(<YellowSec />)
    const YellowSecElement= screen.getByTestId("YellowSec")
    expect (YellowSecElement).toBeInTheDocument()
})