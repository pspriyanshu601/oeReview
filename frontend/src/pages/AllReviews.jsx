import { useRecoilState, useRecoilValue } from "recoil";
import { courseCodeAtom, loadingAtom, usernameAtom } from "../store";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";
import StarStat from "../components/StarStat";

export default function AllReviews() {
  useAuth();
  const username = useRecoilValue(usernameAtom);
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const courseCode = useRecoilValue(courseCodeAtom);
  const [reviews, setReviews] = useState([]);
  const [stars, setStars] = useState([0, 0, 0, 0, 0]);
  const [attendanceStars, setAttendanceStars] = useState([0, 0, 0, 0, 0]);
  const [gradesStars, setGradesStars] = useState([0, 0, 0, 0, 0]);
  const [qualityStars, setQualityStars] = useState([0, 0, 0, 0, 0]);
  const [avgStars, setAvgStars] = useState(0);
  const [avgAttendanceStars, setAvgAttendanceStars] = useState(0);
  const [avgGradesStars, setAvgGradesStars] = useState(0);
  const [avgQualityStars, setAvgQualityStars] = useState(0);
  const naivigate = useNavigate();
  // get username from local storage

  // send user back to home page if they are not logged in
  useEffect(() => {
    if (!loading && username == null) {
      naivigate("/", { replace: true });
    }
  }, [loading, username, naivigate]);

  // send user back to home page if they have not selected a course
  useEffect(() => {
    if (courseCode == null) {
      naivigate("/home", { replace: true });
    }
  }, [courseCode, naivigate]);

  // get all reviews for the course
  useEffect(() => {
    const getReviews = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const link =
          import.meta.env.VITE_REVIEWLINK +
          "/user/allVerifiedReviews/courseCode/" +
          courseCode;
        const response = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });
        setReviews(response.data.subjectReviews);
        setStars(response.data.stars);
        setAttendanceStars(response.data.attendanceStars);
        setGradesStars(response.data.gradesStars);
        setQualityStars(response.data.qualityStars);
        setAvgStars(response.data.avgStars);
        setAvgAttendanceStars(response.data.avgAttendanceStars);
        setAvgGradesStars(response.data.avgGradesStars);
        setAvgQualityStars(response.data.avgQualityStars);
        setLoading(false);
      } catch (e) {
        console.log(e);
        if (e.response.data.message) {
          toast.error(e.response.data.message);
        } else {
          toast.error("Failed to get reviews");
        }
        setLoading(false);
      }
    };
    getReviews();
  }, [courseCode, setLoading]);

  console.log(reviews);

  if (loading) return <Loading />;
  return (
    <div className="min-h-screen bg-black pt-[90px] p-2 flex flex-col justify-start">
      {reviews.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-2xl text-center mb-4">
            No Reviews Yet
          </h1>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-2xl text-center mb-4">
              {reviews[0].subject_name}
            </h1>
          </div>

          <StarStat
            arrOneToFive={stars}
            rating={avgStars}
            totalRatings={reviews.length}
          />

          <div className="mt-6 p-6">
            {reviews.map((review, index) => (
              <div
                className="flex flex-col font-medium text-sm mt-4 bg-gray-800 rounded-md px-6 py-4"
                key={index}
              >
                <div className="mt-2 text-gray-400">
                  {reviews[index].details}
                </div>
                <div className="mt-2 text-gray-400 text-sm font-medium">
                  Overall {reviews[index].stars} | Attendance{" "}
                  {reviews[index].attendance_stars} | Grades{" "}
                  {reviews[index].grades_stars} | Quality{" "}
                  {reviews[index].quality_stars}
                </div>
                <div className="flex justify-end text-gray-500 text-sm font-medium">
                  {reviews[index].time_elapsed}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
