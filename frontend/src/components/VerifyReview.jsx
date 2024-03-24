import { useEffect, useState } from "react";
import useAdminUsername from "../hooks/useAdminUsername";
import Loading from "../pages/Loading";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import { useNavigate } from "react-router-dom";

export default function VerifyReview() {
  const [loadingClick, setLoadingClick] = useState(false);
  const [username, loading] = useAdminUsername();
  const [displayReview, setDisplayReview] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !loadingClick && username === null) {
      navigate("/home");
    }
  }, [loading, loadingClick, navigate, username]);

  useEffect(() => {
    const run = async () => {
      setLoadingClick(true);
      try {
        const link =
          import.meta.env.VITE_REVIEWLINK + "/admin/unverifiedReviews";
        const token = localStorage.getItem("token");

        const response = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });
        setDisplayReview(response.data.reviews);
        setLoadingClick(false);
      } catch (error) {
        setLoadingClick(false);
        console.log(error);
      }
    };
    run();
  }, []);

  if (loading || loadingClick) return <Loading />;
  return (
    <>
      {displayReview.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl text-center text-white mb-4">
            No Pending Reviews
          </h1>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl text-center mb-4 text-white">
            Pending Reviews
          </h1>
          <div className="w-full flex max-md:flex-col md:flex-wrap md:justify-center md:gap-4  p-4 items-center">
            {displayReview.map((review, index) => (
              <ReviewCard
                key={index}
                index={index}
                review={review}
                displayReview={displayReview}
                setDisplayReview={setDisplayReview}
                colorDelete={true}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
