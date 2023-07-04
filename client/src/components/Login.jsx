import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";
import Visible from "../utils/icons/Eye.svg";
import NotVisible from "../utils/icons/Eye-off.svg";
import WallpaperImage from "../utils/images/wallpaperLogin.jpg";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/users/login",
        {
          email: email.toLowerCase(),
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        dispatch(setUser(res.data));
        toast.success("Logged in successfully.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid credentials, please try again.");
      });
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPwd = () => {
    setShowPwd(!showPwd);
  };

  return (
    <>
      <section>
        <div>
          <div className="relative h-[73vh] min-[480px]:h-[80vh] md:h-[82vh] lg:h-[110vh]">
            <img
              className="absolute rounded-b-3xl h-full w-full object-cover"
              src={WallpaperImage}
              alt=""
            />
            <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black/90 h-full rounded-b-3xl items-center text-center lg:items-start">
              <div className="mx-[5vw] w-full text-white font-dmSans my-10 lg:mt-[40vh] xl:px-[5vw]">
                <h3 className="text-[3rem] font-semibold mb-4 leading-10 min-[480px]:text-[2.375rem] md:text-5xl lg:text-6xl">
                  Sign in
                </h3>
                <p className="text-gray-100 sm:px-10 md:text-lg lg:px-40 xl:px-[20vw]">
                  Non consectetur a erat nam at lectus urna duis convallis
                  molestie nunc non blandit massa ut etiam sit amet nisl.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-[5vw] lg:mx-[17vw] xl:mx-[28vw]">
            <div className="sticky mb-20 lg:sticky lg:top-5 lg:mb-32">
              <div
                className="w-full h-auto py-10 px-6 border shadow-card rounded-3xl bg-white
              -mt-36 min-[480px]:py-12 min-[480px]:px-10 sm:py-[3.125rem] sm:px-[2rem] lg:w-auto lg:-mt-[17rem] lg:px-16 lg:py-16 xl:-mt-[21rem]"
              >
                <form onSubmit={handleSubmit}>
                  <div className="min-[480px]:flex min-[480px]:space-x-2 md:space-x-4">
                    <div className="min-[480px]:w-full">
                      <div className="min-[480px]:w-full">
                        <div>
                          <label
                            htmlFor="email"
                            className="font-dmSans text-gray-700 font-semibold mb-3"
                          >
                            Email
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              onChange={handleChangeEmail}
                              required
                              className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="min-[480px]:w-full">
                        <div>
                          <label
                            htmlFor="password"
                            className="font-dmSans text-gray-700 font-semibold mb-3"
                          >
                            Password
                          </label>
                          <div className="relative w-full">
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 h-[56px]">
                              <input
                                className="hidden js-password-toggle"
                                id="toggle"
                                type="checkbox"
                              />
                              <label
                                className="px-2 py-1 text-gray-600 font-mono cursor-pointer js-password-label"
                                htmlFor="toggle"
                                onClick={handleShowPwd}
                              >
                                {showPwd ? (
                                  <img
                                    className="h-5"
                                    src={NotVisible}
                                    alt=""
                                  />
                                ) : (
                                  <img className="h-5" src={Visible} alt="" />
                                )}
                              </label>
                            </div>
                            <input
                              id="password"
                              name="password"
                              onChange={handleChangePassword}
                              type={showPwd ? "text" : "password"}
                              required
                              className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:flex sm:space-x-2 sm:mt-4 sm:justify-center md:space-x-4 lg:mt-6">
                    <button
                      className="block shadow-button bg-primary w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-white hover:bg-primaryHover hover:text-white min-[480px]:w-full sm:w-full sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9"
                      type="submit"
                    >
                      Login
                    </button>
                    <div className="flex w-full items-center justify-center my-5 sm:hidden">
                      <hr className="border border-gray-300 w-1/2" />
                      <div className="mx-5">OR</div>
                      <hr className="border border-gray-300 w-1/2" />
                    </div>
                  </div>
                </form>
                <a href="/register">
                  <button className="block mt-2 shadow-button bg-white w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-gray-900 border border-gray-200 hover:bg-primary hover:text-white min-[480px]:w-full sm:w-full sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9">
                    Create account
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
