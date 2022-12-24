import React from "react";
import { render,cleanup,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import App from "./App";

afterEach(()=>{
  cleanup()
})

test("App is rendering", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
  const appElement = screen.getByTestId("App")
  expect(appElement).toBeInTheDocument()
});
