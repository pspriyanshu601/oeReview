import Loading from "./Loading";
import AllDepartmentCard from "../components/AllDepartmentCard";
import { useRecoilValue } from "recoil";
import useAuth from "../hooks/useAuth";
import { departmentsAtom, loadingAtom, widthAtom } from "../store";
import { useMediaQuery } from "@mui/material";

export const AllDepartments = () => {
  useAuth();
  const loading = useRecoilValue(loadingAtom);
  const allDepts = useRecoilValue(departmentsAtom);
  const width = useRecoilValue(widthAtom);

  if (loading) return <Loading />;
  return (
    <div className="min-h-screen pt-[68px] bg-gray-50 dark:bg-gray-400">
      <div className="flex flex-wrap gap-4 justify-center p-6 mb-12">
        {allDepts.map((dept) => {
          return (
            <AllDepartmentCard
              key={dept.department_id}
              department={dept}
              width={width}
            />
          );
        })}
      </div>
    </div>
  );
};
