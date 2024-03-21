import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { usernameAtom } from "../store";

export default function useUsername() {
  const navigate = useNavigate();
  const [username, setUsername] = useRecoilState(usernameAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function responses() {
      try {
        const token = localStorage.getItem("token");
        const link = import.meta.env.VITE_REVIEWLINK + "/user/username";

        const response = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });

        setUsername(response.data.name);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    responses();
  }, [navigate, setUsername]);

  return [username, loading];
}
