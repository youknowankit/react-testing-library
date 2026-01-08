import sum from "./sum";

/*
test("test_description", callbackFn, timeout-(optional));
test("test_description", () => {}, 3000);

test("sum_function_test", () => {
    expect(sum(10, 10)).toBe(20);
});
*/

//Writing test for sum function
test("testing sum function", () => {
  let a = 10;
  let b = 10;
  let c = 30;
  let output = 50;
  expect(sum(a, b, c)).toBe(output);
});
