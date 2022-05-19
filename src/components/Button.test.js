import { render, screen } from "@testing-library/react";
import Button from "./Button";

it("button should primary", () => {
  render(<Button />);
  const primaryButton = screen.getByRole("button");
  expect(primaryButton).toHaveClass("primary");
});

it("should render a disabled button with the class of primary", () => {
  render(<Button disabled={true} />);
  const primaryButtonDisabled = screen.getByRole("button");
  expect(primaryButtonDisabled).toHaveClass("primary");
  expect(primaryButtonDisabled).toBeDisabled();
});
