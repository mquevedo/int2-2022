import { useState } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  StepContent,
  Typography,
} from "@mui/material";

import { steps } from "./steps";

export const CustomStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{  maxWidth: 900, justifyContent: "center",
    position: "relative", flexDirection: 'row', }}>
      <Stepper sx={{
          display: { xs: "none", md: "flex" },
        }} activeStep={5} alternativeLabel display="flex">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>
              {step.description}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Stepper sx={{
          display: { xs: "flex", md: "none" },
        }} activeStep={5}  display="flex" orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              {step.description}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
