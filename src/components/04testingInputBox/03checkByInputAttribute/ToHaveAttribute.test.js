import { render, screen } from "@testing-library/react";
import ToHaveAttribute from "./ToHaveAttribute";

//input check for name
test("checking name attribute", () => {
  render(<ToHaveAttribute />);
  const checkInput = screen.getByRole("textbox");
  expect(checkInput).toHaveAttribute("name", "username");
});

//input check for id
test("Check input id attribute", () => {
  render(<ToHaveAttribute />);
  let checkInput = screen.getByRole("textbox");
  expect(checkInput).toHaveAttribute("id", "userId");
});

//checking input value attribute
/*
Though test cases are passed but it will always through an error for thr value as 
it is a static value rather then onChange. Or if you want to render the input as 
ready-only then this error will not show

You provided a `value` prop to a form field without an `onChange` handler. 
This will render a read-only field. If the field should be mutable use `defaultValue`. 
Otherwise, set either `onChange` or `readOnly`. */
test("Check input value attribute", () => {
  render(<ToHaveAttribute />);
  let checkInput = screen.getByRole("textbox");
  expect(checkInput).toHaveAttribute("value", "Ankit");
});
