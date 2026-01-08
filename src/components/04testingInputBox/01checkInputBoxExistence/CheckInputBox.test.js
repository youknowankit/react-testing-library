import { render, screen } from "@testing-library/react";
import CheckInputBox from "./CheckInputBox";

//Check whether input exists or not
test("Input box exists or not", () => {
  render(<CheckInputBox />);
  let checkInput = screen.getByRole("textbox");
  expect(checkInput).toBeInTheDocument();
});
