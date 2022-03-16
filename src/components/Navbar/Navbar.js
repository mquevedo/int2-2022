import { useState } from "react";
import {
  Avatar,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import Int2Logo from "../../assets/int2-logo.png";

import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Our Story", "Alumni", "Life", "Partners", "Coming Back"];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl" sx={{ marginBottom: 1 }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 6, display: { xs: "none", md: "flex" } }}>
            <Avatar
              variant="square"
              src={Int2Logo}
              sx={{
                width: 150,
                height: 50,
              }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              gap: "3em",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#2F70FE",
                display: "block",
                border: "1px solid #2F70FE",
                width: 87,
                height: 43,
              }}
            >
              Info
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Avatar
              variant="square"
              src={Int2Logo}
              sx={{
                width: 150,
                height: 50,
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
