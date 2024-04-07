// import { useLocation, useNavigate } from "react-router-dom";
// import { useRecoilState, useRecoilValue } from "recoil";
// import {
//   adminWorkAtom,
//   alreadyAddedReviewAtom,
//   loadingAtom,
//   sortAtom,
//   usernameAtom,
// } from "../store";
// import { useState } from "react";
// import useAdminAuth from "../hooks/useAdminAuth";

// export default function Navbar() {
//   useAdminAuth();
//   const location = useLocation()
//   const navigate = useNavigate();
//   const alreadyAddedReview = useRecoilValue(alreadyAddedReviewAtom);
//   const admin = useRecoilValue(usernameAtom);
//   const loading = useRecoilValue(loadingAtom);
//   const [isOpen, setIsOpen] = useState(false);
//   const [sortValue, setSortValue] = useRecoilState(sortAtom);
//   const [adminOpen, setAdminOpen] = useState(false);
//   const [adminWork, setAdminWork] = useRecoilState(adminWorkAtom);
//   return (
//     <nav
//       className="bg-green-60 fixed dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
//       id="navbar"
//     >
//       <div className="flex flex-wrap items-center justify-between mx-auto p-4">
//         <a
//           href="https://github.com/pspriyanshu601/oeReview"
//           className="flex items-center space-x-3 rtl:space-x-reverse"
//         >
//           <img
//             src={Logo}
//             className="h-8 rounded-lg object-contain"
//             alt="Flowbite Logo"
//           />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             Review
//           </span>
//         </a>
//         <div className="flex gap-1">

//           {/* Go back button */}
//           {loading === false && admin !== null && location.pathname == '/home/admin' && (
//             <div>
//               <button
//                 type="button"
//                 className="mx-3 text-white bg-gray-700 hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-800 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-800 dark:hover:bg-black dark:focus:ring-blue-800 hover:shadow-whiteBottom"
//                 onClick={() => {
//                   navigate('/home')
//                 }}
//               >
//                 Back
//               </button>
//             </div>
//           )}

//           {/* admin */}
//           {loading === false && admin !== null && (
//             <div className="relative inline-block text-left">
//               <div>
//                 <button
//                   type="button"
//                   className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   id="options-menu"
//                   aria-expanded={adminOpen}
//                   aria-haspopup="true"
//                   onClick={() => setAdminOpen(!adminOpen)}
//                 >
//                   {adminWork ? adminWork : "Admin"}
//                 </button>
//               </div>
//               {adminOpen && (
//                 <div
//                   className="origin-top-right absolute cursor-pointer right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
//                   role="menu"
//                   aria-orientation="vertical"
//                   aria-labelledby="options-menu"
//                 >
//                   <div
//                     className="py-1"
//                     onClick={() => {
//                       setAdminOpen(false);
//                       navigate("/home/admin");
//                     }}
//                   >
//                     <a
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
//                       onClick={() => {
//                         if (adminWork !== "verifyReview")
//                           setAdminWork("verifyReview");
//                       }}
//                     >
//                       Verify Review
//                     </a>
//                     <a
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
//                       onClick={() => {
//                         if (adminWork !== "deleteReview")
//                           setAdminWork("deleteReview");
//                       }}
//                     >
//                       Delete Review
//                     </a>
//                     <a
//                       onClick={() => {
//                         if (adminWork !== "semesterReset")
//                           setAdminWork("semesterReset");
//                       }}
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
//                     >
//                       Semester Reset
//                     </a>
//                     <a
//                       onClick={() => {
//                         if (adminWork !== "clearSubjects")
//                           setAdminWork("clearSubjects");
//                       }}
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
//                     >
//                       Clear Subjects
//                     </a>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* filter */}
//           {(location.pathname != '/home/admin') && (
//             <div className="relative inline-block text-left">
//               <div>
//                 <button
//                   type="button"
//                   className="mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   id="options-menu"
//                   aria-expanded={isOpen}
//                   aria-haspopup="true"
//                   onClick={() => setIsOpen(!isOpen)}
//                 >
//                   {sortValue}
//                 </button>
//               </div>
//               {isOpen && (
//                 <div
//                   className="origin-top-right absolute cursor-pointer right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
//                   role="menu"
//                   aria-orientation="vertical"
//                   aria-labelledby="options-menu"
//                 >
//                   <div
//                     className="py-1"
//                     onClick={() => {
//                       setIsOpen(false);
//                       // navigate("/home");
//                     }}
//                   >
//                     <a
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
//                       onClick={() => {
//                         if (sortValue !== "overall") setSortValue("overall");
//                       }}
//                     >
//                       Overall
//                     </a>
//                     <a
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
//                       onClick={() => {
//                         if (sortValue !== "attendance")
//                           setSortValue("attendance");
//                       }}
//                     >
//                       Attendance
//                     </a>
//                     <a
//                       onClick={() => {
//                         if (sortValue !== "grades") setSortValue("grades");
//                       }}
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
//                     >
//                       Grades
//                     </a>
//                     <a
//                       onClick={() => {
//                         if (sortValue !== "quality") setSortValue("quality");
//                       }}
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
//                     >
//                       Quality
//                     </a>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* add review */}
//           {alreadyAddedReview === false && (
//             <div className="flex items-center space-x-3 rtl:space-x-reverse mx-2">
//               <button
//                 type="button"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 onClick={() => {
//                   navigate("/home/addSubjects");
//                 }}
//               >
//                 Add Review
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

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
    } else if (setting === "Logout"||setting ==="Login") {
      localStorage.removeItem("token");
      setUsername(null);
      navigate("/");
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
