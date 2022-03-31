import { Timeline } from "react-responsive-timeline";
import { Box, Container, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { items } from "./timelineItems";
import "./styles.css";

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
    gap: "3em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    textAlign: "center",
  },

  timeline: {
    maxLines: 2,
    length: "10px",
    maxWidth: "100px",
    wrap:"nowrap",
    spacing:2,
    div: {
      border: "10px solid black !important",
    },
  },
}));

export const OurStory = () => {
  const classes = useStyles();
  return (
    <div id="ourStory">
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          height: "600px",
          paddingTop: "3em",
          position: "relative",
        }}
      >
        <Container>
          <Card classes={{ root: classes.card }}>
            <CardContent className={classes.content}>
              <Typography className={classes.titleText} gutterBottom>
                Our Story
              </Typography>
              <Timeline
                pivot="horizontal"
                direction="center"
                tooltip={true}
                textLimit="none"
                msLineBreak ={true}
                maxLines = {2}
                className={classes.timeline}
                timelines={items}
              />
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <Container>
          <Card classes={{ root: classes.card }}>
            <CardContent className={classes.content}>
              <Typography className={classes.titleText} gutterBottom>
                Our Story
              </Typography>
              <Timeline
                pivot="vertical"
                direction="center"
                tooltip={false}
                textLimit="none"
                className={classes.timeline}
                timelines={items}
              />
            </CardContent>
          </Card>
        </Container>
      </Box>
    </div>
  );
};
