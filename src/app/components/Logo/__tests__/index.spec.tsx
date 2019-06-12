import { shallow } from "enzyme";
import * as React from "react";
import reactTestRenderer from "react-test-renderer";
// tslint:disable-next-line: import-name
import Logo from "../index";

/*
 * Tests using react-test-renderer
 */

const componentText =
  "Alexander CannonFounder & CEO of Farpoint Labs. Lover of JavaScript, React, and this lovely audience.Follow him on twitter at:@alexmcanTwitterGithub";

test("Component renders with the defaults", () => {
  const logo = reactTestRenderer.create(<Logo className="test-class" />);
  const tree = logo.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Component renders with colours from vars", () => {
  const logo = reactTestRenderer.create(
    <Logo
      accentColor="var(--color-blue)"
      primaryColor="var(--color-black)"
      className="test-class"
    />
  );
  const tree = logo.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Component renders with random from vars", () => {
  const logo = reactTestRenderer.create(
    <Logo accentColor="pink" primaryColor="green" className="test-class" />
  );
  const tree = logo.toJSON();
  expect(tree).toMatchSnapshot();
});

/*
 * This component doesn't have any interactivity,
 * so it's hard to test using react-testing-library and advanced Enzyme.
 * This component is mostly made using components, which have had their
 * individual behaviours tested previously.
 * All I really care about is "does this render".
 */
