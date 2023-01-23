import { cleanup,render,screen } from "@testing-library/react";
import AboutUs from "./AboutUs";

afterEach(()=>{
    cleanup()
})

test("Renders Login/signup Buttons",()=>{
    render(<AboutUs />)
    const AboutUsElement= screen.getByTestId("AboutUs")
    expect (AboutUsElement).toBeInTheDocument()
})