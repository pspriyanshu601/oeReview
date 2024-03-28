import { useRecoilState } from "recoil";
import useAuth from "../hooks/useAuth";
import useFetch from "../hooks/useFetch";
import { userDataAtom, usernameAtom } from "../store";
import { useEffect, useState } from "react";
import { Card, Typography, useMediaQuery } from "@mui/material";
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

  const [page, setPage] = useState(1);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen pt-[68px] bg-gray-50 dark:bg-gray-400">
      <div className="flex flex-col mb-16">
        <h1 className="text-2xl text-center">Hi, {username}</h1>
        <Typography variant="h4" className="text-center mt-4">
          Your Reviews
        </Typography>
        <div className="flex flex-wrap gap-4 justify-center p-6 md:p-16">
          {userData.map((review, index) => (
            <ProfileCard key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
