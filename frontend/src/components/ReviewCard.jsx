import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
export default function ReviewCard({
  index,
  review,
  displayReview,
  setDisplayReview,
  showVerify = true,
  colorDelete = false,
  deleteReview = false,
}) {
  const [disableButton, setDisableButton] = useState(false);
  return (
    <div
      key={index}
      className="max-md:w-full mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700"
    >
      <div className="flex flex-col px-6 pt-6 pb-10 ">
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
            Overall {review.stars} | Attendance {review.attendance_stars} |
            Grades {review.grades_stars} | Quality {review.quality_stars}
          </span>
        </div>

        <div className="flex items-center mt-4">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {review.details}
          </span>
        </div>

        <div className="flex mt-4 md:mt-6">
          {showVerify && (
            <a
              className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={async () => {
                if (disableButton) return;
                try {
                  setDisableButton(true);
                  const link =
                    import.meta.env.VITE_REVIEWLINK + "/admin/verifyReview";
                  const token = localStorage.getItem("token");
                  const data = {
                    reviewId: review.review_id,
                    verified: true,
                  };
                  await axios.post(link, data, {
                    headers: {
                      Authorization: token,
                    },
                  });

                  const newDisplayReview = displayReview.filter(
                    (review) => review.review_id !== data.reviewId
                  );
                  setDisplayReview(newDisplayReview);

                  toast.success("Review Verified");
                  setDisableButton(false);
                } catch (error) {
                  console.log(error);
                  setDisableButton(false);
                  toast.error("Error Verifying Review");
                }
              }}
            >
              Verify
            </a>
          )}
          <a
            className={`cursor-pointer py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 ${
              colorDelete
                ? `dark:bg-red-600 dark:text-white `
                : `dark:bg-gray-800 dark:text-gray-400`
            }  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
            onClick={async () => {
              if (disableButton) return;
              if (deleteReview) {
                try {
                  setDisableButton(true);
                  const link =
                    import.meta.env.VITE_REVIEWLINK +
                    "/admin/deleteReview/" +
                    review.review_id;
                  console.log(review);
                  console.log(review.review_id);
                  const token = localStorage.getItem("token");

                  await axios.delete(link, {
                    headers: {
                      Authorization: token,
                    },
                  });

                  const newDisplayReview = displayReview.filter(
                    (review) => review.review_id !== review.review_id
                  );
                  setDisplayReview(newDisplayReview);

                  toast.success("Review Deleted");
                  setDisableButton(false);
                } catch (e) {
                  setDisableButton(false);
                  console.log(e);
                  toast.error("Error Deleting Review");
                }
                return;
              }
              try {
                setDisableButton(true);
                const link =
                  import.meta.env.VITE_REVIEWLINK + "/admin/verifyReview";
                const token = localStorage.getItem("token");
                const data = {
                  reviewId: review.review_id,
                  verified: false,
                };
                await axios.post(link, data, {
                  headers: {
                    Authorization: token,
                  },
                });

                const newDisplayReview = displayReview.filter(
                  (review) => review.review_id !== data.reviewId
                );
                setDisplayReview(newDisplayReview);

                toast.success("Review Deleted");
                setDisableButton(false);
              } catch (error) {
                console.log(error);
                toast.error("Error Deleting Review");
                setDisableButton(false);
              }
            }}
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}
