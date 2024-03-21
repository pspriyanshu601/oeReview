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
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const [reviews, setReviews] = useRecoilState(reviewsAtom);

  useEffect(() => {
    if (username == null) navigate("/", { replace: true });
  }, [navigate, username]);

  const link = import.meta.env.VITE_REVIEWLINK + "/user/subjects/" + page;
  useEffect(() => {
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
      } catch (error) {
        console.log(error);
        if (error.response.data.message)
          toast.error(error.response.data.message);
        else toast.error("Something went wrong");
      }
    }
    responses();
  }, [page, link, setReviews]);

  if (loading) return <Loading />;

  console.log(reviews);

  return (
    <div className="w-full h-screen bg-slate-900 items-center flex justify-center">
      <div className="w-1/2">
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
                  <td className="px-6 py-4">dept vejo</td>
                  <td className="px-6 py-4">rating vejo</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div>
          <button
            onClick={() => {
              if (page > 1) setPage(page - 1);
            }}
            className="bg-gray-200 text-gray-800 p-2 rounded-lg w-30"
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (reviews.length === 10) setPage(page + 1);
            }}
            className="bg-gray-200 text-gray-800 p-2 rounded-lg w-30"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
