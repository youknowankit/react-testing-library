import { render, screen } from "@testing-library/react";
import TestTextOnScreen from "./TestTextOnScreen";

test("testing text on screen", () => {
  render(<TestTextOnScreen />);

  const text = screen.getByText("First React test case");
  expect(text).toBeInTheDocument();
});
