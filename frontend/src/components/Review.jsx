/* eslint-disable react/prop-types */
import { useState } from "react";
import Star from "./Star";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loadingAtom, reviewIndexAtom } from "../store";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../pages/Loading";
import { Button, TextField, Typography } from "@mui/material";

export default function Review({ courseName, last, courseCode }) {
  const [remark, setRemark] = useState("");
  const [rating, setRating] = useState(0);
  const [ratingQuality, setRatingQuality] = useState(0);
  const [ratingAttendance, setRatingAttendance] = useState(0);
  const [ratingMarks, setRatingMarks] = useState(0);
  const setReviewIndex = useSetRecoilState(reviewIndexAtom);
  const navigate = useNavigate();
  const [loading, setLoading] = useRecoilState(loadingAtom);

  if (loading) return <Loading />;

  return (
    <div className="md:w-1/2 w-full h-full flex flex-col items-center bg-slate-800 rounded-lg mt-12 p-4">
      <Typography
        variant="h5"
        className="text-center mt-4 text-white"
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add a text shadow for depth
          letterSpacing: "1px", // Add letter spacing for better readability
          textDecoration: "underline", // Add underline for emphasis
        }}
      >
        {courseName}
      </Typography>

      <div className="p-4 w-full max-md:mb-4">
        <TextField
          id="filled-basic"
          label="Remarks"
          fullWidth
          variant="filled"
          placeholder="Your Opinion Matters"
          InputProps={{
            style: {
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "12px",
            },
            classes: {
              root: "textfield-root",
            },
          }}
          InputLabelProps={{ style: { color: "white" } }}
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
        />
      </div>

      <div className="flex flex-col w-full max-md:mb-4">
        <div className="flex justify-between w-full p-4 items-center">
          <label
            htmlFor="rating"
            className="block mb-2 px-1 text-sm font-medium text-white"
          >
            Overall
          </label>
          <Star rating={rating} setRating={setRating} />
        </div>
        <div className="flex justify-between w-full p-4 items-center">
          <label
            htmlFor="ratingQuality"
            className="block mb-2 px-1 text-sm font-medium text-white"
          >
            Quality
          </label>
          <Star rating={ratingQuality} setRating={setRatingQuality} />
        </div>
        <div className="flex justify-between w-full p-4 items-center">
          <label
            htmlFor="ratingAttendance"
            className="block mb-2 px-1 text-sm font-medium text-white"
          >
            Attendance
          </label>
          <Star rating={ratingAttendance} setRating={setRatingAttendance} />
        </div>
        <div className="flex justify-between w-full p-4 items-center">
          <label
            htmlFor="ratingMarks"
            className="block mb-2 px-1 text-sm font-medium text-white"
          >
            Marks
          </label>
          <Star rating={ratingMarks} setRating={setRatingMarks} />
        </div>
      </div>

      <div>
        <Button
          style={{
            background: "lightblue",
            color: "black",
            borderRadius: "10px",
            padding: "10px",
          }}
          onClick={async () => {
            try {
              setLoading(true);
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

              toast.success(response.data.message);
              setLoading(false);
              if (!last) {
                setRemark("");
                setRating(0);
                setRatingQuality(0);
                setRatingAttendance(0);
                setRatingMarks(0);
                setReviewIndex((prev) => prev + 1);
              }
              if (last) {
                navigate("/home", { replace: true });
              }
            } catch (e) {
              setLoading(false);
              console.log(e);
              if (e.response.data.message) toast.error(e.response.data.message);
              else toast.error("Something went wrong");
            }
          }}
        >
          {last ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
}
