import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

import { CustomStepper } from "./CustomStepper";

const useStyles = makeStyles({
  container: {
    backgroundColor: "rgba(0, 255, 133, 0.08)",
    padding: "5em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3em",
  },

  titleText: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "3rem",
    lineHeight: "48px",
    color: "black",
    textTransform: "uppercase",
  },

  stepperContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Apply = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item>
        <Typography className={classes.titleText}>How to Apply</Typography>
      </Grid>
      <Grid className={classes.stepperContainer} item>
        <CustomStepper />
      </Grid>
    </Grid>
  );
};
