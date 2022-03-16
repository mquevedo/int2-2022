import { Grid, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import BgBeInt2 from "../../assets/bg-beint2.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "35rem",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    marginTop: "-4em",
    clipPath: "polygon(0 11%, 100% 0, 100% 100%, 0% 100%)",
  },

  bgImage: {
    backgroundColor: "green",
    background: `url(${BgBeInt2})`,
    backgroundPosition: "center",
    position: "absolute",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    zIndex: "-1",
  },

  titleText: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "3rem",
    lineHeight: "65px",
    color: "black",
    textTransform: "uppercase",
  },

  subText: {
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "1rem",
    lineHeight: "30px",
    color: "black",
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
}));

export const BeInt2 = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <div className={classes.bgImage} />
      <Card classes={{ root: classes.card }}>
        <CardContent className={classes.content}>
          <Typography className={classes.titleText} gutterBottom>
            Be an int<sup>2</sup>
          </Typography>
          <Typography className={classes.subText} gutterBottom>
            Besides of the technical training we obtained from this opportunity,
            we have also gained a valuable cultural experience by getting
            immersed in day-to-day interactions with people from abroad.
            Although at the beginning this looks like a huge challenge, we all
            understood that reaching out people from other backgrounds is not as
            difficult as it seems.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
