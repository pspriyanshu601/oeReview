import { useRecoilState, useRecoilValue } from "recoil";
import {
  departmentIdAtom,
  deptSubjectsAtom,
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

  const loading = useRecoilValue(loadingAtom);
  const username = useRecoilValue(usernameAtom);

  // send user to login if not logged in
  useEffect(() => {
    if (!loading && username === null) navigate("/", { replace: true });
  }, [username, loading, navigate, departmentId]);

  // send user to home if departmentId is null
  useEffect(() => {
    console.log("departmentId", departmentId);
    console.log("loading", loading);
    if (!loading && departmentId == null) navigate("/home", { replace: true });
  }, [departmentId, loading, navigate]);

  const deptSubjects = useRecoilValue(deptSubjectsAtom);
  const subjects =
    departmentId in deptSubjects ? deptSubjects[departmentId] : [];
  if (loading) return <Loading />;
  return (
    <div className="min-h-screen min-w-screen pt-[68px] bg-gray-50 dark:bg-gray-800 p-6 flex flex-wrap">
      <div className="flex flex-wrap justify-center">
        <>
          {subjects.length == 0 ? (
            <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
              No subjects found
            </div>
          ) : (
            <>
              {subjects.map((subject) => {
                return (
                  <DeptSubjectsCard
                    key={subject.course_code}
                    subject={subject}
                  />
                );
              })}
            </>
          )}
        </>
      </div>
      <div>hi</div>
    </div>
  );
};
