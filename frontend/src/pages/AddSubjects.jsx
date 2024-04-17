// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Loading from "./Loading";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { loadingAtom, usernameAtom } from "../store";
// import SearchLogo from "../components/SearchLogo";
// import axios from "axios";
// import toast from "react-hot-toast";
// import useDebounce from "../hooks/useDebounce";
// import useOutsideClick from "../hooks/useOutsideClick";
// import useAuth from "../hooks/useAuth";

// export default function AddSubjects() {
//   useAuth();
//   const navigate = useNavigate();
//   const username = useRecoilValue(usernameAtom);
//   const [loading, setLoading] = useRecoilState(loadingAtom);
//   const [courses, setCourses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedCourses, setSelectedCourses] = useState([]);
//   const searchRef = useRef(null);
//   const debouncedValue = useDebounce(searchTerm, 500);

//   // send user to login if not logged in
//   useEffect(() => {
//     if (!loading && username == null) {
//       navigate("/", { replace: true });
//     }
//   }, [navigate, username, loading]);

//   // check if user has already added subjects
//   useEffect(() => {
//     const run = async () => {
//       try {
//         setLoading(true);
//         const link = import.meta.env.VITE_REVIEWLINK + "/user/hasAddedSubjects";
//         const token = localStorage.getItem("token");
//         const response = await axios.get(link, {
//           headers: {
//             Authorization: token,
//           },
//         });

//         if (response.data.hasAddedSubjects) {
//           navigate("/home/addReview", { replace: true });
//         }
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         console.log(error);
//         if (error.response.data.message) {
//           toast.error(error.response.data.message);
//         } else toast.error("Something went wrong");
//       }
//     };

//     run();
//   }, [navigate, setLoading]);

//   // load all courses
//   useEffect(() => {
//     const loadCourses = async () => {
//       setLoading(true);
//       try {
//         const link = import.meta.env.VITE_REVIEWLINK + "/user/allSubjects";
//         const token = localStorage.getItem("token");
//         const response = await axios.get(link, {
//           headers: {
//             Authorization: token,
//           },
//         });
//         setCourses(response.data.departments);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//         if (error.response.data.message)
//           toast.error(error.response.data.message);
//         else toast.error("Something went wrong");
//       }
//     };
//     loadCourses();
//   }, [setCourses, setLoading]);

//   // filter the courses based on the search term
//   useEffect(() => {
//     if (debouncedValue === "") {
//       setSearchResults([]);
//       return;
//     }
//     const results = courses.filter((course) =>
//       course.subject_name.toLowerCase().includes(debouncedValue.toLowerCase())
//     );
//     setSearchResults(results.slice(0, 8));
//   }, [debouncedValue, courses]);

//   useOutsideClick(searchRef, () => {
//     setSearchTerm("");
//   });

//   if (loading) return <Loading />;

//   return (
//     <div className="h-screen pt-[90px] bg-gray-800 p-2 flex max-md:flex-col">
//       <div
//         className="max-md:w-full md:w-1/2 px-4 flex flex-col items-center h-fit"
//         ref={searchRef}
//       >
//         <form
//           className="mx-auto w-full relative"
//           onSubmit={(e) => {
//             e.preventDefault();
//           }}
//         >
//           <input
//             type="search"
//             id="search-dropdown"
//             className="block rounded-xl p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
//             placeholder="Search for a Course"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <SearchLogo />
//         </form>

