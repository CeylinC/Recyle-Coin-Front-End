import * as React from "react";
import { Typography, StepLabel, Step, Stepper, Box } from "@mui/material";
import { STEPS } from "../../constants/constants";

interface IProp {
  activeStep: number;
  isActive: boolean;
}

export function ProgressiveBar({ activeStep, isActive }: IProp) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep - 1} alternativeLabel>
        {STEPS.map((label, index) => {
          const labelProps: {
            optional?: React.ReactNode;
            error?: boolean;
          } = {};
          if (!isActive && index === activeStep - 1) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Work is Canceled
              </Typography>
            );
            labelProps.error = true;
          }
          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
