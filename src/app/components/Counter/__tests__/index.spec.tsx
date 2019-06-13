import Button from "@material-ui/core/Button";
import { fireEvent, getByTestId, render } from "@testing-library/react";
import { shallow } from "enzyme";
import * as React from "react";
import reactTestRenderer from "react-test-renderer";
// tslint:disable-next-line: import-name
import Counter from "../index";

/*
 * Tests using react-test-renderer
 */

test("Component renders", () => {
  const counter = reactTestRenderer.create(<Counter />);
  const tree = counter.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Component renders with an initial count", () => {
  const counter = reactTestRenderer.create(<Counter initialCount={2} />);
  const tree = counter.toJSON();
  expect(tree).toMatchSnapshot();
});

/*
 * Tests using enzyme
 */

test("should contain a button", () => {
  const counter = shallow(<Counter />);
  expect(counter.find(Button)).toHaveLength(1);
});
test("Component increments count when button is clicked", () => {
  const counter = shallow(<Counter initialCount={0} />);
  expect(counter.text()).toEqual("You clicked 0 timesClick me");
  counter.find(Button).simulate("click");
  expect(counter.text()).toEqual("You clicked 1 timesClick me");
  counter.find(Button).simulate("click");
  counter.find(Button).simulate("click");
  expect(counter.text()).toEqual("You clicked 3 timesClick me");
});

/*
 * Tests using react-testing-library
 */
test("App loads with initial state of 0", () => {
  const { container } = render(<Counter />);
  const countValue = getByTestId(container, "byop-app__counter-count-value");
  expect(countValue.textContent).toBe("0");
});

test("That the button works", () => {
  const { container } = render(<Counter />);
  const countValue = getByTestId(container, "byop-app__counter-count-value");
  const increment = getByTestId(container, "byop-app__counter-button");
  expect(countValue.textContent).toBe("0");
  fireEvent.click(increment);
  expect(countValue.textContent).toBe("1");
  fireEvent.click(increment);
  fireEvent.click(increment);
  expect(countValue.textContent).toBe("3");
});
