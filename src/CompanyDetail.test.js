import React from "react";
import { render } from "@testing-library/react";
import CompanyDetail from './CompanyDetail';

it("renders without crashing", function() {
  render(<CompanyDetail />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<CompanyDetail />);
  expect(asFragment()).toMatchSnapshot();
});