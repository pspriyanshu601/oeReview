import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUsername from "../hooks/useUsername";
import Loading from "./Loading";
import axios from "axios";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import { reviewsAtom, sortAtom } from "../store";

export const Home = () => {
  const navigate = useNavigate();

  const [username, loading] = useUsername();
  const [loadingClick, setLoadingClick] = useState(false);
  const [page, setPage] = useState(1);

  const [reviews, setReviews] = useRecoilState(reviewsAtom);

  const [sortValue, setSortValue] = useRecoilState(sortAtom);

  const handleChange = (e) => {
    setSortValue(e.target.value);
  };

  useEffect(() => {
    if (username == null) navigate("/", { replace: true });
  }, [navigate, username]);

  var link =
    import.meta.env.VITE_REVIEWLINK + "/user/weightedSubjects/page/" + page;
  if (sortValue != "overall")
    link =
      import.meta.env.VITE_REVIEWLINK +
      "/user/weightedSubjects/filter/" +
      sortValue +
      "/page/" +
      page;

  useEffect(() => {
    setLoadingClick(true);
    async function responses() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });

        if (response && response.data.reviews) {
          setReviews(response.data.reviews);
        }
        setLoadingClick(false);
      } catch (error) {
        console.log(error);
        setLoadingClick(false);
        if (error.response.data.message)
          toast.error(error.response.data.message);
        else toast.error("Something went wrong");
      }
    }
    responses();
  }, [page, link, setReviews]);

  if (loading || loadingClick) return <Loading />;

  return (
    <>
      <div className="h-screen pt-[68px] bg-gray-50 dark:bg-gray-800">
        <div className="h-16 flex items-center justify-between bg-gray-900 text-white px-5">
          <div className="flex items-center">
            <p className="text-white text-2xl">Most reviewed OE</p>
          </div>
          <select
            value={sortValue}
            onChange={handleChange}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <option value="overall">Overall</option>
            <option value="attendance">Attendance</option>
            <option value="quality">Quality</option>
            <option value="grades">Grades</option>
          </select>
        </div>

        <div className="grid grid-cols-5 p-2 text-xs text-gray-700 uppercase font-bold bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <div className="flex items-center justify-center">Name</div>
          <div className="flex items-center justify-center">Code</div>
          <div className="flex items-center justify-center">Department</div>
          <div className="flex items-center justify-center">Rating</div>
          <div className="flex items-center justify-center">Total Ratings</div>
        </div>

        {reviews &&
          reviews.map((review, index) => (
            <div
              key={index}
              className="grid grid-cols-5 p-3 text-xs text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-400 relative"
            >
              <div className="flex items-center justify-left text-white">
                {review.subject_name}
              </div>
              <div className="flex items-center justify-center">
                {review.course_code}
              </div>
              <div className="flex items-center justify-center">
                {review.department_name}
              </div>
              <div className="flex items-center justify-center">
                {sortValue == "overall"
                  ? review.average_rating
                  : review["average_" + sortValue + "_rating"]}
              </div>
              <div className="flex items-center justify-center">
                {review.comments}
              </div>
            </div>
          ))}

        <div className="flex justify-between px-5 py-3 bg-gray-800 text-white">
          <button
            onClick={() => {
              if (page > 1) setPage(page - 1);
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (reviews.length == 10) setPage(page + 1);
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
