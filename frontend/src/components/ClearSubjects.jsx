import toast from "react-hot-toast";
import axios from "axios";
import Loading from "../pages/Loading";
import { useState } from "react";
export default function ClearSubjects() {
  // warning :: dont use loading atom here
  const [loading, setLoading] = useState(false);
  if (loading) return <Loading />;
  return (
    <>
      <div className="flex flex-col items-center w-full justify-center gap-12 h-[80vh]">
        <h1 className="text-white text-4xl text-center mb-4 w-4/">
          This Action is Irreversible
        </h1>
        <button
          className="bg-red-600 text-4xl  text-white p-4 rounded-md m-2 text-center"
          onClick={async () => {
            setLoading(true);
            try {
              const link =
                import.meta.env.VITE_REVIEWLINK + "/admin/clearSubjects";

              const token = localStorage.getItem("token");

              await axios.post(link, null, {
                headers: {
                  Authorization: token,
                },
              });

              toast.success("Cleared Subjects");
              setLoading(false);
            } catch (e) {
              console.log(e);
              toast.error("Failed to clear subjects");
              setLoading(false);
            }
          }}
        >
          Clear Subjects
        </button>
      </div>
    </>
  );
}
