import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/oeLogo.png";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  addingReviewAtom,
  adminWorkAtom,
  alreadyAddedReviewAtom,
  sortAtom,
} from "../store";
import useAdminUsername from "../hooks/useAdminUsername";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const alreadyAddedReview = useRecoilValue(alreadyAddedReviewAtom);
  const [addingReview, setAddingReview] = useRecoilState(addingReviewAtom);
  const [admin, loading] = useAdminUsername();
  const [sortValue, setSortValue] = useRecoilState(sortAtom);

  const [isOpen, setIsOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  const [adminWork, setAdminWork] = useRecoilState(adminWorkAtom);
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
        <div className="flex gap-1">
          {loading === false && admin !== null && (
            // <button
            //   type="button"
            //   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            //   onClick={() => navigate("/home/admin")}
            // >
            //   Admin
            // </button>

            // same for admin
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  id="options-menu"
                  aria-expanded={adminOpen}
                  aria-haspopup="true"
                  onClick={() => setAdminOpen(!adminOpen)}
                >
                  {adminWork ? adminWork : "Admin"}
                </button>
              </div>
              {adminOpen && (
                <div
                  className="origin-top-right absolute cursor-pointer right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div
                    className="py-1"
                    onClick={() => {
                      setAdminOpen(false);
                      navigate("/home/admin");
                    }}
                  >
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                      onClick={() => {
                        if (adminWork !== "verifyReview")
                          setAdminWork("verifyReview");
                      }}
                    >
                      Verify Review
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                      onClick={() => {
                        if (adminWork !== "deleteReview")
                          setAdminWork("deleteReview");
                      }}
                    >
                      Delete Review
                    </a>
                    <a
                      onClick={() => {
                        if (adminWork !== "semesterReset")
                          setAdminWork("semesterReset");
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                      Semester Reset
                    </a>
                    <a
                      onClick={() => {
                        if (adminWork !== "clearSubjects")
                          setAdminWork("clearSubjects");
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                      Clear Subjects
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                id="options-menu"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={() => setIsOpen(!isOpen)}
              >
                {sortValue}
              </button>
            </div>
            {isOpen && (
              <div
                className="origin-top-right absolute cursor-pointer right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div
                  className="py-1"
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/home");
                  }}
                >
                  <a
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => {
                      if (sortValue !== "overall") setSortValue("overall");
                    }}
                  >
                    Overall
                  </a>
                  <a
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => {
                      if (sortValue !== "attendance")
                        setSortValue("attendance");
                    }}
                  >
                    Attendance
                  </a>
                  <a
                    onClick={() => {
                      if (sortValue !== "grades") setSortValue("grades");
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    Grades
                  </a>
                  <a
                    onClick={() => {
                      if (sortValue !== "quality") setSortValue("quality");
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    Quality
                  </a>
                </div>
              </div>
            )}
          </div>

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

{
  /* <div className="h-16 flex items-center justify-between bg-gray-900 text-white px-5">
  <div className="flex items-center">
    <p className="text-white text-2xl">Most reviewed OE</p>
  </div>
  <select
    value={sortValue}
    onChange={handleChange}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <option value="overall">Overall</option>
    <option value="attendance">Attendance</option>
    <option value="quality">Quality</option>
    <option value="grades">Grades</option>
  </select>
</div>; */
}
