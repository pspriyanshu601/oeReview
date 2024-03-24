import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { adminUserAtom } from "../store";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function useAdminUsername() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useRecoilState(adminUserAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function responses() {
      try {
        const token = localStorage.getItem("token");
        const link = import.meta.env.VITE_REVIEWLINK + "/admin/username";

        const response = await axios.get(link, {
          headers: {
            Authorization: token,
          },
        });

        setAdmin(response.data.name);
        setLoading(false);
      } catch (error) {
        console.log(error);
        if (error.response.data.message)
          toast.error(error.response.data.message);
        else toast.error("Something went wrong");
        setLoading(false);
      }
    }
    responses();
  }, [navigate, setAdmin]);

  return [admin, loading];
}
