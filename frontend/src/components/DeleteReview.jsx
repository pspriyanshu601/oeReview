import { useEffect, useState } from "react";
import Loading from "../pages/Loading";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";

export default function DeleteReview() {
  // warning: dont use loadingAtom here
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        const link = import.meta.env.VITE_REVIEWLINK + "/admin/allReviews";
        const token = localStorage.getItem("token");

        const response = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });

        setReviews(response.data.reviews);
        console.log(response.data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    run();
  }, []);

  console.log(reviews);

  if (loading) return <Loading />;
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
