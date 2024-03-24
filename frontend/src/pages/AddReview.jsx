import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useUsername from "../hooks/useUsername";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import Review from "../components/Review";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { addingReviewAtom, reviewIndexAtom } from "../store";

export default function AddReview() {
  const [subjects, setSubjects] = useState([]);
  const [username, loading] = useUsername();
  const [loadingClick, setLoadingClick] = useState(false);
  const setAddingReview = useSetRecoilState(addingReviewAtom);
  const reviewIndex = useRecoilValue(reviewIndexAtom);

  const navigate = useNavigate();
  useNavigate;
  useEffect(() => {
    setAddingReview(true);
    const run = async () => {
      try {
        setLoadingClick(true);
        const link = import.meta.env.VITE_REVIEWLINK + "/user/userSubjects";
        const token = localStorage.getItem("token");
        const response = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });
        if (response.data.userUnreviewedSubjects.length === 0) {
          navigate("/home", { replace: true });
          return;
        }
        setSubjects(response.data.userUnreviewedSubjects);
        setLoadingClick(false);
      } catch (error) {
        setLoadingClick(false);
        console.log(error);
        if (error.response.data.message)
          toast.error(error.response.data.message);
        else toast.error("Something went wrong");
      }
    };
    run();
  }, [navigate, setAddingReview]);

  useEffect(() => {
    if (username == null && !loading && !loadingClick) {
      navigate("/", { replace: true });
    }
  }, [navigate, username, loading, loadingClick]);

  if (loading || loadingClick) return <Loading />;
  return (
    <div className="h-screen pt-[90px] bg-gray-800 p-2 flex justify-center">
      <Review
        courseName={subjects[reviewIndex].subject_name}
        last={reviewIndex == subjects.length - 1 ? true : false}
        courseCode={subjects[reviewIndex].course_code}
      />
    </div>
  );
}
