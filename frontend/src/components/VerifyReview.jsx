import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../pages/Loading";
import ReviewCard from "./ReviewCard";

export default function VerifyReview() {
  // warning :: loadingAtom is not used here
  const [displayReview, setDisplayReview] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUnverifiedReviews = async () => {
      setLoading(true);
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
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getUnverifiedReviews();
  }, []);

  if (loading) return <Loading />;
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
