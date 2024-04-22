import { useRecoilValue } from "recoil";
import { departmentIdAtom, deptSubjectsAtom } from "../store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeptSubjectsCard } from "../components/DeptSubjectsCard";

export const DeptSubjects = () => {
  const navigate = useNavigate();
  const departmentId = useRecoilValue(departmentIdAtom);
  const deptSubjects = useRecoilValue(deptSubjectsAtom);
  const [subjects, setSubjects] = useState([]);

  // send user to home if departmentId is null or deptSubjects is empty
  useEffect(() => {
    if (departmentId == null || Object.keys(deptSubjects).length == 0)
      navigate("/home", { replace: true });
  }, [departmentId, deptSubjects, navigate]);

  useEffect(() => {
    if (Object.keys(deptSubjects).length !== 0 && departmentId !== null) {
      setSubjects(deptSubjects[departmentId]);
    }
  }, [deptSubjects, departmentId]);

  return (
    <div className="min-h-screen pt-[68px] bg-gray-500">
      <div className="flex flex-wrap gap-4 justify-center p-6">
        {subjects.map((subject) => {
          return (
            <DeptSubjectsCard key={subject.course_code} subject={subject} />
          );
        })}
      </div>
    </div>
  );
};
