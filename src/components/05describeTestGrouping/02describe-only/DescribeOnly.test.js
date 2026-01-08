import { render, screen } from "@testing-library/react";
import DescribeOnly from "./DescribeOnly.js";

//so this represents now whole input group
describe("input group", () => {
  //checks whether input exists or not
  test("Input box exists or not", () => {
    render(<DescribeOnly />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
  });

  //checks for the input attribute
  test("Check input attribute", () => {
    render(<DescribeOnly />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });

  //input check for id
  test("Check input id attribute", () => {
    render(<DescribeOnly />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("id", "userId");
  });

  //checks input by placeholder
  test("Checking by placeholder", () => {
    render(<DescribeOnly />);
    const placeholder = screen.getByPlaceholderText("Enter User Name");
    expect(placeholder).toBeInTheDocument();
  });
});

//Ensures that only this group runs and rest all are skipped
describe.only("UI group", () => {
  //checks whether input exists or not
  test("UI Input box exists or not", () => {
    render(<DescribeOnly />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
  });

  //checks for the input attribute
  test("UI Check input attribute", () => {
    render(<DescribeOnly />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });

  //input check for id
  test("UI Check input id attribute", () => {
    render(<DescribeOnly />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("id", "userId");
  });

  //checks input by placeholder
  test("UI Checking by placeholder", () => {
    render(<DescribeOnly />);
    const placeholder = screen.getByPlaceholderText("Enter User Name");
    expect(placeholder).toBeInTheDocument();
  });
});

describe("API group", () => {
  //checks whether input exists or not
  test("API Input box exists or not", () => {
    render(<DescribeOnly />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
  });

  //checks for the input attribute
  test("API Check input attribute", () => {
    render(<DescribeOnly />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });

  //input check for id
  test("API Check input id attribute", () => {
    render(<DescribeOnly />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("id", "userId");
  });

  //checks input by placeholder
  test("API Checking by placeholder", () => {
    render(<DescribeOnly />);
    const placeholder = screen.getByPlaceholderText("Enter User Name");
    expect(placeholder).toBeInTheDocument();
  });
});
