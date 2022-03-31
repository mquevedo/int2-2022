import { useState } from "react";
import {
  Avatar,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import Int2Logo from "../../assets/int2-logo.png";

import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  {
    name: "Be Int2",
    link: "#beint2",
  },
  {
    name: "Our Story",
    link: "#ourStory",
  },
  {
    name: "Alumni",
    link: "#alumni",
  },
  {
    name: "The Experience",
    link: "#apply",
  },
  {
    name: "Internships",
    link: "#internships",
  },
];
export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ background: "white" }} position="sticky" color="transparent">
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
            {pages.map((page, index) => (
              <Button
                key={index}
                href={page.link}
                target="_self"
                rel="noreferrer"
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
            {/* <Button
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
            </Button> */}
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
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Button
                    key={index}
                    href={page.link}
                    target="_self"
                    rel="noreferrer"
                    sx={{ color: "black", display: "block" }}
                  >
                    {page.name}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
