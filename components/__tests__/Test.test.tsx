import { render, screen } from "@testing-library/react";
import Test from "~/components/Test";

it("renders hello", () => {
  render(<Test />);
  const element = screen.getByText("Test");
  expect(element).toBeInTheDocument();
});
