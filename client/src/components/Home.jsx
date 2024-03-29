import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//-----Redux
import { removeFavorite } from "../store/user";
import { addFavorites } from "../store/user";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//-----Icons & images
import HOD_Home from "../utils/icons/HOD-Home.svg";
import Environment from "../utils/icons/Environments.svg";
import Room from "../utils/icons/Room.svg";
import Top_Card from "../utils/icons/TopCard.svg";
import Bottom_Card from "../utils/icons/BottomCard.svg";
import ArrowLeft from "../utils/icons/ArrowLeft.svg";
import ArrowRight from "../utils/icons/ArrowRight.svg";
import Heart from "../utils/icons/Heart.svg";
import HeartRed from "../utils/icons/HeartRed.svg";
import wallpaperImage from "../utils/images/wallpaperHome.jpg";

const Home = () => {
  const [properties, setProperties] = useState([]);

  //-----Redux
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //-----IdFavorites
  const ids =
    user && user.properties
      ? user.properties.map((property) => property.id)
      : [];

  //Scroll properties
  const widthPx = window.innerWidth < 640 ? window.innerWidth - 8 : 380;

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= widthPx;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += widthPx;
  };

  //Scroll testimonials
  const widthPx2 = window.innerWidth < 1024 ? window.innerWidth - 8 : 728 + 100;

  const scrollLeft2 = () => {
    document.getElementById("content2").scrollLeft -= widthPx2;
  };

  const scrollRight2 = () => {
    document.getElementById("content2").scrollLeft += widthPx2;
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/properties/all`)
      .then((res) => setProperties(res.data));
  }, []);

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

  //-----Remove favorites
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
      <section
        className="h-screen w-full bg-cover bg-center bg-fixed sm:h-screen md:h-[110vh] "
        style={{
          backgroundImage: `url(${wallpaperImage})`,
        }}
      >
        <div className="h-screen w-screen backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black sm:h-screen md:h-[110vh]">
          <div className="h-screen flex items-center mx-[2.5vw] pt-[33vw] sm:h-screen sm:pt-[22vw] md:h-[110vh] md:pt-[15vh] ">
            <div className="flex flex-wrap w-full justify-center ">
              <img src={HOD_Home} alt="" className="px-4 lg:w-1/3" />
              <p className="text-white text-center font-dmSans px-3 py-6 md:text-lg md:px-[15vw] lg:px-[22vw]">
                Discover the home of your dreams with us! Buy, sell or rent with
                our wide selection of properties. Trust us to find your perfect
                place!
              </p>
              <div className="w-full flex flex-col justify-center px-3 py-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a href="/properties">
                  <button className="block bg-primary w-full py-[1.0315rem] rounded-full text-base font-dmSans text-white hover:bg-primaryHover sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.25rem] md:px-8">
                    Explore properties
                  </button>
                </a>
                <a href="">
                  <button className="block bg-white w-full py-[1.0315rem] rounded-full text-base font-dmSans text-gray-900 hover:bg-primary hover:text-white sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.25rem] md:px-8">
                    About us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto mb-[1vh]">
        <div className="pt-24 mx-[5vw] mb-[4vh] space-y-8 md:flex md:flex-wrap md:items-center md:space-y-0 md:justify-between xl:mx-[10.5vw]">
          <p className="text-2xl font-dmSans font-semibold md:text-3xl lg:text-4xl">
            Explore our properties
          </p>
          <a
            className="block shadow-button bg-white border border-gray-200 text-center w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-gray-900 hover:bg-primary hover:text-white min-[480px]:w-auto sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9"
            href="/properties"
          >
            <button>Browse all</button>
          </a>
        </div>
        <div className="pt-20 md:pb-20 mx-[5vw] xl:mx-[10.5vw]">
          <div
            id="content"
            className="snap-x p-1 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide space-x-[10vw] sm:space-x-[3vw] lg:p-1 lg:space-x-[2vw] "
          >
            <button
              onClick={scrollLeft}
              className="absolute left-0 bg-primary rounded-full p-3 min-[480px]:p-[1.1rem] md:left-1 lg:left-[1vw] xl:p-5 xl:left-[8.2vw]"
            >
              <img className="h-5" src={ArrowLeft} alt="" />
            </button>
            {properties.map((property, i) => (
              <div className="snap-center sm:snap-start">
                <div className="shadow-card w-[87vw] h-auto border rounded-3xl  min-[480px]:w-[24.375rem]">
                  <img
                    className="w-full h-[53.5vw] rounded-t-3xl object-cover min-[480px]:h-[14.5rem]"
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
                        <img className="mr-2" src={Room} alt="" />
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
              </div>
            ))}
            <button
              onClick={scrollRight}
              className="absolute right-0 bg-primary rounded-full p-3 min-[480px]:p-[1.1rem] md:right-1 lg:right-[1vw] xl:p-5 xl:right-[8.2vw]"
            >
              <img className="h-5" src={ArrowRight} alt="" />
            </button>
          </div>
        </div>
      </section>
      <section className=" h-auto">
        <div className="pt-24 mx-[5vw] font-dmSans text-center">
          <h2 className="text-2xl font-semibold mb-3 sm:px-[15vw] sm:mb-5 md:text-3xl lg:text-4xl lg:px-[25vw]">
            Come and enjoy a one of a kind experience
          </h2>
          <p className="text-gray-600 mb-10 sm:px-[10vw]md:text-lg md:px-[10vw] md:text-lg lg:text-lg lg:px-[22vw]">
            Lorem ipsum dolor sit amet consectetur adipiscing elitolmi mauris
            convallis mauris ultricies dolor viverra.
          </p>
          <div className="grid grid-cols gap-x-7 gap-y-14 mb-5 md:grid-cols-2 md:mb-12 lg:grid-cols-3 lg:mb-16 xl:px-[4.5vw]">
            <div className="flex items-center">
              <img
                className="h-[6.5rem] mr-6"
                src="https://assets.website-files.com/61f981dc0f719d75a5d78239/6202c7c4c9c163d2b432aa8d_lake-paddling-illustration-rental-webflow-ecommerce-template.png"
                alt=""
              />
              <div className="text-start">
                <h3 className="font-semibold mb-1 text-xl lg:text-2xl">
                  Title
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  Sagittis, facilisis mauris sed vitae habitant dolor sit.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="h-[6.5rem] mr-6"
                src="https://assets.website-files.com/61f981dc0f719d75a5d78239/6202c7c4c9c163d2b432aa8d_lake-paddling-illustration-rental-webflow-ecommerce-template.png"
                alt=""
              />
              <div className="text-start">
                <h3 className="font-semibold mb-1 text-xl lg:text-2xl">
                  Title
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  Sagittis, facilisis mauris sed vitae habitant dolor sit.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="h-[6.5rem] mr-6"
                src="https://assets.website-files.com/61f981dc0f719d75a5d78239/6202c7c4c9c163d2b432aa8d_lake-paddling-illustration-rental-webflow-ecommerce-template.png"
                alt=""
              />
              <div className="text-start">
                <h3 className="font-semibold mb-1 text-xl lg:text-2xl">
                  Title
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  Sagittis, facilisis mauris sed vitae habitant dolor sit.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="h-[6.5rem] mr-6"
                src="https://assets.website-files.com/61f981dc0f719d75a5d78239/6202c7c4c9c163d2b432aa8d_lake-paddling-illustration-rental-webflow-ecommerce-template.png"
                alt=""
              />
              <div className="text-start">
                <h3 className="font-semibold mb-1 text-xl lg:text-2xl">
                  Title
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  Sagittis, facilisis mauris sed vitae habitant dolor sit.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="h-[6.5rem] mr-6"
                src="https://assets.website-files.com/61f981dc0f719d75a5d78239/6202c7c4c9c163d2b432aa8d_lake-paddling-illustration-rental-webflow-ecommerce-template.png"
                alt=""
              />
              <div className="text-start">
                <h3 className="font-semibold mb-1 text-xl lg:text-2xl">
                  Title
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  Sagittis, facilisis mauris sed vitae habitant dolor sit.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="h-[6.5rem] mr-6"
                src="https://assets.website-files.com/61f981dc0f719d75a5d78239/6202c7c4c9c163d2b432aa8d_lake-paddling-illustration-rental-webflow-ecommerce-template.png"
                alt=""
              />
              <div className="text-start">
                <h3 className="font-semibold mb-1 text-xl lg:text-2xl">
                  Title
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  Sagittis, facilisis mauris sed vitae habitant dolor sit.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center px-3 py-6 space-y-4 min-[480px]:flex-row min-[480px]:space-y-0 min-[480px]:space-x-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button
              className="block bg-primary z-10 w-full py-[1.0315rem] rounded-full text-base font-semibold font-dmSans text-white hover:bg-primaryHover sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.25rem] md:px-8"
              href="/"
            >
              Explore properties
            </button>
            <button
              className="block shadow-button bg-white z-10 border border-gray-200 w-full py-[1.0315rem] rounded-full text-base font-dmSans text-gray-900 hover:bg-primary hover:text-white sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.25rem] md:px-8"
              href="/"
            >
              About us
            </button>
          </div>
        </div>
      </section>
      <section className="h-auto">
        <div className="py-16 mx-[5vw] lg:py-44">
          <div className="relative h-auto bg-primary rounded-3xl xl:mx-[4.5vw]">
            <img
              className="w-[15rem] absolute -top-28 -left-28 md:w-[18rem]"
              src={Top_Card}
              alt=""
            />
            <img
              className="w-[10rem] absolute -bottom-24 -right-24 min-[480px]:-bottom-16 min-[480px]:-right-16 sm:w-[40vw] sm:-bottom-14 sm:-right-14"
              src={Bottom_Card}
              alt=""
            />
            <div className="py-14 px-8 font-dmSans md:py-[4.5rem] md:px-[3.375rem] lg:py-[5.875rem] lg:px-[5.375rem]">
              <h2 className="text-2xl font-semibold text-white mb-3 min-[480px]:text-[1.625rem] md:text-3xl md:w-[36.5rem] lg:text-[2.75rem] lg:leading-tight">
                Recharge your energies in one of our forest cabins
              </h2>
              <p className="text-base text-white md:text-lg md:w-[36.5rem]">
                Non consectetur a erat nam at lectus urna duis convallis
                molestie nunc non blandit massa ut etiam sit amet nisl purus in
                mollis.
              </p>
              <div className="w-full flex flex-col justify-center pt-6 space-y-4 min-[480px]:flex-row min-[480px]:space-y-0 min-[480px]:space-x-3 min-[480px]:justify-start sm:pt-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  className="block bg-white w-full py-[1.0315rem] rounded-full text-base font-dmSans text-primary font-semibold hover:text-black min-[480px]:w-auto min-[480px]:px-6 sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.25rem] md:px-8"
                  href="/"
                >
                  Explore properties
                </button>
                <button
                  className="block shadow-button bg-primary border border-white w-full py-[1.0315rem] rounded-full text-base font-dmSans text-white hover:bg-white hover:text-black min-[480px]:w-auto min-[480px]:px-6 sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.25rem] md:px-8"
                  href="/"
                >
                  About us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto">
        <div className="mx-[5vw] text-center ">
          <h2 className="text-2xl font-semibold font-dmSans mb-3 sm:px-[15vw] sm:mb-5 md:text-3xl lg:text-4xl lg:px-[25vw]">
            Explore by country
          </h2>
          <p className="text-gray-600 font-dmSans sm:px-[10vw]md:text-lg md:px-[10vw] md:text-lg lg:text-lg lg:px-[22vw]">
            Lorem ipsum dolor sit amet consectetur adipiscing elitolmi mauris
            convallis mauris ultricies dolor viverra.
          </p>
          <div className="xl:mx-[4.5vw]">
            <div className="w-full py-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:py-12 ">
              <div className="relative h-[121.875vw] md:h-[39.064vw] xl:h-[60vh] hover:-translate-y-2 hover:transition hover:duration-300">
                <img
                  className="absolute rounded-3xl h-full w-full object-cover"
                  src="https://i.pinimg.com/736x/d8/44/ab/d844abb719712aa085ac03a0ad023f15.jpg"
                  alt=""
                />
                <div className="absolute w-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black/70 h-full rounded-3xl">
                  <h3 className="h-full absolute flex px-8 text-white items-end py-12 text-[1.375rem] font-semibold">
                    Argentina
                  </h3>
                </div>
              </div>
              <div className="relative h-[121.875vw] md:h-[39.064vw] xl:h-[60vh] hover:-translate-y-2 hover:transition hover:duration-300">
                <img
                  className="absolute rounded-3xl h-full w-full object-cover"
                  src="https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg"
                  alt=""
                />
                <div className="absolute w-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black/70 h-full rounded-3xl">
                  <h3 className="h-full absolute flex px-8 text-white items-end py-12 text-[1.375rem] font-semibold">
                    Brazil
                  </h3>
                </div>
              </div>
              <div className="relative h-[121.875vw] md:h-[39.064vw] xl:h-[60vh] hover:-translate-y-2 hover:transition hover:duration-300">
                <img
                  className="absolute rounded-3xl h-full w-full object-cover"
                  src="https://images.pexels.com/photos/14071000/pexels-photo-14071000.jpeg"
                  alt=""
                />
                <div className="absolute w-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black/70 h-full rounded-3xl">
                  <h3 className="h-full absolute flex px-8 text-white items-end py-12 text-[1.375rem] font-semibold">
                    Mexico
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mb-16">
            <button
              className="block shadow-button bg-white border border-gray-200 w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-gray-900 hover:bg-primary hover:text-white min-[480px]:w-auto sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9"
              href="/"
            >
              Browse all
            </button>
          </div>
        </div>
      </section>
      <section className="h-auto">
        <div className="mx-[5vw] pt-16 pb-8 lg:pb-40 xl:mx-[10.5vw]">
          <h2 className="text-2xl font-semibold font-dmSans mb-3 text-center sm:px-[15vw] sm:mb-5 md:text-3xl lg:text-4xl lg:px-[25vw]">
            What our past clients say
          </h2>
          <p
            className="text-gray-600 font-dmSans mb-10
           text-center sm:px-[10vw]md:text-lg md:px-[10vw] md:text-lg lg:text-lg lg:px-[22vw]"
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elitolmi mauris
            convallis mauris ultricies dolor viverra.
          </p>
          <div className="pt-20 md:pb-20">
            <div
              id="content2"
              className="snap-x p-1 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide space-x-[3vw] lg:space-x-[2.5vw] lg:p-1 lg:scroll-pl-1"
            >
              <button
                onClick={scrollLeft2}
                className="absolute left-0 bg-primary rounded-full p-3 min-[480px]:p-[1.1rem] md:left-1 lg:left-[1vw] xl:p-5 xl:left-[8.2vw]"
              >
                <img className="h-5" src={ArrowLeft} alt="" />
              </button>
              <div className="snap-center lg:snap-start">
                <div className="w-[87vw] h-auto py-10 px-6 border shadow-card rounded-3xl sm:py-[3.125rem] sm:px-[2rem] md:flex md:items-center md:space-x-8 md:px-[4.375rem] lg:w-[728px] lg:px-11">
                  <img
                    className="rounded-full mb-6 sm:w-[17.625rem] md:mb-0 md:w-[14.63rem] lg:w-[17.6rem]"
                    src="https://assets.website-files.com/61f981dc0f719d75a5d78239/61fad57ce8f5cdee867ce48b_sophie-moore-testimonial-image-rental-webflow-ecommerce-template.jpg"
                    alt=""
                  />
                  <div className="font-dmSans">
                    <h3 className="text-xl font-semibold md:text-[1.375rem]">
                      “The best experience we ever had”
                    </h3>
                    <p className="text-gray-600 py-4 md:text-lg">
                      Lorem ipsum dolor sit amet conse ctetur adipiscing lectus
                      a nunc mauris scelerisque sed egestas dolor sit amet
                      pharetraol quis pharetra arcu pharetra blandit.
                    </p>
                    <div>
                      <div className="font-semibold">Agustina Moore</div>
                      <div className="text-gray-600">Buenos Aires, ARG</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="snap-center lg:snap-start">
                <div className="w-[87vw] h-auto py-10 px-6 border shadow-card rounded-3xl sm:py-[3.125rem] sm:px-[2rem] md:flex md:items-center md:space-x-8 md:px-[4.375rem] lg:w-[728px] lg:px-11">
                  <img
                    className="rounded-full mb-6 sm:w-[17.625rem] md:mb-0 md:w-[14.63rem] lg:w-[17.6rem]"
                    src="https://assets.website-files.com/61f981dc0f719d75a5d78239/61fad57cdc38ea6e50f2628e_karen-cutts-testimonial-image-rental-webflow-ecommerce-template-p-500.jpeg"
                    alt=""
                  />
                  <div className="font-dmSans">
                    <h3 className="text-xl font-semibold md:text-[1.375rem]">
                      “I had a great rental experience”
                    </h3>
                    <p className="text-gray-600 py-4 md:text-lg">
                      Lorem ipsum dolor sit amet conse ctetur adipiscing lectus
                      a nunc mauris scelerisque sed egestas dolor sit amet
                      pharetraol quis pharetra arcu pharetra blandit.
                    </p>
                    <div>
                      <div className="font-semibold">Lili Smith</div>
                      <div className="text-gray-600">Los Angeles, USA</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="snap-center lg:snap-start">
                <div className="w-[87vw] h-auto py-10 px-6 border shadow-card rounded-3xl sm:py-[3.125rem] sm:px-[2rem] md:flex md:items-center md:space-x-8 md:px-[4.375rem] lg:w-[728px] lg:px-11">
                  <img
                    className="rounded-full mb-6 sm:w-[17.625rem] md:mb-0 md:w-[14.63rem] lg:w-[17.6rem]"
                    src="https://assets.website-files.com/61f981dc0f719d75a5d78239/61fad57c3ec7085a31991d09_john-carter-testimonial-image-rental-webflow-ecommerce-template-p-500.jpeg"
                    alt=""
                  />
                  <div className="font-dmSans">
                    <h3 className="text-xl font-semibold md:text-[1.375rem]">
                      “I found the home of my dreams”
                    </h3>
                    <p className="text-gray-600 py-4 md:text-lg">
                      Lorem ipsum dolor sit amet conse ctetur adipiscing lectus
                      a nunc mauris scelerisque sed egestas dolor sit amet
                      pharetraol quis pharetra arcu pharetra blandit.
                    </p>
                    <div>
                      <div className="font-semibold">Jhon Williams</div>
                      <div className="text-gray-600">Miami, USA</div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={scrollRight2}
                className="absolute right-0 bg-primary rounded-full p-3 min-[480px]:p-[1.1rem] md:right-1 lg:right-[1vw] xl:p-5 xl:right-[8.2vw]"
              >
                <img className="h-5" src={ArrowRight} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
