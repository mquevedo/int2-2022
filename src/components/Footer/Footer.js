import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";

import KorinverLogo from "../../assets/korinver-logo.png";
import GenUILogo from "../../assets/genui-logo.png";
import IbesLogo from "../../assets/ibes-logo.png";
import EmbassyLogo from "../../assets/embassy-logo.png";
import EducationUSALogo from "../../assets/educationUSA-logo.png";
import SaspLogo from "../../assets/sasp-logo.png";

const useStyles = makeStyles({
  titleText: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "35px",
    textAlign: "left",
    lineHeight: "65px",
    color: "rgb(0, 52, 100)",
  },
  locationText: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "18px",
    textAlign: "left",
    color: "rgb(0, 52, 100)",
  },
  addressText: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "15px",
    textAlign: "left",
    color: "black",
  },
});

const Item = styled(Paper)(({ theme, image }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  background: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "200px",
  height: "50px",
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        sx={{ padding: "5em", paddingRight: "20em", paddingLeft: "20em" }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowSpacing={4}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Item image={KorinverLogo} />
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
          <Item image={GenUILogo} />
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
          <Item image={IbesLogo} />
        </Grid>

        <Grid item xs={2} sm={8} md={12}>
          <Typography className={classes.titleText}>
            Friends who make this possible:
          </Typography>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
          <Item image={EmbassyLogo} />
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
          <Item image={EducationUSALogo} />
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
          <Item image={SaspLogo} />
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          padding: "5em",
          paddingRight: "20em",
          paddingLeft: "28em",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowSpacing={4}
      >
        <Grid
          sx={{ display: "flex", flexDirection: "column" }}
          item
          xs={2}
          sm={4}
          md={6}
        >
          <Typography className={classes.locationText}>
            Korinver El Salvador
          </Typography>
          <Typography className={classes.addressText}>
            Zona Franca Santa Tecla Local 2B2
          </Typography>
          <Typography className={classes.addressText}>
            Santa Tecla, La Libertad, El Salvador
          </Typography>
          <Typography className={classes.addressText}>
            +(503) 2252-0014
          </Typography>
        </Grid>

        <Grid
          sx={{ display: "flex", flexDirection: "column" }}
          item
          xs={2}
          sm={4}
          md={6}
        >
          <Typography className={classes.locationText}>
            Korinver El Salvador
          </Typography>
          <Typography className={classes.addressText}>
            Zona Franca Santa Tecla Local 2B2
          </Typography>
          <Typography className={classes.addressText}>
            Santa Tecla, La Libertad, El Salvador
          </Typography>
          <Typography className={classes.addressText}>
            +(503) 2252-0014
          </Typography>
        </Grid>
      </Grid>

      <Grid
        fluid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(0, 52, 100)",
          height: "4em",
        }}
      >
        <Typography sx={{ color: "white" }}>
          © 2021 Korinver. All rights reserved
        </Typography>
      </Grid>
    </Box>
  );
};
