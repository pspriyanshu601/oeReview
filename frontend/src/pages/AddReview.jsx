import { useEffect, useState } from "react";
import useUsername from "../hooks/useUsername";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { useRecoilValue } from "recoil";
import { alreadyAddedReviewAtom } from "../store";
import SearchLogo from "../components/SearchLogo";
import axios from "axios";
import toast from "react-hot-toast";
import useDebounce from "../hooks/useDebounce";

export default function AddReview() {
  const navigate = useNavigate();

  const [loadingClick, setLoadingClick] = useState(false);
  const [username, loading] = useUsername();
  const alreadyAddedReview = useRecoilValue(alreadyAddedReviewAtom);
  // const [reviews, setReviews] = useState([]);
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debouncedValue = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (alreadyAddedReview) navigate("/home", { replace: true });
    if (username == null) navigate("/", { replace: true });
  }, [alreadyAddedReview, navigate, username]);

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

  if (loading || loadingClick) return <Loading />;

  return (
    <div className="h-screen pt-[100px] bg-gray-50 dark:bg-gray-800 px-3 flex flex-col items-center">
      <form className="max-w-lg mx-auto w-full relative mb-4">
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
        <div className="bg-slate-900 rounded-lg w-4/5 md:w-1/3">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            {searchResults.map((course, index) => (
              <li key={index}>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {course.subject_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
