import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  departmentsAtom,
  loadingAtom,
  reviewsAtom,
  reviewsAttendanceAtom,
  reviewsGradesAtom,
  reviewsOverallAtom,
  reviewsQualityAtom,
  sortAtom,
  usernameAtom,
  widthAtom,
} from "../store";
import useAuth from "../hooks/useAuth";
import HomeCard from "../components/HomeCard";
import useScreenWidth from "../hooks/useScreenWidth";

const len = 10;

export default function Home() {
  useAuth();
  const width = useRecoilValue(widthAtom);
  useScreenWidth();
  const navigate = useNavigate();
  const username = useRecoilValue(usernameAtom);
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const sortValue = useRecoilValue(sortAtom);

  const [reviews, setReviews] = useRecoilState(reviewsAtom);
  const [allReviews, setAllReviews] = useRecoilState(reviewsOverallAtom);
  const [attendanceReviews, setAttendanceReviews] = useRecoilState(
    reviewsAttendanceAtom
  );
  const [allDepts, setAllDepts] = useRecoilState(departmentsAtom);
  const [qualityReviews, setQualityReviews] =
    useRecoilState(reviewsQualityAtom);
  const [gradesReviews, setGradesReviews] = useRecoilState(reviewsGradesAtom);

  const [page, setPage] = useState(1);

  // send user to login if not logged in
  useEffect(() => {
    if (username == null) navigate("/", { replace: true });
  }, [navigate, username]);

  // load all departments and reviews
  useEffect(() => {
    const responses = async () => {
      try {
        setLoading(true);
        if (allReviews.length == 0) {
          const token = localStorage.getItem("token");
          const linkOverall =
            import.meta.env.VITE_REVIEWLINK + "/user/weightedSubjects/page/0";
          const responseOverall = await axios.get(linkOverall, {
            headers: { Authorization: token },
          });
          setAllReviews(responseOverall.data.reviews);

          const linkAttendance =
            import.meta.env.VITE_REVIEWLINK +
            "/user/weightedSubjects/filter/attendance/page/0";
          const responseAttendance = await axios.get(linkAttendance, {
            headers: { Authorization: token },
          });
          setAttendanceReviews(responseAttendance.data.reviews);

          const linkQuality =
            import.meta.env.VITE_REVIEWLINK +
            "/user/weightedSubjects/filter/quality/page/0";
          const responseQuality = await axios.get(linkQuality, {
            headers: { Authorization: token },
          });
          setQualityReviews(responseQuality.data.reviews);

          const linkGrades =
            import.meta.env.VITE_REVIEWLINK +
            "/user/weightedSubjects/filter/grades/page/0";
          const responseGrades = await axios.get(linkGrades, {
            headers: { Authorization: token },
          });
          setGradesReviews(responseGrades.data.reviews);
        }
        if (allDepts.length == 0) {
          const link = import.meta.env.VITE_REVIEWLINK + "/user/allDepartments";
          const token = localStorage.getItem("token");
          const response = await axios.get(link, {
            headers: {
              Authorization: token,
            },
          });
          setAllDepts(response.data.departments);
        }
        setLoading(false);
      } catch (error) {
        console.log("error at home", error);
        setLoading(false);
      }
    };
    if (username != null && username != "notallowed") {
      responses();
    }
  }, [
    allDepts.length,
    allReviews.length,
    setAllDepts,
    setAllReviews,
    setAttendanceReviews,
    setGradesReviews,
    setLoading,
    setQualityReviews,
    username,
  ]);

  useEffect(() => {
    if (allReviews.length == 0) return;
    const st = (page - 1) * len;
    const en = st + len;
    if (sortValue === 0) {
      setReviews(allReviews.slice(st, en));
    } else if (sortValue === 3) {
      setReviews(attendanceReviews.slice(st, en));
    } else if (sortValue === 1) {
      setReviews(qualityReviews.slice(st, en));
    } else if (sortValue === 2) {
      setReviews(gradesReviews.slice(st, en));
    }
  }, [
    allReviews,
    attendanceReviews,
    gradesReviews,
    page,
    qualityReviews,
    setReviews,
    sortValue,
  ]);

  if (loading) return <Loading />;

  return (
    <>
      <div className="min-h-screen pt-[68px] bg-gray-50 dark:bg-gray-400">
        {/* <div className="h-16 flex items-center justify-between bg-gray-900 text-white px-5">
          <div className="flex items-center font-medium">
            <p className="text-white text-2xl">Most reviewed OE</p>
          </div>
        </div> */}

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

        <div className="flex flex-wrap gap-4 justify-center p-6 mb-12">
          {reviews.map((review, index) => {
            const rank = index + 1 + (page - 1) * len;

            return (
              <HomeCard key={index} review={review} rank={rank} width={width} />
            );
          })}
        </div>

        {/* <div className="flex justify-between px-5 py-3 bg-gray-800 text-white">
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
              if (reviews.length == len) setPage(page + 1);
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Next
          </button>
        </div> */}
      </div>
    </>
  );
}
