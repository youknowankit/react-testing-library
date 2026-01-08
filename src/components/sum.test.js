import sum from "./sum";

// test("test_description", callbackFn, timeout-(optional));
// test("test_description", () => {}, 3000);

test("sum_function_test", () => {
  expect(sum(10, 10)).toBe(20);
});
