import React from "react";
import { render } from "@testing-library/react";
import Profile from './Profile';

it("renders without crashing", function() {
  render(<Profile />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<Profile />);
  expect(asFragment()).toMatchSnapshot();
});