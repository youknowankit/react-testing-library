import { render, screen } from "@testing-library/react";
import TestTextOnScreen from "./TestTextOnScreen";

//testing based on text
test("testing text on screen", () => {
  render(<TestTextOnScreen />);

  const text = screen.getByText("First React test case");
  expect(text).toBeInTheDocument();
});

//testing based on pattern
test("testing text pattern on screen", () => {
  render(<TestTextOnScreen />);
  /*This case sensitivity is for case and it passes even if something extra is written in file but nothing in between these letters is tolerated as this behaves like a pattern. */
  const text = screen.getByText(/First React test case/i);
  expect(text).toBeInTheDocument();
});
