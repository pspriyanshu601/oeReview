import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import Review from "../components/Review";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  addingReviewAtom,
  loadingAtom,
  reviewIndexAtom,
  usernameAtom,
} from "../store";
import useAuth from "../hooks/useAuth";

export default function AddReview() {
  useAuth();
  const navigate = useNavigate();
  const username = useRecoilValue(usernameAtom);
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const [subjects, setSubjects] = useState([]);
  const reviewIndex = useRecoilValue(reviewIndexAtom);
  const setAddingReview = useSetRecoilState(addingReviewAtom);

  // send user to login if not logged in
  useEffect(() => {
    if (!loading && username == null) {
      navigate("/", { replace: true });
    }
  }, [navigate, username, loading]);

  // get the subjects to review
  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        const link = import.meta.env.VITE_REVIEWLINK + "/user/userSubjects";
        const token = localStorage.getItem("token");
        const response = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });
        if (response.data.userUnreviewedSubjects.length === 0) {
          toast(() => <span>Semester subject review limit reached.</span>);
          navigate("/home", { replace: true });
        }
        setSubjects(response.data.userUnreviewedSubjects);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        if (error.response.data.message)
          toast.error(error.response.data.message);
        else toast.error("Something went wrong");
      }
    };
    run();
  }, [navigate, setAddingReview, setLoading]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen pt-[68px] bg-slate-800 flex justify-center p-4">
      {subjects.length > 0 && (
        <Review
          courseName={subjects[reviewIndex].subject_name}
          last={reviewIndex == subjects.length - 1 ? true : false}
          courseCode={subjects[reviewIndex].course_code}
        />
      )}
    </div>
  );
}