//         {/* display the search results */}
//         {searchResults.length > 0 && (
//           <div className="bg-slate-900 rounded-lg w-4/5 mt-4">
//             <ul
//               className="py-2 text-sm text-gray-700 dark:text-gray-200"
//               aria-labelledby="dropdown-button"
//             >
//               {searchResults.map((course, index) => (
//                 <li key={index}>
//                   <button
//                     type="button"
//                     className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     onClick={() => {
//                       if (selectedCourses.length >= 3) {
//                         toast.error("You can only add 3 courses");
//                       } else if (selectedCourses.includes(course)) {
//                         toast.error("You have already added this course");
//                       } else {
//                         setSelectedCourses([...selectedCourses, course]);
//                         setSearchTerm("");
//                       }
//                     }}
//                   >
//                     {course.subject_name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//       {/* display the selected courses */}
//       <div className="max-md:w-full max-md:fixed max-md:top-[50vh] md:mt-32 grow flex justify-center">
//         {selectedCourses.length > 0 && (
//           <div className="w-4/5 md:w-3/5 mt-4">
//             <ul className="bg-slate-900 rounded-md py-2 text-sm text-gray-700 dark:text-gray-200">
//               {selectedCourses.map((course, index) => (
//                 <li key={index}>
//                   <button
//                     type="button"
//                     className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     onClick={() => {
//                       setSelectedCourses(
//                         selectedCourses.filter((c) => c !== course)
//                       );
//                     }}
//                   >
//                     {course.subject_name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <button
//               onClick={async () => {
//                 if (selectedCourses.length === 0) {
//                   toast.error("Please select at least one course");
//                 } else if (selectedCourses.length > 3) {
//                   toast.error("You can only add 3 courses");
//                 } else {
//                   try {
//                     setLoading(true);
//                     const link =
//                       import.meta.env.VITE_REVIEWLINK + "/user/userSubjects";
//                     const token = localStorage.getItem("token");
//                     const body = {
//                       noOfSubjects: selectedCourses.length,
//                     };
//                     for (let i = 0; i < selectedCourses.length; i++) {
//                       body[`subject${i + 1}Id`] = selectedCourses[i].subject_id;
//                     }
//                     const response = await axios.post(link, body, {
//                       headers: {
//                         Authorization: token,
//                       },
//                     });
//                     toast.success(response.data.message);
//                     navigate("/home/addReview", { replace: true });
//                     setLoading(false);
//                   } catch (error) {
//                     console.log(error);
//                     setLoading(false);
//                     if (error.response.data.message) {
//                       toast.error(error.response.data.message);
//                     } else toast.error("Something went wrong");
//                   }
//                 }
//               }}
//               className="text-white w-full mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Submit
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { courseAtom } from "../store";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#282c34",
    },
    secondary: {
      main: "#61dafb",
    },
  },
});

export default function AddSubjects() {
  const navigate = useNavigate();
  useAuth();
  const courses = useRecoilValue(courseAtom);
  const [seleted, setSelected] = useState([]);
  return (
    <div className="min-h-screen min-w-screen pt-[68px] bg-gray-800">
      <div className="w-full p-2 px-4 md:w-1/2 md:m-auto md:mt-12">
        <ThemeProvider theme={defaultTheme}>
          <div className="w-full mt-12">
            <Autocomplete
              multiple
              id="tags-standard"
              options={courses}
              getOptionLabel={(option) => option.name}
              onChange={(event, value) => {
                setSelected(value);
              }}
              sx={{
                bgcolor: "lightblue",
                padding: "10px",
                borderRadius: "10px",
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Your courses"
                  placeholder={`${
                    seleted.length < 3
                      ? "Add a course"
                      : seleted.length == 3
                      ? "Please Submit"
                      : "Limit exceeded"
                  }`}
                />
              )}
            />
            {seleted.length > 0 && seleted.length <= 3 && (
              <div className="flex justify-center mt-16 w-full">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={async () => {
                    try {
                      const token = localStorage.getItem("token");
                      const data = {
                        noOfSubjects: seleted.length,
                      };

                      for (let i = 0; i < seleted.length; i++) {
                        data[`subject${i + 1}Id`] = seleted[i].id;
                      }

                      const link =
                        import.meta.env.VITE_REVIEWLINK + "/user/userSubjects";
                      await axios.post(link, data, {
                        headers: {
                          Authorization: token,
                        },
                      });
                      navigate("/home/addReview", { replace: true });
                    } catch (error) {
                      console.log(error);
                      if (error.response.data.message)
                        toast.error(error.response.data.message);
                      else toast.error("An error occurred");
                    }
                  }}
                >
                  Submit
                </Button>
              </div>
            )}
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}
