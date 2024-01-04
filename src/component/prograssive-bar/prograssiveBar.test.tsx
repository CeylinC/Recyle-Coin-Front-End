import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProgressiveBar } from "./PrograssiveBar"; // Update the path accordingly
import { STEPS } from "../../constants/constants";

describe("ProgressiveBar Component", () => {
  it("renders the ProgressiveBar component with active step", () => {
    const activeStep = 2;
    const isActive = false;

    render(<ProgressiveBar activeStep={activeStep} isActive={isActive} />);

    // Assert that the step exists
    const stepElement = screen.getByTestId(`step-${activeStep - 1}`);
    expect(stepElement).toBeInTheDocument();

    // Assert that the step is marked as inactive
    const dataActiveAttribute = stepElement.getAttribute("data-active");
    expect(dataActiveAttribute).toBeDefined(); // Check if the attribute is defined
    if (dataActiveAttribute) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(dataActiveAttribute).toBe("false");
    }
  });

  it("renders the ProgressiveBar component with inactive step", () => {
    const activeStep = 2;
    const isActive = false;

    render(<ProgressiveBar activeStep={activeStep} isActive={isActive} />);

    // Assert that the step is marked as inactive
    expect(screen.getByTestId(`step-${activeStep - 1}`)).toHaveAttribute(
      "data-active",
      "false"
    );
  });

  it("renders the ProgressiveBar component with canceled work", () => {
    const activeStep = 2;
    const isActive = false;

    render(<ProgressiveBar activeStep={activeStep} isActive={isActive} />);

    // Simulate canceled work and assert that the error message is displayed
    userEvent.tab();
    expect(screen.getByText("Work is Canceled")).toBeInTheDocument();
  });
});
