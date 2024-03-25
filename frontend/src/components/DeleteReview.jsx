import { useEffect, useState } from "react";
import useAdminUsername from "../hooks/useAdminAuth";
import Loading from "../pages/Loading";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";
import { useNavigate } from "react-router-dom";

export default function DeleteReview() {
  const [username, loading] = useAdminUsername();
  const [loadingClick, setLoadingClick] = useState(false);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !loadingClick && username === null) {
      navigate("/home");
    }
  }, [loading, loadingClick, username, navigate]);

  useEffect(() => {
    const run = async () => {
      try {
        setLoadingClick(true);
        const link = import.meta.env.VITE_REVIEWLINK + "/admin/allReviews";
        const token = localStorage.getItem("token");

        const response = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });

        setReviews(response.data.reviews);
        console.log(response.data);

        setLoadingClick(false);
      } catch (error) {
        setLoadingClick(false);
        console.log(error);
      }
    };

    run();
  }, []);

  console.log(reviews);

  if (loading || loadingClick) return <Loading />;
  return (
    <>
      {reviews.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-2xl text-center mb-4">No Reviews</h1>
        </div>
      ) : (
        <div className="text-white">
          <h1 className="text-2xl text-center mb-4">
            This Action is Irreversible
          </h1>
          <div className="w-full flex max-md:flex-col md:flex-wrap md:justify-center md:gap-4  p-4 items-center">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                review={review}
                displayReview={reviews}
                setDisplayReview={setReviews}
                showVerify={false}
                colorDelete={true}
                deleteReview={true}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
