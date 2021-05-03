import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import CompanyCard from './CompanyCard';

it("renders without crashing", function() {
  render(<MemoryRouter><CompanyCard /></MemoryRouter>);
});

it("matches snapshot", function() {
  const {asFragment} = render(<MemoryRouter><CompanyCard /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});