import { Grid, Paper, Typography } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
import { members } from "./members";

const Item = styled(Paper)((props) => ({
  borderRadius: "0",
  height: "22rem",
  background: `url(${props.image})`,
  backgroundSize: "cover",
  textAlign: "center",
  "&:hover": {
    "[data-id=overlay]": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backdropFilter: "blur(4px)",
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  overlay: {
    width: "100%",
    height: "100%",
    background: "rgba(1, 59, 109, 0.5)",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "37px",
    color: "white",
    display: "none",
  },

  textContainer: {
    display: "flex",
    justifyContent: "center",
  },

  titleText: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "3rem",
    lineHeight: "48px",
    color: "black",
    textTransform: "uppercase",
  },
}));

export const Alumni = () => {
  const classes = useStyles();

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3em",
        marginTop: "3em",
      }}
    >
      <Grid className={classes.textContainer} item>
        <Typography className={classes.titleText}>Alumni</Typography>
      </Grid>
      <Grid
        container
        sx={{ padding: "1em 1em 0 1em" }}
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 3, sm: 8, md: 12 }}
      >
        {members.map((member, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Item image={member.image}>
              <div data-id="overlay" className={classes.overlay}>
                <div>{member.name}</div>
                <div>{member.cohort}</div>
              </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
