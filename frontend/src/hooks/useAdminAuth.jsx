import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { loadingAtom, usernameAtom } from "../store";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

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
        if (error.response.data.message)
          toast.error(error.response.data.message);
        else toast.error("Something went wrong");
        setUsername(null);
        setLoading(false);
      }
    }
    responses();
  }, [navigate, setUsername, setLoading]);
}
