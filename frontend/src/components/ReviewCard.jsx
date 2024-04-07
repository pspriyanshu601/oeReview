import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../pages/Loading";

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
  // warning: dont use loadingAtom here
  const [disableButton, setDisableButton] = useState(false);
  const [loading, setLoading] = useState(false);
  if (loading) return <Loading />;
  return (
    <div
      key={index}
      className="max-md:w-full mb-8 border rounded-lg shadow bg-gray-900 border-gray-700"
    >
      <div className="flex flex-col px-6 pt-6 pb-10 ">
        <h5 className="mb-1 text-xl font-medium text-white">
          {review.subject_name}
        </h5>
        <span className="text-sm text-gray-400">{review.course_code}</span>
        <div className="flex items-center mt-4">
          <span className="text-sm font-medium text-gray-100">
            By {review.username}
          </span>
        </div>

        <div className="flex items-center mt-4">
          <span className="text-sm font-medium text-gray-400">
            Overall {review.stars} | Attendance {review.attendance_stars} |
            Grades {review.grades_stars} | Quality {review.quality_stars}
          </span>
        </div>

        <div className="flex items-center mt-4">
          <span className="text-sm font-medium text-gray-400">
            {review.details}
          </span>
        </div>

        <div className="flex mt-4 md:mt-6">
          {showVerify && (
            <a
              className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              onClick={async () => {
                if (disableButton) return;
                try {
                  setLoading(true);
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
                    (localReview) => localReview.review_id !== review.review_id
                  );
                  setDisplayReview(newDisplayReview);

                  toast.success("Review Verified");
                  setDisableButton(false);
                  setLoading(false);
                } catch (error) {
                  console.log(error);
                  setDisableButton(false);
                  toast.error("Error Verifying Review");
                  setLoading(false);
                }
              }}
            >
              Verify
            </a>
          )}
          <a
            className={`cursor-pointer py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-700 ${
              colorDelete
                ? `bg-red-600 text-white`
                : `bg-gray-800 text-gray-400`
            }  border-gray-600 hover:text-white hover:bg-gray-700`}
            onClick={async () => {
              if (disableButton) return;
              if (deleteReview) {
                try {
                  setDisableButton(true);
                  setLoading(true);
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
                    (localReview) => localReview.review_id !== review.review_id
                  );
                  setDisplayReview(newDisplayReview);
                  setLoading(false);

                  toast.success("Review Deleted");
                  setDisableButton(false);
                } catch (e) {
                  setDisableButton(false);
                  setLoading(false);
                  console.log(e);
                  toast.error("Error Deleting Review");
                }
                return;
              } else {
                try {
                  setDisableButton(true);
                  setLoading(true);
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
                    (localReview) => localReview.review_id !== review.review_id
                  );
                  setDisplayReview(newDisplayReview);
                  setLoading(false);

                  toast.success("Review Deleted");
                  setDisableButton(false);
                } catch (error) {
                  console.log(error);
                  toast.error("Error Deleting Review");
                  setDisableButton(false);
                  setLoading(false);
                }
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
