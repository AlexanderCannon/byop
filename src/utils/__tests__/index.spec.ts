import { addVariadic, curry } from "../";

describe("variadic add", () => {
  test("add two numbers", () => {
    expect(addVariadic(2, 3)).toBe(5);
    expect(addVariadic(5, 5)).toBe(10);
  });
  test("add three numbers", () => {
    expect(addVariadic(1, 2, 3)).toBe(6);
  });

  test("add 100 numbers", () => {
    const numbers = [...Array(100).keys()];
    expect(addVariadic(...numbers)).toBe(4950);
  });
});
describe("curry", () => {
  test("delays a function execution", () => {
    expect(curry(addVariadic)(1)()(2)).toBe(3);
    expect(curry(addVariadic)(1)()()()(2)).toBe(3);
    expect(curry(addVariadic)()()(1)(2)).toBe(3);
  });
  test("executes immediately", () => {
    expect(curry(addVariadic, 1, 2)).toBe(3);
    expect(curry(addVariadic)(1)(2)).toBe(3);
    expect(curry(addVariadic)(1, 2)).toBe(3);
  });
});
