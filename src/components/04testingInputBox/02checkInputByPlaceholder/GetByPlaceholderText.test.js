import { render, screen } from "@testing-library/react";
import GetByPlaceholderText from "./GetByPlaceholderText";

test("checking by placeholder", () => {
  render(<GetByPlaceholderText />);

  const placeholder = screen.getByPlaceholderText("Enter User name");
  expect(placeholder).toBeInTheDocument();
});
