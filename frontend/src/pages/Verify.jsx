import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useUsername from "../hooks/useUsername";

export const Verify = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const name = useUsername();

  useEffect(() => {
      if(name != null) navigate('/home', {replace: true})
  }, [navigate, name]);

  const link = import.meta.env.VITE_REVIEWLINK + 'auth/verifyEmail'

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        link,
        {
          email,
          otp,
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      if (response.data.success == true) toast.success(response.data.message)
      else toast.error(response.data.message)

      if (response.data.path) navigate('/' + response.data.path, { replace: true })
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                OTP Verification
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    value={email}
                    onChange={handleEmailChange}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="xxxxx@iitism.ac.in"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="otp"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    OTP
                  </label>
                  <input
                    value={otp}
                    onChange={handleOtpChange}
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Enter your OTP"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Verify
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};