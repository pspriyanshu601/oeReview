import toast from "react-hot-toast";
import axios from "axios";
export default function ClearSubjects() {
  return (
    <>
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

              await axios.post(link, null, {
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
          Clear Subjects
        </button>
      </div>
    </>
  );
}
