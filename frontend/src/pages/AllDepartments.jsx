import AllDepartmentCard from "../components/AllDepartmentCard";
import { useRecoilValue } from "recoil";
import { departmentsAtom } from "../store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AllDepartments = () => {
  const allDepts = useRecoilValue(departmentsAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (allDepts.length == 0) navigate("/home", { replace: true });
  }, [allDepts, navigate]);

  return (
    <div className="min-h-screen pt-[68px] bg-gray-500">
      <div className="flex flex-wrap gap-4 justify-center p-6 pb-16">
        {allDepts.map((dept) => {
          return (
            <AllDepartmentCard key={dept.department_id} department={dept} />
          );
        })}
      </div>
    </div>
  );
};
