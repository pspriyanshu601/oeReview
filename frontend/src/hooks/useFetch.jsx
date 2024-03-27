import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(run = true, method, path, data = null) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const options = {
          method,
          url: import.meta.env.VITE_REVIEWLINK + path,
          headers: {
            Authorization: localStorage.getItem("token"),
          },
          data,
        };
        const response = await axios(options);
        setResponse(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    if (run) getData();
    else setLoading(false);
  }, [path, method, data, run]);
  return { loading, error, response };
}
