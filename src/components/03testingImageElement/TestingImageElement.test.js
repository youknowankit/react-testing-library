import { render, screen } from "@testing-library/react";
import TestingImageElement from "./TestingImageElement";

test("testing image element", () => {
  render(<TestingImageElement />);

  const title = screen.getByTitle("eye image");
  expect(title).toBeInTheDocument();
});
