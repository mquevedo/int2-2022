import {
  Box,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

import { steps } from "./steps";

export const CustomStepper = () => {
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
