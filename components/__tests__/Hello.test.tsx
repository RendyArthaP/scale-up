import { render, screen } from "@testing-library/react";
import Hello from "~/components/Hello";

it("renders hello", () => {
  render(<Hello />);
  const element = screen.getByText("Hello");
  expect(element).toBeInTheDocument();
});
