import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "./Loading";
import useAuth from "../hooks/useAuth";
import { useRecoilState, useRecoilValue } from "recoil";
import { loadingAtom, usernameAtom } from "../store";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/pspriyanshu601/oeReview">
        oeReview
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function ForgotPass() {
  useAuth(true);
  const navigate = useNavigate();
  const username = useRecoilValue(usernameAtom);
  const [loading, setLoading] = useRecoilState(loadingAtom);

  // send user to home if already logged in
  useEffect(() => {
    if (!loading && username != null) {
      navigate("/home", { replace: true });
    }
  }, [loading, navigate, username]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      setLoading(true);
      const link = import.meta.env.VITE_REVIEWLINK + "/auth/forgotPassword";
      const response = await axios.post(link, {
        email: data.get("email"),
        newPassword: data.get("password"),
      });

      toast.success(response.data.message);
      console.log(response.data);
      if (response.data.path) navigate("/" + response.data.path);
      if (response.data.token)
        localStorage.setItem("token", response.data.token);

      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response.data.message) toast.error(error.response.data.message);
      else toast.error("An error occurred");
      if (error.response.data.path) navigate("/" + error.response.data.path);
      if (error.response.data.token)
        localStorage.setItem("token", error.response.data.token);
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
