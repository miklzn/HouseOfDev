import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Visible from "../utils/icons/Eye.svg";
import NotVisible from "../utils/icons/Eye-off.svg";
import WallpaperImage from "../utils/images/wallpaperLogin.jpg";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/register", {
        name: name,
        lastName: lastName,
        email: email.toLowerCase(),
        password: password,
        country: country,
        city: city,
        phone: phone,
      })
      .then((res) => res.data)
      .then(() => navigate("/login"))
      .catch((error) => console.log(error));
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
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
                  Sign up
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
                      <div>
                        <label
                          htmlFor="name"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          Name
                        </label>
                        <div className="mt-1">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={handleChangeName}
                            required
                            className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="lastName"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          Last name
                        </label>
                        <div className="mt-1">
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={handleChangeLastName}
                            required
                            className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-[480px]:flex min-[480px]:space-x-2 md:space-x-4">
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="country"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          Country
                        </label>
                        <div className="mt-1">
                          <input
                            id="country"
                            name="country"
                            type="text"
                            onChange={handleChangeCountry}
                            required
                            className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="city"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          City
                        </label>
                        <div className="mt-1">
                          <input
                            id="city"
                            name="city"
                            type="text"
                            onChange={handleChangeCity}
                            required
                            className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-[480px]:flex min-[480px]:space-x-2 md:space-x-4">
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
                            type="text"
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
                          htmlFor="phone"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          Phone
                        </label>
                        <div className="mt-1">
                          <input
                            id="phone"
                            name="phone"
                            type="text"
                            onChange={handleChangePhone}
                            required
                            className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          />
                        </div>
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
                              <img className="h-5" src={NotVisible} alt="" />
                            ) : (
                              <img className="h-5" src={Visible} alt="" />
                            )}
                          </label>
                        </div>
                        <input
                          id="password"
                          name="password"
                          placeholder="Min. 8 characters"
                          onChange={handleChangePassword}
                          type={showPwd ? "text" : "password"}
                          required
                          className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:flex sm:mt-4 sm:justify-center md:space-x-4 lg:mt-6">
                    {password.length >= 8 ? (
                      <button
                        className="block shadow-button bg-primary w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-white hover:bg-primaryHover hover:text-white min-[480px]:w-full sm:w-full sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9"
                        type="submit"
                      >
                        Create account
                      </button>
                    ) : (
                      <button
                        className="block shadow-button bg-primary w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-white hover:bg-primary hover:text-white min-[480px]:w-full sm:w-full sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9"
                        type="submit"
                        disabled
                      >
                        Create account
                      </button>
                    )}
                    <div className="flex w-full items-center justify-center my-5 sm:hidden">
                      <hr className="border border-gray-300 w-1/2" />
                      <div className="mx-5 font-dmSans">OR</div>
                      <hr className="border border-gray-300 w-1/2" />
                    </div>
                  </div>
                </form>
                <Link to={`/login`}>
                  <button className="block mt-2 shadow-button bg-white w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-gray-900 border border-gray-200 hover:bg-primary hover:text-white min-[480px]:w-full sm:w-full sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9">
                    Log in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
