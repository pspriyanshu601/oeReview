import SemesterReset from "../components/SemesterReset";
import VerifyReview from "../components/VerifyReview";
import DeleteReview from "../components/DeleteReview";
import { adminWorkAtom } from "../store";
import { useRecoilValue } from "recoil";
import toast from "react-hot-toast";
import axios from "axios";
export default function Admin() {
  const adminWork = useRecoilValue(adminWorkAtom);
  return (
    <div className="min-h-screen bg-gray-800 pt-[90px] p-2 flex flex-col justify-start">
      {/* {adminWork === "verifyReview" && <VerifyReview />}
      {adminWork === "deleteReview" && <DeleteReview />}
      {adminWork === "semesterReset" && <SemesterReset />} */}

      <div className="flex flex-col items-center w-full justify-center gap-12 h-[80vh]">
        <h1 className="text-white text-4xl text-center mb-4 w-4/">
          This Action is Irreversible
        </h1>
        <button
          className="bg-red-600 text-4xl  text-white p-4 rounded-md m-2 text-center"
          onClick={async () => {
            try {
              const link =
                import.meta.env.VITE_REVIEWLINK + "/admin/clearSubjects";

              const token = localStorage.getItem("token");

              await axios.patch(link, {
                headers: {
                  Authorization: token,
                },
              });

              toast.success("Cleared Subjects");
            } catch (e) {
              console.log(e);
              toast.error("Failed to clear subjects");
            }
          }}
        >
          Semester Reset of All Students
        </button>
      </div>
    </div>
  );
}
