import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Logo from "../assets/images/oeLogo.png";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { usernameAtom } from "../store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const pages = ["Departments", "Admin", "Home"];
const settings = ["Profile", "Add Review", "Logout"];

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#282c34",
    },
    secondary: {
      main: "#000000",
    },
  },
});

function ResponsiveAppBar() {
  const username = useRecoilValue(usernameAtom);
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const setUsername = useSetRecoilState(usernameAtom);
  const { error: errorUsername, response: responseUsername } = useFetch(
    username === null || username === "notallowed",
    "GET",
    "/user/username"
  );
  if (errorUsername) console.log(errorUsername);
  if (responseUsername) setUsername(responseUsername.name);

  const handleOpenNavMenu = (event) => {
    console.log(event);
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    console.log(event);
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e, page) => {
    e.stopPropagation();
    setAnchorElNav(null);
    if (page == "Departments") {
      navigate("/home/allDepartments");
    } else if (page == "Admin") {
      navigate("/admin");
    } else if (page == "Home") {
      navigate("/home");
    }
  };

  const handleCloseUserMenu = async (e, setting) => {
    e.stopPropagation();
    setAnchorElUser(null);
    if (setting === "Add Review") {
      if (username === null || username === "notallowed") {
        navigate("/login");
      } else {
        try {
          const link =
            import.meta.env.VITE_REVIEWLINK + "/user/hasAddedSubjects";
          const token = localStorage.getItem("token");
          const resp = await axios.get(link, {
            headers: {
              Authorization: token,
            },
          });
          console.log("response", resp);
          if (resp.data.hasAddedSubjects) {
            navigate("/home/addReview");
          } else {
            navigate("/home/addSubjects");
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else if (setting === "Logout" || setting === "Login") {
      if (username == null || username == "notallowed") {
        navigate("/login");
      } else {
        setUsername(null);
        localStorage.removeItem("token");
        navigate("/home");
      }
    } else if (setting === "Profile") {
      navigate("/home/profile");
    }
  };

  // Inside the return statement:
  <Button
    key={settings[1]} // Assuming "Add Review" is at index 1
    onClick={username === null ? () => navigate("/login") : handleCloseUserMenu}
    sx={{ my: 2, color: "white", display: "block" }}
  >
    {settings[1]} {/* Display "Add Review" */}
  </Button>;

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <AppBar position="fixed">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open(
                    "https://github.com/pspriyanshu601/oeReview",
                    "_blank"
                  );
                }}
              >
                <img
                  src={Logo}
                  className="h-8 rounded-lg object-contain"
                  alt="Flowbite Logo"
                />
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="https://github.com/pspriyanshu601/oeReview"
                target="_blank"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Review
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
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
                    <MenuItem
                      key={page}
                      onClick={(e) => handleCloseNavMenu(e, page)}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open(
                    "https://github.com/pspriyanshu601/oeReview",
                    "_blank"
                  );
                }}
              >
                <img
                  src={Logo}
                  className="h-8 rounded-lg object-contain"
                  alt="Flowbite Logo"
                />
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="https://github.com/pspriyanshu601/oeReview"
                target="_blank"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Review
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    onClickCapture={(e) => handleCloseNavMenu(e, page)}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={
                        username === null || username === "notallowed"
                          ? "G"
                          : username.charAt(0).toUpperCase()
                      }
                      src="none"
                      sx={{
                        bgcolor: "gray",
                      }}
                    >
                      {username === null || username === "notallowed"
                        ? "G"
                        : username.charAt(0).toUpperCase()}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={(e) => handleCloseUserMenu(e, setting)}
                    >
                      {setting === "Logout"
                        ? username !== null && username !== "notallowed"
                          ? "Logout"
                          : "Login"
                        : setting}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
export default ResponsiveAppBar;
