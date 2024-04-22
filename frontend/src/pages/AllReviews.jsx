import { useRecoilValue } from "recoil";
import { courseCodeAtom } from "../store";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";
import StarStat from "../components/StarStat";
import useFetch from "../hooks/useFetch";

export default function AllReviews() {
  useAuth();
  const courseCode = useRecoilValue(courseCodeAtom);
  const [reviews, setReviews] = useState([]);
  const [stars, setStars] = useState([0, 0, 0, 0, 0]);
  const [avgStars, setAvgStars] = useState(0);
  const naivigate = useNavigate();

  // send user back to home page if they have not selected a course
  useEffect(() => {
    if (courseCode == null) {
      naivigate("/home", { replace: true });
    }
  }, [courseCode, naivigate]);

  // get reviews from the server
  const { loading, error, response } = useFetch(
    courseCode != null,
    "GET",
    "/user/allVerifiedReviews/courseCode/" + courseCode
  );

  useEffect(() => {
    if (response) {
      setReviews(response.subjectReviews);
      setStars(response.stars);
      setAvgStars(response.avgStars);
    }
  }, [response]);

  if (error) toast.error("Failed to get reviews");

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
            <h1 className="text-white text-4xl text-center mb-4">
              {reviews[0].subject_name}
            </h1>
          </div>
          <div className="max-md:w-full w-2/3 p-6">
            <StarStat
              arrOneToFive={stars}
              rating={avgStars}
              totalRatings={reviews.length}
            />
          </div>

          <div className="mt-6 p-6">
            {reviews.map((review, index) => (
              <div
                className="flex flex-col font-medium text-sm mt-4 bg-gray-800 rounded-md px-6 py-4"
                key={index}
              >
                <div className="mt-2 text-gray-300">
                  {reviews[index].details}
                </div>
                <div className="mt-2 text-gray-300 text-sm font-medium">
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
