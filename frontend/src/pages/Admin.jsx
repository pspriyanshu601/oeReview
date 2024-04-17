import { adminUserAtom, adminWorkAtom, loadingAtom } from "../store";
import { useRecoilValue } from "recoil";
import useAdminAuth from "../hooks/useAdminAuth";
import Loading from "./Loading";
import VerifyReview from "../components/VerifyReview";
import DeleteReview from "../components/DeleteReview";
import SemesterReset from "../components/SemesterReset";
import ClearSubjects from "../components/ClearSubjects";
export default function Admin() {
  useAdminAuth();
  const username = useRecoilValue(adminUserAtom);
  const loading = useRecoilValue(loadingAtom);
  const adminWork = useRecoilValue(adminWorkAtom);

  if (loading) return <Loading />;
  if (!loading && (username == null || username === "notallowed")) {
    return (
      <div className="min-h-screen pt-[68px] bg-slate-800">
        <div className="flex justify-center items-center h-full mt-12">
          <h1>Hi There , looks like you are not an admin !</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen pt-[68px] bg-slate-800">
      <div className="p-6 mb-12">
        {adminWork === 0 && <VerifyReview />}
        {adminWork === 1 && <DeleteReview />}
        {adminWork === 2 && <SemesterReset />}
        {adminWork === 3 && <ClearSubjects />}
      </div>
    </div>
  );
}
