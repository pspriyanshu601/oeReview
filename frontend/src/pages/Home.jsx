import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  departmentsAtom,
  deptSubjectsAtom,
  reviewsAtom,
  reviewsAttendanceAtom,
  reviewsGradesAtom,
  reviewsOverallAtom,
  reviewsQualityAtom,
  sortAtom,
  widthAtom,
} from "../store";
import useAuth from "../hooks/useAuth";
import HomeCard from "../components/HomeCard";
import useScreenWidth from "../hooks/useScreenWidth";
import useFetch from "../hooks/useFetch";
import toast from "react-hot-toast";

const len = 10;

export default function Home() {
  useAuth();
  useScreenWidth();
  const width = useRecoilValue(widthAtom);
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
  const [deptSubjects, setDeptSubjects] = useRecoilState(deptSubjectsAtom);

  // load reviews and departments and subjects from the server
  const {
    loading: loadingOverall,
    error: errorOverall,
    response: responseOverall,
  } = useFetch(allReviews.length == 0, "GET", "/user/weightedSubjects/page/0");
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
  const { error: errorSubjects, response: responseSubjects } = useFetch(
    Object.keys(deptSubjects).length == 0,
    "GET",
    "/user/allSubjects"
  );

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
    page,
    qualityReviews,
    setReviews,
    sortValue,
  ]);

  if (errorOverall) toast.error("Error fetching overall reviews");
  if (errorAttendance) toast.error("Error fetching attendance reviews");
  if (errorQuality) toast.error("Error fetching quality reviews");
  if (errorGrades) toast.error("Error fetching grades reviews");
  if (errorDepts) toast.error("Error fetching departments");
  if (errorSubjects) toast.error("Error fetching subjects");

  if (responseOverall) setAllReviews(responseOverall.reviews);
  if (responseAttendance) setAttendanceReviews(responseAttendance.reviews);
  if (responseDepts) setAllDepts(responseDepts.departments);
  if (responseSubjects) setDeptSubjects(responseSubjects.subjects);
  if (responseQuality) setQualityReviews(responseQuality.reviews);
  if (responseGrades) setGradesReviews(responseGrades.reviews);

  if (loadingOverall) return <Loading />;

  return (
    <div className="min-h-screen pt-[68px] bg-gray-50 dark:bg-gray-400">
      <div className="flex flex-wrap gap-4 justify-center p-6 mb-12">
        {reviews.map((review, index) => {
          const rank = index + 1 + (page - 1) * len;
          return (
            <HomeCard key={index} review={review} rank={rank} width={width} />
          );
        })}
      </div>
    </div>
  );
}
