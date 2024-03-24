import { useEffect, useState } from "react";
import useAdminUsername from "../hooks/useAdminUsername";
import Loading from "./Loading";
import axios from "axios";
import toast from "react-hot-toast";

export default function Admin() {
  const [loadingClick, setLoadingClick] = useState(false);
  const [username, loading] = useAdminUsername();

  const [displayReview, setDisplayReview] = useState(0);

  useEffect(() => {
    const run = async () => {
      setLoadingClick(true);
      try {
        const link =
          import.meta.env.VITE_REVIEWLINK + "/admin/unverifiedReviews";
        const token = localStorage.getItem("token");

        const response = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });
        setDisplayReview(response.data.reviews);
        setLoadingClick(false);
      } catch (error) {
        setLoadingClick(false);
        console.log(error);
      }
    };
    run();
  }, []);

  if (loading || loadingClick) return <Loading />;
  return (
    <div className="min-h-screen bg-blue-200 pt-[90px] p-2 flex flex-col justify-start">
      <h1 className="text-2xl text-center text-black mb-4">Pending Reviews</h1>
      {displayReview.length !== 0 && (
        <div className="w-full flex max-md:flex-col p-4 items-center">
          {displayReview.map((review, index) => (
            <div
              key={index}
              className="w-full mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex flex-col px-6 pt-6 pb-10">
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {review.subject_name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {review.course_code}
                </span>
                <div className="flex items-center mt-4">
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    By {review.username}
                  </span>
                </div>

                <div className="flex items-center mt-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Overall {review.stars} | Attendance{" "}
                    {review.attendance_stars} | Grades {review.grades_stars} |
                    Quality {review.quality_stars}
                  </span>
                </div>

                <div className="flex items-center mt-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {review.details}
                  </span>
                </div>

                <div className="flex mt-4 md:mt-6">
                  <a
                    className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={async () => {
                      toast.success("Review Verified");
                    }}
                  >
                    Verify
                  </a>
                  <a
                    className="cursor-pointer py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={async () => {
                      toast.error("Review Deleted");
                    }}
                  >
                    Delete
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
