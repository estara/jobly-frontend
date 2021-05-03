import React from "react";
import { render } from "@testing-library/react";
import CompanyList from './CompanyList';

it("renders without crashing", function() {
  render(<CompanyList />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<CompanyList />);
  expect(asFragment()).toMatchSnapshot();
});