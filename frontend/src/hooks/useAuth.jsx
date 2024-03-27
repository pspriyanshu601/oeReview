import axios from "axios";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loadingAtom, usernameAtom } from "../store";
import { useNavigate } from "react-router-dom";

export default function useAuth(inAuth = false) {
  const setLoading = useSetRecoilState(loadingAtom);
  const [username, setUsername] = useRecoilState(usernameAtom);
  const navigate = useNavigate();

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
        if (inAuth) navigate("/home", { replace: true });
        setLoading(false);
      } catch (error) {
        console.log(error);
        if (!inAuth) navigate("/", { replace: true });
        setUsername(null);
        setLoading(false);
      }
    }
    if (username == null || username == "notallowed") responses();
  }, [setLoading, setUsername, username, navigate, inAuth]);
}
