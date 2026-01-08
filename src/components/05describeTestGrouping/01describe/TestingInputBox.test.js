/*DESCRIBE FUNCTION HAS TWO PARAMS: 
1. Description of group
2. Callback Function

//SYNTAX
describe("input group", () => {});
*/

import { render, screen } from "@testing-library/react";
import TestingInputBox from "./TestingInputBox";

//so this represents now whole input group
describe("input group", () => {
  //checks whether input exists or not
  test("Input box exists or not", () => {
    render(<TestingInputBox />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
  });

  //checks for the input attribute
  test("Check input attribute", () => {
    render(<TestingInputBox />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });

  //input check for id
  test("Check input id attribute", () => {
    render(<TestingInputBox />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("id", "userId");
  });

  //checks input by placeholder
  test("Checking by placeholder", () => {
    render(<TestingInputBox />);
    const placeholder = screen.getByPlaceholderText("Enter User Name");
    expect(placeholder).toBeInTheDocument();
  });
});

describe("UI group", () => {
  //checks whether input exists or not
  test("UI Input box exists or not", () => {
    render(<TestingInputBox />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
  });

  //checks for the input attribute
  test("UI Check input attribute", () => {
    render(<TestingInputBox />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });

  //input check for id
  test("UI Check input id attribute", () => {
    render(<TestingInputBox />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("id", "userId");
  });

  //checks input by placeholder
  test("UI Checking by placeholder", () => {
    render(<TestingInputBox />);
    const placeholder = screen.getByPlaceholderText("Enter User Name");
    expect(placeholder).toBeInTheDocument();
  });
});

describe("API group", () => {
  //checks whether input exists or not
  test("API Input box exists or not", () => {
    render(<TestingInputBox />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
  });

  //checks for the input attribute
  test("API Check input attribute", () => {
    render(<TestingInputBox />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });

  //input check for id
  test("API Check input id attribute", () => {
    render(<TestingInputBox />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("id", "userId");
  });

  //checks input by placeholder
  test("API Checking by placeholder", () => {
    render(<TestingInputBox />);
    const placeholder = screen.getByPlaceholderText("Enter User Name");
    expect(placeholder).toBeInTheDocument();
  });
});
