import { shallow } from "enzyme";
import * as React from "react";
import reactTestRenderer from "react-test-renderer";
// tslint:disable-next-line: import-name
import Speaker from "../index";

/*
 * Tests using react-test-renderer
 */

const componentText =
  "<Logo />Engineering Transformation ConsultancyFarpoint Labs specalise in DevOps, automation and event sourcing.Check the website at:www.farpointlabs.comTwitterWebsite";

test("Component renders", () => {
  const speaker = reactTestRenderer.create(<Speaker />);
  const tree = speaker.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Component containe the correct text", () => {
  const counter = shallow(<Speaker />);
  expect(counter.text()).toEqual(componentText);
});
/*
 * This component doesn't have any interactivity,
 * so it's hard to test using react-testing-library and advanced Enzyme.
 * This component is mostly made using components, which have had their
 * individual behaviours tested previously.
 * All I really care about is "does this render".
 */
