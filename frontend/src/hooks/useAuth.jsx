import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { loadingAtom, usernameAtom } from "../store";

export default function useAuth() {
  const navigate = useNavigate();
  const setLoading = useSetRecoilState(loadingAtom);
  const setUsername = useSetRecoilState(usernameAtom);
  useEffect(() => {
    async function responses() {
      setLoading(true);
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
        setUsername(null);
        setLoading(false);
      }
    }
    responses();
  }, [navigate, setUsername, setLoading]);
}
