import { useEffect, useRef, useState } from "react";
import useUsername from "../hooks/useUsername";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { alreadyAddedReviewAtom } from "../store";
import SearchLogo from "../components/SearchLogo";
import axios from "axios";
import toast from "react-hot-toast";
import useDebounce from "../hooks/useDebounce";
import useOutsideClick from "../hooks/useOutsideClick";

export default function AddSubjects() {
  const navigate = useNavigate();

  const [loadingClick, setLoadingClick] = useState(false);
  const [username, loading] = useUsername();
  const alreadyAddedReview = useRecoilValue(alreadyAddedReviewAtom);
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const setAlreadyAddedReview = useSetRecoilState(alreadyAddedReviewAtom);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const debouncedValue = useDebounce(searchTerm, 500);

  const searchRef = useRef(null);

  useEffect(() => {
    if (username == null) navigate("/", { replace: true });
    if (alreadyAddedReview) navigate("/home", { replace: true });

    const run = async () => {
      try {
        const link = import.meta.env.VITE_REVIEWLINK + "/user/hasAddedSubjects";
        const token = localStorage.getItem("token");
        const response = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });

        if (response.data.hasAddedSubjects) {
          navigate("/home/addReview", { replace: true });
        }
      } catch (error) {
        console.log(error);
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        } else toast.error("Something went wrong");
      }
    };

    run();
  }, [alreadyAddedReview, navigate, username, setAlreadyAddedReview]);

  useEffect(() => {
    const link = import.meta.env.VITE_REVIEWLINK + "/user/allSubjects";

    const loadCourses = async () => {
      setLoadingClick(true);
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });

        if (response && response.data) {
          setCourses(response.data.departments);
        }
        setLoadingClick(false);
      } catch (error) {
        console.log(error);
        setLoadingClick(false);
        if (error.response.data.message)
          toast.error(error.response.data.message);
        else toast.error("Something went wrong");
      }
    };
    loadCourses();
  }, []);

  useEffect(() => {
    if (debouncedValue === "") {
      setSearchResults([]);
      return;
    }

    const results = courses.filter((course) =>
      course.subject_name.toLowerCase().includes(debouncedValue.toLowerCase())
    );

    setSearchResults(results.slice(0, 8));
  }, [debouncedValue, courses]);

  useOutsideClick(searchRef, () => {
    setSearchTerm("");
  });

  if (loading || loadingClick) return <Loading />;

  return (
    <div className="h-screen pt-[90px] bg-gray-800 p-2 flex max-md:flex-col">
      <div
        className="max-md:w-full md:w-1/2 px-4 flex flex-col items-center h-fit"
        ref={searchRef}
      >
        <form
          className="mx-auto w-full relative"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="search"
            id="search-dropdown"
            className="block rounded-xl p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search for a Course"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchLogo />
        </form>

        {/* display the search results */}
        {searchResults.length > 0 && (
          <div className="bg-slate-900 rounded-lg w-4/5 mt-4">
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              {searchResults.map((course, index) => (
                <li key={index}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => {
                      if (selectedCourses.length >= 3) {
                        toast.error("You can only add 3 courses");
                      } else if (selectedCourses.includes(course)) {
                        toast.error("You have already added this course");
                      } else {
                        setSelectedCourses([...selectedCourses, course]);
                        setSearchTerm("");
                      }
                    }}
                  >
                    {course.subject_name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="max-md:w-full max-md:fixed max-md:top-[50vh] md:mt-32 grow flex justify-center">
        {/* display the selected courses */}
        {selectedCourses.length > 0 && (
          <div className="w-4/5 md:w-3/5 mt-4">
            <ul className="bg-slate-900 rounded-md py-2 text-sm text-gray-700 dark:text-gray-200">
              {selectedCourses.map((course, index) => (
                <li key={index}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => {
                      setSelectedCourses(
                        selectedCourses.filter((c) => c !== course)
                      );
                    }}
                  >
                    {course.subject_name}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={async () => {
                if (selectedCourses.length === 0) {
                  toast.error("Please select at least one course");
                } else if (selectedCourses.length > 3) {
                  toast.error("You can only add 3 courses");
                } else {
                  try {
                    const link =
                      import.meta.env.VITE_REVIEWLINK + "/user/userSubjects";
                    const token = localStorage.getItem("token");
                    const body = {
                      noOfSubjects: selectedCourses.length,
                    };
                    for (let i = 0; i < selectedCourses.length; i++) {
                      body[`subject${i + 1}Id`] = selectedCourses[i].subject_id;
                    }
                    const response = await axios.post(link, body, {
                      headers: {
                        Authorization: token,
                      },
                    });
                    toast.success(response.data.message);
                    setAlreadyAddedReview(true);
                    navigate("/home/addReviews", { replace: true });
                  } catch (error) {
                    console.log(error);
                    if (error.response.data.message) {
                      toast.error(error.response.data.message);
                    } else toast.error("Something went wrong");
                  }
                }
              }}
              className="text-white w-full mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
