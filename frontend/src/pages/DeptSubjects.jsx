import { useRecoilState, useRecoilValue } from "recoil";
import {
  departmentIdAtom,
  loadingAtom,
  sortAtom,
  usernameAtom,
} from "../store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Loading from "./Loading";
import useAuth from "../hooks/useAuth";
import { DeptSubjectsCard } from "../components/DeptSubjectsCard";

export const DeptSubjects = () => {
  useAuth();
  const navigate = useNavigate();
  const departmentId = useRecoilValue(departmentIdAtom);

  const [loading, setLoading] = useRecoilState(loadingAtom);
  const username = useRecoilValue(usernameAtom);

  const [subjects, setSubjects] = useState([]);

  const sortValue = useRecoilValue(sortAtom);

  useEffect(() => {
    if (!loading && username === null) navigate("/", { replace: true });
  }, [username, loading, navigate, departmentId]);

  useEffect(() => {
    if (!loading && departmentId === null) navigate("/home", { replace: true });
  }, [departmentId, loading, navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const getSubjects = async () => {
      setLoading(true);

      try {
        const link =
          import.meta.env.VITE_REVIEWLINK +
          "/user/allSubjects/departmentId/" +
          departmentId +
          "/filter/" +
          sortValue;

        const response = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });

        if (response && response.data) {
          setSubjects(response.data.subjects);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        if (error.response.data.message)
          toast.error(error.response.data.message);
        else toast.error("Something went wrong");
      }
    };

    getSubjects();
  }, [departmentId, sortValue, setLoading]);

  if (loading) return <Loading />;

  console.log(subjects);

  return (
    <div className="min-h-screen min-w-screen pt-[68px] bg-gray-50 dark:bg-gray-800 p-6 flex flex-wrap">
      <div className="flex flex-wrap justify-center">
        {subjects.map((subject) => {
          return (
            <DeptSubjectsCard key={subject.course_code} subject={subject} />
          )
        })}
      </div>
    </div>
  )
};
