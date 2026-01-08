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

