import { cleanup,render,screen } from "@testing-library/react";
import HeroSec from "./HeroSection";

afterEach(()=>{
    cleanup()
})

test("Renders Login/signup Buttons",()=>{
    render(<HeroSec />)
    const HeroSecElement= screen.getByTestId("HeroSec")
    expect (HeroSecElement).toBeInTheDocument()
})