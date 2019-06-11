import Button from "@material-ui/core/Button";
import { shallow } from "enzyme";
import * as React from "react";
import reactTestRenderer from "react-test-renderer";
// tslint:disable-next-line: import-name
import Counter from "./Counter";

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
