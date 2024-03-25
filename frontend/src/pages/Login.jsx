import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { InputField } from "../components/InputField";
import useUsername from "../hooks/useUsername";
import toast from "react-hot-toast";
import Loading from "./Loading";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [username, loading] = useUsername();
  const [loadingClick, setLoadingClick] = useState(false);

  useEffect(() => {
    if (username != null) navigate("/home", { replace: true });
  }, [navigate, username]);

  const link = import.meta.env.VITE_REVIEWLINK + "/auth/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingClick(true);
    try {
      const response = await axios.post(link, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      toast.success(response.data.message);
      setLoadingClick(false);
      if (response.data.path) {
        navigate("/" + response.data.path, { replace: true });
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.message) toast.error(error.response.data.message);
      else toast.error("An error occurred");
      setLoadingClick(false);
    }
  };

  if (loading || loadingClick) return <Loading />;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <InputField
                label={`Email`}
                value={email}
                onchange={handleEmailChange}
                placeholder={"xxxxx@iitism.ac.in"}
                type={"email"}
              />
              <InputField
                label={`Password`}
                value={password}
                onchange={handlePasswordChange}
                placeholder={"••••••••"}
                type={"password"}
              />

              <button
                type="submit"
                className="w-full text-white bg-primary-600 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don{`'`}t have an account?{" "}
                <a
                  to="register"
                  className="font-medium text-blue-400 hover:underline dark:text-primary-500 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/register", { replace: true });
                  }}
                >
                  Register here
                </a>
              </p>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Forgot your password?{" "}
                <a
                  to="forgotPassword"
                  className="font-medium text-blue-400 hover:underline dark:text-primary-500 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/forgotPassword", { replace: true });
                  }}
                >
                  Click here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
