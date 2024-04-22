import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { showAddReviewButtonAtom, usernameAtom } from "../store";
import Bottom from "../components/Bottom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import FloatingButton from "../components/FloatingButton";
import {
  courseAtom,
  departmentsAtom,
  deptSubjectsAtom,
  reviewsAtom,
  reviewsAttendanceAtom,
  reviewsGradesAtom,
  reviewsOverallAtom,
  reviewsQualityAtom,
  sortAtom,
} from "../store";
import HomeCard from "../components/HomeCard";
import useFetch from "../hooks/useFetch";
// import toast from "react-hot-toast";
import { Pagination } from "@mui/material";

export default function Home() {
  const navigate = useNavigate();
  const username = useRecoilValue(usernameAtom);
  const sortValue = useRecoilValue(sortAtom);
  const [page, setPage] = useState(1);
  const [reviews, setReviews] = useRecoilState(reviewsAtom);
  const [allReviews, setAllReviews] = useRecoilState(reviewsOverallAtom);
  const [gradesReviews, setGradesReviews] = useRecoilState(reviewsGradesAtom);
  const [attendanceReviews, setAttendanceReviews] = useRecoilState(
    reviewsAttendanceAtom
  );
  const [qualityReviews, setQualityReviews] =
    useRecoilState(reviewsQualityAtom);
  const [allDepts, setAllDepts] = useRecoilState(departmentsAtom);
  const setDeptSubjects = useSetRecoilState(deptSubjectsAtom);
  const [courses, setCourses] = useRecoilState(courseAtom);

  const [len, setLen] = useState(3);

  const [showButton, setShowButton] = useRecoilState(showAddReviewButtonAtom);

  useEffect(() => {
    if (window.innerWidth < 640) setLen(10);
    else setLen(3);
  }, []);

  // load reviews and departments and subjects from the server
  const {
    loading: loadingOverall,
    error: errorOverall,
    response: responseOverall,
  } = useFetch(allReviews.length == 0, "GET", "/user/weightedSubjects/page/0");

  const {
    loading: loadingButton,
    error: errorButton,
    response: responseButton,
  } = useFetch(
    username != null && username != "notallowed",
    "GET",
    "/user/showAddReviewButton"
  );

  const { error: errorAttendance, response: responseAttendance } = useFetch(
    attendanceReviews.length == 0,
    "GET",
    "/user/weightedSubjects/filter/attendance/page/0"
  );

  const { error: errorQuality, response: responseQuality } = useFetch(
    qualityReviews.length == 0,
    "GET",
    "/user/weightedSubjects/filter/quality/page/0"
  );

  const { error: errorGrades, response: responseGrades } = useFetch(
    gradesReviews.length == 0,
    "GET",
    "/user/weightedSubjects/filter/grades/page/0"
  );

  const { error: errorDepts, response: responseDepts } = useFetch(
    allDepts.length == 0,
    "GET",
    "/user/allDepartments"
  );

  const { error: errorCourses, response: responseCourses } = useFetch(
    courses.length == 0,
    "GET",
    "/user/allSubjects"
  );

  const handleAddReview = async () => {
    if (username === null || username === "notallowed") {
      navigate("/login");
    } else {
      try {
        const link = import.meta.env.VITE_REVIEWLINK + "/user/hasAddedSubjects";
        const token = localStorage.getItem("token");
        const resp = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });
        if (resp.data.hasAddedSubjects) {
          navigate("/home/addReview");
        } else {
          navigate("/home/addSubjects");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  // handle pagination
  useEffect(() => {
    if (allReviews.length == 0) return;
    const st = (page - 1) * len;
    const en = st + len;
    if (sortValue === 0) {
      setReviews(allReviews.slice(st, en));
    } else if (sortValue === 1) {
      setReviews(qualityReviews.slice(st, en));
    } else if (sortValue === 3) {
      setReviews(attendanceReviews.slice(st, en));
    } else if (sortValue === 2) {
      setReviews(gradesReviews.slice(st, en));
    }
  }, [
    allReviews,
    attendanceReviews,
    gradesReviews,
    len,
    page,
    qualityReviews,
    setReviews,
    sortValue,
  ]);

  if (errorOverall) console.log(errorOverall);
  if (errorAttendance) console.log(errorAttendance);
  if (errorQuality) console.log(errorQuality);
  if (errorGrades) console.log(errorGrades);
  if (errorDepts) console.log(errorDepts);
  if (errorCourses) console.log(errorCourses);
  if (errorButton) console.log(errorButton);

  if (responseOverall) setAllReviews(responseOverall.reviews);
  if (responseAttendance) setAttendanceReviews(responseAttendance.reviews);
  if (responseDepts) setAllDepts(responseDepts.departments);
  if (responseQuality) setQualityReviews(responseQuality.reviews);
  if (responseGrades) setGradesReviews(responseGrades.reviews);
  if (responseButton) setShowButton(responseButton.value);

  if (responseCourses && courses.length == 0) {
    setDeptSubjects(responseCourses.subjects);
    let temp = [];
    for (let i = 1; i <= 18; i++) {
      temp = temp.concat(
        responseCourses.subjects[i].map((item) => {
          const name = item.subject_name + " " + item.course_code;
          return { id: item.subject_id, name: name };
        })
      );
    }
    setCourses(temp);
  }

  if (loadingOverall || loadingButton) return <Loading />;

  return (
    <div className="min-h-screen pt-[68px] bg-gray-500">
      {(username == null || username == "notallowed" || showButton) && (
        <FloatingButton onClick={handleAddReview} />
      )}
      <div className="flex flex-wrap gap-4 justify-center p-6 md:p-16">
        {reviews.map((review, index) => {
          const rank = index + 1 + (page - 1) * len;
          return (
            <HomeCard
              key={index}
              review={review}
              rank={rank}
              width={window.innerWidth}
            />
          );
        })}
      </div>

      <div
        className={`md:fixed md:bottom-8 md:w-full bw-full pb-16 flex justify-center text-white bg-gray-500`}
      >
        <Pagination
          count={
            allReviews.length % len == 0
              ? parseInt(allReviews.length / len)
              : parseInt(allReviews.length / len) + 1
          }
          page={page}
          onChange={(e, v) => setPage(v)}
          style={{ color: "white" }}
        />
      </div>
      <Bottom />
    </div>
  );
}
