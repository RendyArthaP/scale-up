import Home from "..";
import { render, screen } from "@testing-library/react";
import React from "react";

it("rendering test", () => {
  render(<Home />);
  const element = screen.getByText("test");
  expect(element).toBeInTheDocument();
});
