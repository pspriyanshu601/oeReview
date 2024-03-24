import { useState } from "react";
import Star from "./Star";
import { useSetRecoilState } from "recoil";
import { reviewIndexAtom } from "../store";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Review({ courseName, last, courseCode }) {
  const [remark, setRemark] = useState("");
  const [rating, setRating] = useState(0);
  const [ratingQuality, setRatingQuality] = useState(0);
  const [ratingAttendance, setRatingAttendance] = useState(0);
  const [ratingMarks, setRatingMarks] = useState(0);
  const setReviewIndex = useSetRecoilState(reviewIndexAtom);
  const navigate = useNavigate();

  // console.log(courseName);
  // console.log(last);
  // console.log(courseCode);

  console.log(remark, rating, ratingQuality, ratingAttendance, ratingMarks);
  return (
    <div className="max-md:w-full w-1/2 h-full flex flex-col items-center">
      <div className="max-md:mb-4">
        {/* display courseName in large and beautiful way */}
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          {courseName}
        </h1>
      </div>
      <div className="p-4 w-full max-md:mb-4">
        <label
          htmlFor="message"
          className="block mb-2 px-1 text-lg font-medium text-gray-900 dark:text-white"
        >
          Remarks
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your opinion matters"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
        />
      </div>

      <div className="flex flex-col w-5/6 max-md:mb-4">
        <div className="flex justify-between w-full p-4 items-center">
          <label
            htmlFor="rating"
            className="block mb-2 px-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Overall
          </label>
          <Star rating={rating} setRating={setRating} />
        </div>
        <div className="flex justify-between w-full p-4 items-center">
          <label
            htmlFor="ratingQuality"
            className="block mb-2 px-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Quality
          </label>
          <Star rating={ratingQuality} setRating={setRatingQuality} />
        </div>
        <div className="flex justify-between w-full p-4 items-center">
          <label
            htmlFor="ratingAttendance"
            className="block mb-2 px-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Attendance
          </label>
          <Star rating={ratingAttendance} setRating={setRatingAttendance} />
        </div>
        <div className="flex justify-between w-full p-4 items-center">
          <label
            htmlFor="ratingMarks"
            className="block mb-2 px-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Marks
          </label>
          <Star rating={ratingMarks} setRating={setRatingMarks} />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full mt-2 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={async () => {
            try {
              const link =
                import.meta.env.VITE_REVIEWLINK +
                "/user/submitReview/courseCode/" +
                courseCode;
              const token = localStorage.getItem("token");
              const data = {
                details: remark,
                stars: rating,
                attandance_stars: ratingAttendance,
                quality_stars: ratingQuality,
                grade_stars: ratingMarks,
              };

              const response = await axios.post(link, data, {
                headers: {
                  Authorization: token,
                },
              });

              if (response && response.data.message) {
                toast.success(response.data.message);
              }
            } catch (e) {
              console.log(e);
              if (e.response.data.message) toast.error(e.response.data.message);
              else toast.error("Something went wrong");
            }
            if (!last) {
              setRemark("");
              setRating(0);
              setRatingQuality(0);
              setRatingAttendance(0);
              setRatingMarks(0);
              setReviewIndex((prev) => prev + 1);
            }
            if (last) {
              navigate("/", { replace: true });
            }
          }}
        >
          {last ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}
