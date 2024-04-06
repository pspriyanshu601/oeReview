// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Loading from "./Loading";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { loadingAtom, usernameAtom } from "../store";
// import useAuth from "../hooks/useAuth";

// export const Verify = () => {
//   useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useRecoilState(loadingAtom);
//   const username = useRecoilValue(usernameAtom);

//   // send user to home if already logged in
//   useEffect(() => {
//     if (!loading && username != null) {
//       navigate("/home", { replace: true });
//     }
//   }, [loading, username, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const link = import.meta.env.VITE_REVIEWLINK + "/auth/verifyEmail";
//       const response = await axios.post(link, {
//         email,
//         otp,
//       });
//       if (response.data.success == true) {
//         localStorage.setItem("token", response.data.token);
//         toast.success(response.data.message);
//       }
//       if (response.data.path) {
//         navigate("/" + response.data.path, { replace: true });
//       }
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       if (error.response.data.message) toast.error(error.response.data.message);
//       else toast.error("An error occurred");
//       setLoading(false);
//     }
//   };

//   if (loading) return <Loading />;

//   return (
//     <>
//       <div className="bg-gray-50 dark:bg-gray-900 h-screen">
//         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//           <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                 OTP Verification
//               </h1>
//               <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Your email
//                   </label>
//                   <input
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     type="email"
//                     name="email"
//                     id="email"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="xxxxx@iitism.ac.in"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="otp"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     OTP
//                   </label>
//                   <input
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     type="text"
//                     name="password"
//                     id="password"
//                     placeholder="Enter your OTP"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     required
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full text-white bg-primary-600 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   Verify
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "./Loading";
import useAuth from "../hooks/useAuth";
import { useRecoilState } from "recoil";
import { loadingAtom } from "../store";
import { createRef, useEffect, useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
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

export default function Verify() {
  useAuth(true);
  const navigate = useNavigate();
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
  ]);
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    const verifyEmail = async (otp) => {
      try {
        setLoading(true);
        const link = import.meta.env.VITE_REVIEWLINK + "/auth/verifyEmail";
        const response = await axios.post(
          link,
          {
            otp,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        toast.success(response.data.message);
        if (response.data.token)
          localStorage.setItem("token", response.data.token);
        if (response.data.path) {
          navigate("/" + response.data.path, { replace: true });
        }
        setLoading(false);
        setOTP(["", "", "", "", "", ""]);
      } catch (error) {
        console.log(error);
        if (error.response.data.message)
          toast.error(error.response.data.message);
        else toast.error("An error occurred");
        if (error.response.data.path)
          navigate("/" + error.response.data.path, { replace: true });
        setLoading(false);
        setOTP(["", "", "", "", "", ""]);
      }
    };
    if (loading) return;
    if (
      otp.every(
        (digit) => digit !== "" && !isNaN(digit) && digit >= 0 && digit <= 9
      )
    ) {
      verifyEmail(otp.join(""));
    }
  }, [loading, otp, navigate, setLoading]);

  useEffect(() => {
    if (focusedIndex == 0) {
      inputRefs.current[0].current.focus();
    }
    if (focusedIndex < 6) {
      inputRefs.current[focusedIndex].current.focus();
      setOTP((prev) => {
        const newArr = [...prev];
        for (let i = focusedIndex + 1; i < 6; i++) {
          newArr[i] = "";
        }
        return newArr;
      });
    }
  }, [focusedIndex]);

  if (loading) return <Loading />;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            OTP Verification
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs.current[index]}
                  type="text"
                  name={`otp${index}`}
                  inputMode="numeric"
                  value={
                    digit === ""
                      ? ""
                      : isNaN(digit)
                      ? ""
                      : digit > 9
                      ? digit % 10
                      : digit < 0
                      ? 0
                      : digit
                  }
                  onChange={(e) => {
                    let value = parseInt(e.target.value);
                    if (isNaN(value)) {
                      setOTP((prev) => {
                        const newArr = [...prev];
                        newArr[index] = "";
                        for (let i = index + 1; i < 6; i++) {
                          newArr[i] = "";
                        }
                        return newArr;
                      });
                      return;
                    }
                    setOTP((prev) => {
                      const newArr = [...prev];
                      newArr[index] = value;
                      return newArr;
                    });
                    setFocusedIndex(() => {
                      if (e.target.value && index < 5) {
                        return index + 1;
                      } else if (!e.target.value && index > 0) {
                        return index - 1;
                      }
                    });
                  }}
                  className={`max-md:w-10 max-md:h-10 md:w-16 md:h-16 text-3xl text-center appearance-none m-1 border-2 border-gray-300 rounded-md focus:outline-none focus:border-primary-600 bg-black`}
                  maxLength="1"
                />
              ))}
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
