import { render, fireEvent, within } from "@testing-library/react";
import CalculatorForm from "./CalculatorForm";

const setup = () => {
  const utils = render(<CalculatorForm />);
  const input1 = utils.getByLabelText("input-1");
  const input2 = utils.getByLabelText("input-2");
  const result = utils.getByTestId("result");
  const button = utils.getByRole("button");
  return {
    input1,
    input2,
    result,
    button,
    ...utils,
  };
};

test("correct calculation result", () => {
  const { input1, input2, result, button } = setup();
  fireEvent.change(input1, { target: { value: "23" } });
  fireEvent.change(input2, { target: { value: "20" } });
  fireEvent.click(button);
  const { getByText } = within(result);
  expect(getByText("43")).toBeInTheDocument();
});
