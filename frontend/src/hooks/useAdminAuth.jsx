import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { loadingAtom, usernameAtom } from "../store";
import { useEffect } from "react";
import axios from "axios";

export default function useAdminAuth() {
  const navigate = useNavigate();
  const setUsername = useSetRecoilState(usernameAtom);
  const setLoading = useSetRecoilState(loadingAtom);

  useEffect(() => {
    async function responses() {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const link = import.meta.env.VITE_REVIEWLINK + "/admin/username";

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
