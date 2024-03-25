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
    if (departmentId === null) navigate("/home/allDepartments");
  }, [username, loading, navigate, departmentId]);

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

  return <div className="mt-[68px]">DeptSubjects</div>;
};
