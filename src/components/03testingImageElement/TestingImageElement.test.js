import { render, screen } from "@testing-library/react";
import TestingImageElement from "./TestingImageElement";

test("testing image element", () => {
  render(<TestingImageElement />);

  const title = screen.getByTitle("eye image");
  expect(title).toBeInTheDocument();
  //we can also use  mutliple expect if we need to find text as well as image using title
});
