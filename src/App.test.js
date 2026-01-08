import { render, screen } from "@testing-library/react";
import App from "./App";

/*
imports:
render: to render components on screen
screen: to find anything shown on screen

Test Function: Provided by Jest
test(): used to run tests, has three parameters: 
  1. First Param: Description of test
  2. Second Param: A callback function
  3. Third Param: A timeout function (optional)

callbackFunction: 
1. render(): Render component on the screen
2. screen.getByText: Find by text and assign the element to the const linkElement, inside it is the regex to find the exact match
3. expect(): What to look for, also needs another method
4. toBeInTheDocument: to find inside the document(html)
*/

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
