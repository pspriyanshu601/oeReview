import SemesterReset from "../components/SemesterReset";
import VerifyReview from "../components/VerifyReview";
import DeleteReview from "../components/DeleteReview";
import ClearSubjects from "../components/ClearSubjects";
import { adminWorkAtom, loadingAtom, usernameAtom } from "../store";
import { useRecoilValue } from "recoil";
import useAdminAuth from "../hooks/useAdminAuth";
import Loading from "./Loading";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Admin() {
  useAdminAuth();
  const username = useRecoilValue(usernameAtom);
  const loading = useRecoilValue(loadingAtom);
  const navigate = useNavigate();
  const adminWork = useRecoilValue(adminWorkAtom);

  // send user to login if not admin
  useEffect(() => {
    if (!loading && username == null) {
      navigate("/home", { replace: true });
    }
  }, [navigate, username, loading]);

  if (loading) return <Loading />;
  return (
    <div className="min-h-screen bg-gray-800 pt-[90px] p-2 flex flex-col justify-start">
      {adminWork === "verifyReview" && <VerifyReview />}
      {adminWork === "deleteReview" && <DeleteReview />}
      {adminWork === "semesterReset" && <SemesterReset />}
      {adminWork === "clearSubjects" && <ClearSubjects />}
    </div>
  );
}
