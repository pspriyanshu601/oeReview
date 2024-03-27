import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { adminUserAtom, loadingAtom } from "../store";
import { useEffect } from "react";
import axios from "axios";

export default function useAdminAuth() {
  const navigate = useNavigate();
  const [username, setUsername] = useRecoilState(adminUserAtom);
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
    if (username == null || username == "notallowed") responses();
  }, [navigate, setUsername, setLoading, username]);
}
