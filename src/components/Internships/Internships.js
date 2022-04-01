import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import BgInternshipImage from "../../assets/bg-internship.jpg";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "33.31rem",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    clipPath: "polygon(0 0, 100% 0, 100% 89%, 0% 100%)",
  },
  bgImage: {
    background: `url(${BgInternshipImage})`,
    backgroundPosition: "center",
    position: "absolute",
    backgroundSize: "cover",
    filter: "blur(4px)",
    width: "100%",
    height: "100%",
    zIndex: "-1",
  },

  titleText: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "65px",
    color: "white",
  },

  subText: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "30px",
    color: "white",
  },

  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
  },

  button: {
    marginTop: "4em",
    backgroundColor: "black",
    width: 296,
    height: 91,
    fontWeight: "bold",
    color: "white !important",
    textTransform: "uppercase",
  },
});

export const Internships = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} id="internships">
      <div className={classes.bgImage} />
      <Card classes={{ root: classes.card }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography className={classes.titleText} gutterBottom>
            International Internships
          </Typography>
          <Typography className={classes.subText} gutterBottom>
            A pool of world class software developers and innovation leaders
          </Typography>
          <Button onClick={() =>
            (window.location.href = "https://www.facebook.com/korinver")
          }  className={classes.button } >
            Ask for More Information
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
