import SemesterReset from "../components/SemesterReset";
import VerifyReview from "../components/VerifyReview";
import DeleteReview from "../components/DeleteReview";
import ClearSubjects from "../components/ClearSubjects";
import { adminWorkAtom } from "../store";
import { useRecoilValue } from "recoil";
export default function Admin() {
  const adminWork = useRecoilValue(adminWorkAtom);
  return (
    <div className="min-h-screen bg-gray-800 pt-[90px] p-2 flex flex-col justify-start">
      {adminWork === "verifyReview" && <VerifyReview />}
      {adminWork === "deleteReview" && <DeleteReview />}
      {adminWork === "semesterReset" && <SemesterReset />}
      {adminWork === "clearSubjects" && <ClearSubjects />}
    </div>
  );
}
