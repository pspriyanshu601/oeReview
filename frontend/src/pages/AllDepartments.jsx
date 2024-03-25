import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "./Loading";
import { AllDepartmentCard } from "../components/AllDepartmentCard";
import { useRecoilState, useRecoilValue } from "recoil";
import useAuth from "../hooks/useAuth";
import { loadingAtom, usernameAtom } from "../store";

export const AllDepartments = () => {
  useAuth();
  const username = useRecoilValue(usernameAtom);
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const navigate = useNavigate();
  const [allDepts, setAllDepts] = useState([]);

  // send user to login if not logged in
  useEffect(() => {
    if (!loading && username === null) {
      navigate("/", { replace: true });
    }
  }, [loading, navigate, username]);

  // load all departments
  useEffect(() => {
    const depts = async () => {
      setLoading(true);
      try {
        const link = import.meta.env.VITE_REVIEWLINK + "/user/allDepartments";
        const token = localStorage.getItem("token");
        const response = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });
        setAllDepts(response.data.departments);
        setLoading(false);
      } catch (error) {
        console.log(error);
        if (error.response.data.message)
          toast.error(error.response.data.message);
        else toast.error("Something went wrong");
        setLoading(false);
      }
    };
    depts();
  }, [setLoading]);

  if (loading) return <Loading />;
  return (
    <div className="min-h-screen min-w-screen pt-[68px] bg-gray-50 dark:bg-gray-800 p-6 flex flex-wrap">
      <div className="flex flex-wrap justify-center">
        {allDepts.map((dept) => {
          return (
            <AllDepartmentCard key={dept.department_id} department={dept} />
          );
        })}
      </div>
    </div>
  );
};
