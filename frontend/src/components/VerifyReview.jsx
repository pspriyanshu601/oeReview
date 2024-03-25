// import { useEffect } from "react";
// import axios from "axios";
// import { loadingAtom } from "../store";
// import { useRecoilState } from "recoil";

export default function VerifyReview() {
  // const [loading, setLoading] = useRecoilState(loadingAtom);
  // console.log(loading);
  // const [displayReview, setDisplayReview] = useState([]);

  // useEffect(() => {
  //   const getUnverifiedReviews = async () => {
  //     setLoading(true);
  //     try {
  //       const link =
  //         import.meta.env.VITE_REVIEWLINK + "/admin/unverifiedReviews";
  //       const token = localStorage.getItem("token");

  //       const response = await axios.get(link, {
  //         headers: {
  //           Authorization: token,
  //         },
  //       });

  //       console.log(response.data.reviews);
  //       // setDisplayReview(response.data.reviews);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       console.log(error);
  //     }
  //   };
  //   getUnverifiedReviews();
  // }, [setLoading]);

  // console.log(loading);

  // console.log(displayReview);
  // const [displayReview, setDisplayReview] = useState([]);
  // console.log("hi");
  // console.log("loading", loading);

  // useEffect(() => {
  //   const run = async () => {
  //     setLoading(true);
  //     try {
  //       const link =
  //         import.meta.env.VITE_REVIEWLINK + "/admin/unverifiedReviews";
  //       const token = localStorage.getItem("token");

  //       const response = await axios.get(link, {
  //         headers: {
  //           Authorization: token,
  //         },
  //       });

  //       console.log(response.data.reviews);
  //       // setDisplayReview(response.data.reviews);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       console.log(error);
  //     }
  //   };
  //   run();
  // }, []);

  // console.log(displayReview);

  // console.log("hi");

  // if (loading) return <Loading />;
  return (
    <>
      <h1 className="text-3xl text-white">hi</h1>
    </>
    // <>
    //   {displayReview.length === 0 ? (
    //     <div className="flex flex-col items-center justify-center h-full">
    //       <h1 className="text-2xl text-center text-white mb-4">
    //         No Pending Reviews
    //       </h1>
    //     </div>
    //   ) : (
    //     <div>
    //       <h1 className="text-2xl text-center mb-4 text-white">
    //         Pending Reviews
    //       </h1>
    //       <div className="w-full flex max-md:flex-col md:flex-wrap md:justify-center md:gap-4  p-4 items-center">
    //         {displayReview.map((review, index) => (
    //           <ReviewCard
    //             key={index}
    //             index={index}
    //             review={review}
    //             displayReview={displayReview}
    //             setDisplayReview={setDisplayReview}
    //             colorDelete={true}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   )}
    // </>
  );
}
