import Loading from "./Loading";
import { AllDepartmentCard } from "../components/AllDepartmentCard";
import { useRecoilValue } from "recoil";
import useAuth from "../hooks/useAuth";
import { departmentsAtom, loadingAtom } from "../store";

export const AllDepartments = () => {
  useAuth();
  const loading = useRecoilValue(loadingAtom);
  const allDepts = useRecoilValue(departmentsAtom);

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
