import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { InputField } from "../components/InputField";
import useUsername from "../hooks/useUsername";

export const Register = () => {
  const navigate = useNavigate();

  const name = useUsername();

  useEffect(() => {
    if (name != null) navigate("/home", { replace: true });
  }, [navigate, name]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const link = import.meta.env.VITE_REVIEWLINK + "/auth/register";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(link, {
        email: email,
        password: password,
        username: username,
      });

      if (response) {
        if (response.data.success == true) {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
        if (response.data.path) {
          navigate("/" + response.data.path, { replace: true });
        }
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
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
                label={`Username`}
                value={username}
                onchange={handleUsernameChange}
                placeholder={"Eg:- John Doe"}
                type={"text"}
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
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="font-medium text-blue-400 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
