import { useRecoilState } from "recoil";
import useAuth from "../hooks/useAuth";
import useFetch from "../hooks/useFetch";
import { userDataAtom, usernameAtom } from "../store";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import ProfileCard from "../components/ProfileCard";
import Loading from "./Loading";

export default function Profile() {
  useAuth();
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const username = useRecoilState(usernameAtom);

  const { loading, error, response } = useFetch(
    userData.length == 0,
    "GET",
    "/user/userData"
  );

  useEffect(() => {
    if (response) {
      setUserData(response.userReviews);
    }
  }, [response, setUserData]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen pt-[68px] bg-gray-500">
      <div className="flex flex-col pb-16">
        <h1 className="text-4xl text-center mt-4">Hi, {username}</h1>
        <Typography variant="h4" className="text-center mt-4">
          Your Reviews
        </Typography>
        <div className="flex flex-wrap gap-8 justify-center p-6">
          {userData.map((review, index) => (
            <ProfileCard key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
