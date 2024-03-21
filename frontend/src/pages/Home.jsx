import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUsername from "../hooks/useUsername";
import Loading from "./Loading";
import axios from "axios";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import { reviewsAtom } from "../store";

export const Home = () => {
  const [username, loading] = useUsername();
  const [loadingClick, setLoadingClick] = useState(false);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const [reviews, setReviews] = useRecoilState(reviewsAtom);



  useEffect(() => {
    if (username == null) navigate("/", { replace: true });
  }, [navigate, username]);

  const link = import.meta.env.VITE_REVIEWLINK + "/user/subjects/" + page;
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

  console.log(reviews);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 h-[91vh]" id="home">
      <div className="w-full flex items-center justify-center mt-[68px] bg-gray-50 dark:bg-gray-700">
        <div className="w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Code
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Ratings
                </th>
              </tr>
            </thead>
            <tbody>
              {reviews &&
                reviews.map((review, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {review.subject_name}
                    </th>
                    <td className="px-6 py-4">{review.course_code}</td>
                    <td className="px-6 py-4">{review.department_name}</td>
                    <td className="px-6 py-4">{review.average_rating}</td>
                    <td className="px-6 py-4">{review.comments}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex w-full justify-between px-6 py-4 bg-gray-50 dark:bg-gray-800">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => { if(page > 1) setPage(page - 1) }}
        >
          Previous
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => { if(reviews.length == 10) setPage(page + 1) }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
