import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";

import KorinverLogo from "../../assets/korinver-logo.png";
import GenUILogo from "../../assets/genui-logo.png";
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2em",
      }}
    >
      <Grid
        sx={{ width: "50% !important", marginBottom: "2em" }}
        container
        spacing={{ xs: 2, md: 6 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowSpacing={4}
      >
        <Grid item xs={4} sm={8} md={6}>
          <Item image={KorinverLogo} />
        </Grid>

        <Grid item xs={4} sm={8} md={6}>
          <Item image={GenUILogo} />
        </Grid>
      </Grid>

      <Grid
        sx={{ width: "50% !important", marginBottom: "2em" }}
        container
        spacing={{ xs: 2, md: 6 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowSpacing={4}
      >
        <Grid item xs={4} sm={8} md={12}>
          <Typography className={classes.titleText}>
            Friends who make this possible:
          </Typography>
        </Grid>
      </Grid>

      <Grid
        sx={{ width: "50% !important", marginBottom: "2em" }}
        container
        spacing={{ xs: 2, md: 6 }}
        columns={{ xs: 4, sm: 6, md: 12 }}
        rowSpacing={4}
      >
        <Grid item xs={4} sm={3} md={4}>
          <Item image={EmbassyLogo} />
        </Grid>

        <Grid item xs={4} sm={3} md={4}>
          <Item image={EducationUSALogo} />
        </Grid>

        <Grid item xs={4} sm={3} md={4}>
          <Item image={SaspLogo} />
        </Grid>
      </Grid>

      <Grid
        sx={{ width: "50% !important", marginBottom: "2em" }}
        container
        spacing={{ xs: 2, md: 6 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowSpacing={4}
      >
        <Grid item xs={4} sm={8} md={6}>
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
            info@korinver.com
          </Typography>
        </Grid>

        <Grid item xs={4} sm={8} md={6}>
          <Typography className={classes.locationText}>Branch USA</Typography>
          <Typography className={classes.addressText}>
            3417 Evaston Ave N, Suite #529
          </Typography>
          <Typography className={classes.addressText}>
            Seattle WA 98103, USA
          </Typography>
          <Typography className={classes.addressText}>
            info@korinver.com
          </Typography>
        </Grid>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(0, 52, 100)",
          height: "4em",
          width: "100vw",
        }}
      >
        <Typography sx={{ color: "white" }}>
          © 2022 Korinver. All rights reserved
        </Typography>
      </Grid>
    </Box>
  );
};
