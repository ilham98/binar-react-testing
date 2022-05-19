import { render, screen } from "@testing-library/react";
import ButtonPrimary from "./ButtonPrimary";
import renderer from "react-test-renderer";

it("Button rendered correctly", () => {
  render(<ButtonPrimary />);
  const primaryButton = screen.getByRole("button");
  expect(primaryButton).toBeInTheDocument();
});

it("Button has primary class", () => {
  render(<ButtonPrimary />);
  const primaryButton = screen.getByRole("button");
  expect(primaryButton).toHaveClass("primary");
});

it("Snapshot check", () => {
  const tree = renderer.create(<ButtonPrimary />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Disabled primary button", () => {
  render(<ButtonPrimary disabled={true} />);
  const primaryButton = screen.getByRole("button");
  expect(primaryButton).toHaveClass("primary");
  expect(primaryButton).toBeDisabled();
});
