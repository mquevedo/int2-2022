import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import {
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";

import { CustomStepper } from "./CustomStepper";

const useStyles = makeStyles({
  container: {
    backgroundColor: "rgba(0, 255, 133, 0.08)",
    display: "flex",
    paddingTop:"5em",
    paddingBottom:"5em",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    gap: "3em",
  },

  textContainer: {
    display: "flex",
    justifyContent: "center",
    minWidth: "10em",
    boxSizing: "border-box",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },

  titleText: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "3rem",
    lineHeight: "48px",
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
  },

  subtitleText: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "2rem",
    lineHeight: "65px",
    color: "black",
    textTransform: "uppercase",
  },

  subText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "30px",
    color: "black",
    maxWidth: "50%",
  },

  informationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  },

  socialContainer: {
    display: "flex",
    gap: "1em",
  },

  customStepperContainer: {
    padding: "3em",
  },
});

export const Apply = () => {
  const classes = useStyles();

  return (
    <Grid id="apply" container className={classes.container}>
      <Grid className={classes.textContainer} item>
        <Typography className={classes.titleText}>The Experience</Typography>
      </Grid>
      <Grid  className={classes.customStepperContainer}>
        <CustomStepper/>
      </Grid>
      <Grid container className={classes.informationContainer}>
        <Typography className={classes.subtitleText}>
          Information To Apply
        </Typography>
        <Typography className={classes.subText}>
          Opportunities will be published in Social Media. Like our pages to get
          timely information In there you will find instructions on how and when
          to apply
        </Typography>
      </Grid>
      <Grid className={classes.socialContainer}>
        <FacebookIcon
          onClick={() =>
            (window.location.href = "https://www.facebook.com/korinver")
          }
          sx={{ color: "#3b5998", cursor: "pointer" }}
        />
        <LinkedInIcon
          onClick={() =>
            (window.location.href = "https://www.linkedin.com/company/korinver")
          }
          sx={{ color: "#0072b1", cursor: "pointer" }}
        />
      </Grid>
    </Grid>
  );
};
