import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { loadingAtom, reviewsAtom, sortAtom, usernameAtom } from "../store";
import useAuth from "../hooks/useAuth";
import { HomeCard } from "../components/HomeCard";

export default function Home() {
  useAuth();
  const navigate = useNavigate();
  const username = useRecoilValue(usernameAtom);
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const sortValue = useRecoilValue(sortAtom);
  const [reviews, setReviews] = useRecoilState(reviewsAtom);
  const [page, setPage] = useState(1);

  // send user to login if not logged in
  useEffect(() => {
    if (username == null) navigate("/", { replace: true });
  }, [navigate, username]);

  // load the reviews based on the sort value
  useEffect(() => {
    async function responses() {
      setLoading(true);
      try {
        var link =
          import.meta.env.VITE_REVIEWLINK +
          "/user/weightedSubjects/page/" +
          page;
        if (sortValue != "overall")
          link =
            import.meta.env.VITE_REVIEWLINK +
            "/user/weightedSubjects/filter/" +
            sortValue +
            "/page/" +
            page;
        const token = localStorage.getItem("token");
        const response = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });

        if (response && response.data.reviews) {
          setReviews(response.data.reviews);
        }
        setLoading(false);
      } catch (error) {
        console.log("error at home", error);
        setLoading(false);
      }
    }
    responses();
  }, [page, setLoading, setReviews, sortValue]);

  if (loading) return <Loading />;

  return (
    <>
      <div className="min-h-screen min-w-screen pt-[68px] bg-gray-50 dark:bg-gray-800">
        <div className="h-16 flex items-center justify-between bg-gray-900 text-white px-5">
          <div className="flex items-center font-medium">
            <p className="text-white text-2xl">Most reviewed OE</p>
          </div>
        </div>

        {/* {reviews &&
          reviews.map((review, index) => (
            <div
              key={index}
              className="grid grid-cols-5 p-3 text-xs text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-400 relative hover:bg-gray-900 hover:cursor-pointer"
              onClick={() => {
                setCourseCode(review.course_code);
                  navigate("/home/allReviews");
              }}
            >
              <div className="flex items-center justify-left text-white">
                {review.subject_name}
              </div>
              <div className="flex items-center justify-center">
                {review.course_code}
              </div>
              <div className="flex items-center justify-center text-center">
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
          ))} */}

        <div className="flex flex-wrap justify-center p-6">
          {reviews.map((review) => {
            return <HomeCard key={review.course_code} review={review} />;
          })}
        </div>

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
}
