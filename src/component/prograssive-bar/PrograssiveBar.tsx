import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Defined',
    'Being Processed',
    'Processed',
    'Approved',
];

interface IProp {
    activeStep: number,
}

export default function ProgressiveBar({ activeStep }: IProp) {
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep - 1} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}