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
    <div className="min-h-screen bg-gray-800 pt-[90px] p-2 flex flex-col justify-start">
      <StarStat
        arrOneToFive={stars}
        rating={avgStars}
        totalRatings={reviews.length}
      />
    </div>
  );
}
