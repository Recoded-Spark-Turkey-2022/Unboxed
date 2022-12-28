import { cleanup,render,screen} from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";


afterEach(()=>{
    cleanup()
})

test('Navabr renders', ()=>{
    act(()=> render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    ))
    const currentUser = screen.getByTestId("currentUser")
    expect(currentUser).toBeInTheDocument()
})