import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/oeLogo.png";
import { useRecoilState, useRecoilValue } from "recoil";
import { addingReviewAtom, alreadyAddedReviewAtom } from "../store";
import useAdminUsername from "../hooks/useAdminUsername";

export default function Navbar() {
  const navigate = useNavigate();
  const alreadyAddedReview = useRecoilValue(alreadyAddedReviewAtom);
  const [addingReview, setAddingReview] = useRecoilState(addingReviewAtom);
  const [admin, loading] = useAdminUsername();
  return (
    <nav
      className="bg-green-60 fixed dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
      id="navbar"
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://github.com/pspriyanshu601/oeReview"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={Logo}
            className="h-8 rounded-lg object-contain"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Review
          </span>
        </a>
        <div className="flex gap-4">
          {loading === false && admin !== null && (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => navigate("/home/admin")}
            >
              Admin
            </button>
          )}
          {alreadyAddedReview === false && addingReview === false && (
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  setAddingReview(true);
                  navigate("/home/addSubjects");
                }}
              >
                Add Review
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
