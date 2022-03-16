import { Chrono } from "react-chrono";
import { Box, Container, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { items } from "./timelineItems";

const useStyles = makeStyles((theme) => ({
  titleText: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "3rem",
    color: "black",
    textTransform: "uppercase",
  },

  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "50em",
    gap: "10em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    textAlign: "center",
  },
}));

export const OurStory = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          height: "600px",
          paddingTop: "3em",
          position: "relative",
        }}
      >
        <Container item>
          <Card classes={{ root: classes.card }}>
            <CardContent className={classes.content}>
              <Typography className={classes.titleText} gutterBottom>
                Our Story
              </Typography>
              <Chrono items={items} mode="HORIZONTAL" />
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <Container item>
          <Card classes={{ root: classes.card }}>
            <CardContent className={classes.content}>
              <Typography className={classes.titleText} gutterBottom>
                Our Story
              </Typography>
              <Chrono items={items} mode="VERTICAL_ALTERNATING" />
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};
