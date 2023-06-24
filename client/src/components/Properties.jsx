import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//-----Redux
import { removeFavorite } from "../store/user";
import { addFavorites } from "../store/user";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//-----Icons & images
import Environment from "../utils/icons/Environments.svg";
import Room from "../utils/icons/Room.svg";
import Search from "../utils/icons/Search.svg";
import Cancel from "../utils/icons/Cancel.svg";
import Filters from "../utils/icons/Filters.svg";
import Heart from "../utils/icons/Heart.svg";
import HeartRed from "../utils/icons/HeartRed.svg";
import WallpaperImage from "../utils/images/wallpaperProperties.jpg";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [environments, setEnvironments] = useState("");
  const [search, setSearch] = useState("");

  //-----Redux
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //-----IdFavorites
  const ids =
    user && user.properties
      ? user.properties.map((property) => property.id)
      : [];

  useEffect(() => {
    if (search === "") {
      axios
        .get(`http://localhost:3001/api/properties/all`)
        .then((res) => setProperties(res.data));
    } else {
      axios
        .get(`http://localhost:3001/api/properties/search/${search}`)
        .then((res) => setProperties(res.data));
    }
  }, [search]);

  const handleGetAllProperties = () => {
    axios
      .get(`http://localhost:3001/api/properties/all`)
      .then((res) => setProperties(res.data));
  };

  const handleGetByPrice = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/properties/price", {
        minPrice: minPrice,
        maxPrice: maxPrice,
      })
      .then((res) => {
        setProperties(res.data);
        handleShowFilters();
      })
      .catch((error) => console.log(error));
  };

  const handleGetEnvironments = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/api/properties/environments/${environments}`)
      .then((res) => {
        setProperties(res.data);
        handleShowFilters();
      })
      .catch((error) => console.log(error));
  };

  const handleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const getSearch = (e) => {
    setSearch(e.target.value);
  };

  const getMinPrice = (e) => {
    setMinPrice(e.target.value);
  };

  const getMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  const getEnvironments = (e) => {
    setEnvironments(e.target.value);
  };

  const clearSearch = () => {
    setSearch("");
  };

  const clearFilters = () => {
    setSearch("");
    setMinPrice("");
    setMaxPrice("");
    setEnvironments("");
    handleShowFilters();
    handleGetAllProperties();
  };

  //Add favorites
  const handleAddFavorites = (id) => {
    axios
      .post(
        "http://localhost:3001/api/properties/addFavorites",
        {
          id: id,
        },
        { withCredentials: true }
      )
      .then((res) => dispatch(addFavorites(res.data)))
      .then(() => window.location.reload(false))
      .catch((error) => console.log(error));
  };

  //Remove favorites
  const handleRemoveFavorite = (id) => {
    axios
      .post(
        `http://localhost:3001/api/properties/deleteFavorites/${id}`,
        {
          id: id,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => dispatch(removeFavorite(res.data)))
      .then(() => window.location.reload(false))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <section>
        <div>
          <div className="relative h-[45vh] md:h-[55vh] lg:h-[60vh]">
            <img
              className="absolute rounded-b-3xl h-full w-full object-cover"
              src={WallpaperImage}
              alt=""
            />
            <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black/90 h-full rounded-b-3xl items-center text-center">
              <div className="mx-[8vw] flex w-full text-white font-dmSans my-10 xl:px-[5vw]">
                <div className="flex w-full mt-36 space-x-2">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 h-[56px]">
                      {search === "" ? (
                        <label
                          className="px-2 py-1 text-gray-600 font-mono cursor-pointer js-password-label"
                          htmlFor="search"
                        >
                          <img className="h-5" src={Search} alt="" />
                        </label>
                      ) : (
                        <label
                          className="px-2 py-1 text-gray-600 font-mono cursor-pointer js-password-label"
                          htmlFor="search"
                          onClick={clearSearch}
                        >
                          <img className="h-4" src={Cancel} alt="" />
                        </label>
                      )}
                    </div>
                    <input
                      id="search"
                      name="text"
                      placeholder="Search"
                      value={search}
                      onChange={getSearch}
                      type="text"
                      required
                      className="w-full py-[0.95rem] rounded-full font-dmSans text-gray-900 shadow-button bg-white/30 focus:ring-0 focus:border-primary"
                    />
                  </div>
                  <button
                    className="p-4 bg-white/30 rounded-full"
                    onClick={handleShowFilters}
                  >
                    <img className="h-6" src={Filters} alt="" />
                  </button>
                </div>
              </div>
              {showFilters && (
                <div className="absolute border border-gray-300 shadow-card rounded-3xl -bottom-[17.5rem] right-[8vw] p-2 z-40 w-1/2 h-auto bg-white text-black md:-bottom-[15.5rem] md:w-52 xl:-bottom-[13rem] xl:right-[13vw]">
                  <form>
                    <div className="min-[480px]:flex min-[480px]:space-x-2 md:space-x-4">
                      <div className="min-[480px]:w-full">
                        <div className="min-[480px]:w-full">
                          <div>
                            <p className="font-dmSans text-gray-800">
                              Price min-max:
                            </p>
                            <div className="mt-2">
                              <input
                                id="minPrice"
                                name="minPrice"
                                type="number"
                                placeholder="Min"
                                value={minPrice}
                                onChange={getMinPrice}
                                required
                                className="w-full py-[0.5rem] border border-gray-300 rounded-full font-dmSans text-gray-600 shadow-button focus:ring-0 focus:border-primary"
                              />
                            </div>
                            <div className="mt-2">
                              <input
                                id="maxPrice"
                                name="maxPrice"
                                type="number"
                                placeholder="Max"
                                value={maxPrice}
                                onChange={getMaxPrice}
                                required
                                className="w-full py-[0.5rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-2 shadow-button focus:ring-0 focus:border-primary"
                              />
                            </div>
                            {/* <button
                              className="bg-primary w-full rounded-full font-dmSans py-1 text-white hover:bg-primaryHover"
                              onClick={handleGetByPrice}
                            >
                              Filter
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <form>
                    <div className="min-[480px]:flex min-[480px]:space-x-2 md:space-x-4">
                      <div className="min-[480px]:w-full">
                        <div className="min-[480px]:w-full">
                          <div>
                            <p className="font-dmSans text-gray-800 mt-2">
                              Environments:
                            </p>
                            <div className="mt-2">
                              <input
                                id="environments"
                                name="environments"
                                type="number"
                                value={environments}
                                placeholder="Environments"
                                onChange={getEnvironments}
                                required
                                className="w-full py-[0.5rem] border border-gray-300 rounded-full font-dmSans mb-2 text-gray-600 shadow-button focus:ring-0 focus:border-primary"
                              />
                            </div>

                            <button
                              className="bg-primary w-full rounded-full font-dmSans py-1 text-white hover:bg-primaryHover"
                              onClick={handleGetEnvironments}
                            >
                              Filter
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <button
                    className="bg-white w-full border border-gray-300 mt-2 rounded-full font-dmSans py-1 text-gray-800 hover:bg-primaryHover"
                    onClick={clearFilters}
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="my-10 mx-[5vw] md:my-24 xl:px-[5vw]">
            <div className="grid grid-cols gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-7">
              {properties.map((property, i) => (
                <div
                  className="w-full h-auto border rounded-3xl shadow-card"
                  key={i}
                >
                  <img
                    className="w-full h-[53.5vw rounded-t-3xl object-cover min-[480px]:h-[48.5vw] sm:h-[55.2vw] md:h-[26.9vw] lg:h-[17.8vw]"
                    src={property.image}
                    alt=""
                  />
                  <div className="px-6 pt-8 pb-7 font-dmSans">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {property.title}
                        </h3>
                        <div className="flex items-center text-base text-gray-600 my-2">
                          <img
                            className="h-4 mr-2"
                            src="https://www.svgrepo.com/show/512655/pin-rounded-circle-620.svg"
                            alt=""
                          />
                          {property.city}, {property.country}
                        </div>
                      </div>
                      <div>
                        {ids.includes(property.id) ? (
                          <button
                            className="w-[41.6px] border rounded-full p-2 shadow-button"
                            onClick={() => handleRemoveFavorite(property.id)}
                          >
                            <img
                              className="h-6 hover:scale-110"
                              src={HeartRed}
                              alt=""
                            />
                          </button>
                        ) : (
                          <button
                            className="border rounded-full p-2 shadow-button"
                            onClick={() => handleAddFavorites(property.id)}
                          >
                            <img
                              className="h-6 hover:scale-110"
                              src={Heart}
                              alt=""
                            />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap my-5">
                      <div className="w-auto flex items-center border rounded-full py-[0.625rem] px-4 text-sm mr-3">
                        <img className="mr-2" src={Environment} alt="" />
                        {property.environments} Environments
                      </div>
                      <div className="w-auto flex items-center border border-gray-200 rounded-full py-[0.625rem] px-4 text-sm">
                        <img className="mr-2" src={Room} alt="" />{" "}
                        {property.rooms} Rooms
                      </div>
                    </div>
                    <hr className="border-t border-gray-300 mb-6 mt-8" />
                    <div className="min-[480px]:w-full min-[480px]:flex min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:justify-between">
                      <div className="flex items-center mb-4 min-[480px]:mb-0">
                        <div className="text-xl font-semibold">
                          ${property.price}
                        </div>
                        <div
                          className={
                            property.operation === "rent"
                              ? "text-sm text-gray-400 ml-1"
                              : "hidden"
                          }
                        >
                          /month
                        </div>
                      </div>
                      <div className="w-full min-[480px]:w-auto">
                        <Link to={`/properties/${property.id}`}>
                          <button className="block bg-primary w-full py-[0.81rem] pl-3 pr-4 rounded-full text-white font-semibold hover:bg-primaryHover min-[480px]:w-auto min-[480px]:px-[1.63rem] md:py-4 md:px-6 md:bg-primary md:w-full md:p-0">
                            See more
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Properties;
