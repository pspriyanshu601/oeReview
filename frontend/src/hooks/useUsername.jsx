import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { usernameAtom } from "../store";

export default function useUsername() {
  const navigate = useNavigate();
  const [username, setUsername] = useRecoilState(usernameAtom);

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
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    }

    responses();
  }, [navigate, setUsername]);

  return username;
}
