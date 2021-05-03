import React from "react";
import { render } from "@testing-library/react";
import JobList from './JobList';

it("renders without crashing", function() {
  render(<JobList />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<JobList />);
  expect(asFragment()).toMatchSnapshot();
});