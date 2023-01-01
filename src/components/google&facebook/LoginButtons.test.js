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


//   describe("Login Buttons", () => {
//     it("Calls onClick prop when clicked", async () => {
//         const handleClick  = jest.fn()
//         render(<LoginButtons googleLogin={handleClick } />)
//         const button = screen.queryByTestId('googleButton')
//         fireEvent.click(button);
//         expect(handleClick).toHaveBeenCalled();
//     });
//   });