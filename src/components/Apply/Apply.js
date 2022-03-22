import { Grid, Card, CardContent,Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

import { CustomStepper } from "./CustomStepper";
import { CenterFocusStrong } from "@mui/icons-material";

const useStyles = makeStyles((theme) =>({
  container: {
    backgroundColor: "rgba(0, 255, 133, 0.08)",
    padding: "5em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3em",
  },

  container2: {
    display: "flex",
    flexDirection: "column",
    height: "20rem",
    gap: "3em",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    marginTop: "-4em",
  },

  card: { 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  content: {
    maxWidth: "50%",
    display: "flex",
    flexDirection: "column",
    gap: "2em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    textAlign: "center",
  },

  titleText: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "3rem",
    lineHeight: "48px",
    color: "black",
    textTransform: "uppercase",
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
  },

  stepperContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Apply = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item>
        <Typography className={classes.titleText}>The Experience</Typography>
      </Grid>
      <Grid className={classes.stepperContainer} item>
        <CustomStepper />
      </Grid>
      <Grid className={classes.container2}>
      <Card classes={{ root: classes.card }}>
        <CardContent className={classes.content}>
          <Typography className={classes.subtitleText} gutterBottom>
          Information to apply
          </Typography>
          <Typography className={classes.subText} gutterBottom>
          Opportunities will be published in Social Media. Like our pages to get timely information
In there you will find instructions on how and when to apply
          </Typography>
        </CardContent>
      </Card>
      </Grid>
    </Grid>
  );
};
