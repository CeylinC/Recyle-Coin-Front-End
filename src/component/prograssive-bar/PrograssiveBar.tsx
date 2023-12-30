import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";

const steps = ["Defined", "Being Processed", "Processed", "Approved"];

interface IProp {
  activeStep: number;
  isActive: boolean;
}

export default function ProgressiveBar({ activeStep, isActive }: IProp) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep - 1} alternativeLabel>
        {steps.map((label, index) => {
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
