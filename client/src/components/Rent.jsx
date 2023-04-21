import Environment from "../utils/Environments.svg";
import Room from "../utils/Room.svg";

function Rent() {
  return (
    <>
      <section>
        <div>
          <div className="relative h-[73vh] md:h-[82vh] lg:h-[76vh]">
            <img
              className="absolute rounded-b-3xl h-full w-full object-cover"
              src="https://latinexclusive.com/sites/default/files/api_file_downloads/5d669aea04e2d600102510cc_6.jpg"
              alt=""
            />
            <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black/90 h-full rounded-b-3xl items-center text-center">
              <div className="mx-[5vw] w-full text-white font-dmSans my-10 xl:px-[5vw]">
                <h3 className="text-[3rem] font-semibold mb-4 leading-10 min-[480px]:text-[2.375rem] md:text-5xl lg:text-6xl">
                  Rent
                </h3>
                <p className="text-gray-100 sm:px-10 md:text-lg lg:px-40 xl:px-[20vw]">
                  Non consectetur a erat nam at lectus urna duis convallis
                  molestie nunc non blandit massa ut etiam sit amet nisl.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-[5vw] my-24 xl:px-[5vw]">
            <div className="grid grid-cols gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-7">
              <div className="w-full h-auto border rounded-3xl shadow-card">
                <img
                  className="w-full h-[53.5vw rounded-t-3xl object-cover min-[480px]:h-[48.5vw] sm:h-[55.2vw] md:h-[26.9vw] lg:h-[17.8vw]"
                  src="https://assets.website-files.com/61f981dc0f719d7071d7826c/620146dffd7b262cc0983291_duplex-rustic-cabin-main-image-rental-webflow-ecommerce-template.jpg"
                  alt=""
                />
                <div className="px-6 pt-8 pb-7 font-dmSans">
                  <h3 className="text-xl font-semibold">Title Property</h3>
                  <div className="text-base text-gray-600 my-2">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                  <div className="flex flex-wrap my-5">
                    <div className="w-auto flex items-center border rounded-full py-[0.625rem] px-4 text-sm mr-3">
                      <img className="mr-2" src={Environment} alt="" />{" "}
                      Environments
                    </div>
                    <div className="w-auto flex items-center border border-gray-200 rounded-full py-[0.625rem] px-4 text-sm">
                      <img className="mr-2" src={Room} alt="" /> Rooms
                    </div>
                  </div>
                  <hr className="border-t border-gray-300 mb-6 mt-8" />
                  <div className="min-[480px]:w-full min-[480px]:flex min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:justify-between">
                    <div className="flex items-center mb-4 min-[480px]:mb-0">
                      <div className="text-xl font-semibold">$299</div>
                      <div className="text-sm text-gray-400 ml-1">/month</div>
                    </div>
                    <div className="w-full min-[480px]:w-auto">
                      <button
                        className="block bg-primary w-full py-[0.81rem] pl-3 pr-4 rounded-full text-white font-semibold hover:bg-primaryHover min-[480px]:w-auto min-[480px]:px-[1.63rem] md:py-4 md:px-6 md:bg-primary md:w-full md:p-0"
                        href="/home"
                        variant="outline-light "
                      >
                        See more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto border rounded-3xl shadow-card">
                <img
                  className="w-full h-[53.5vw rounded-t-3xl object-cover min-[480px]:h-[48.5vw] sm:h-[55.2vw] md:h-[26.9vw] lg:h-[17.8vw]"
                  src="https://assets.website-files.com/61f981dc0f719d7071d7826c/620146dffd7b262cc0983291_duplex-rustic-cabin-main-image-rental-webflow-ecommerce-template.jpg"
                  alt=""
                />
                <div className="px-6 pt-8 pb-7 font-dmSans">
                  <h3 className="text-xl font-semibold">Title Property</h3>
                  <div className="text-base text-gray-600 my-2">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                  <div className="flex flex-wrap my-5">
                    <div className="w-auto flex items-center border rounded-full py-[0.625rem] px-4 text-sm mr-3">
                      <img className="mr-2" src={Environment} alt="" />{" "}
                      Environments
                    </div>
                    <div className="w-auto flex items-center border border-gray-200 rounded-full py-[0.625rem] px-4 text-sm">
                      <img className="mr-2" src={Room} alt="" /> Rooms
                    </div>
                  </div>
                  <hr className="border-t border-gray-300 mb-6 mt-8" />
                  <div className="min-[480px]:w-full min-[480px]:flex min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:justify-between">
                    <div className="flex items-center mb-4 min-[480px]:mb-0">
                      <div className="text-xl font-semibold">$299</div>
                      <div className="text-sm text-gray-400 ml-1">/month</div>
                    </div>
                    <div className="w-full min-[480px]:w-auto">
                      <button
                        className="block bg-primary w-full py-[0.81rem] pl-3 pr-4 rounded-full text-white font-semibold hover:bg-primaryHover min-[480px]:w-auto min-[480px]:px-[1.63rem] md:py-4 md:px-6 md:bg-primary md:w-full md:p-0"
                        href="/home"
                        variant="outline-light "
                      >
                        See more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto border rounded-3xl shadow-card">
                <img
                  className="w-full h-[53.5vw rounded-t-3xl object-cover min-[480px]:h-[48.5vw] sm:h-[55.2vw] md:h-[26.9vw] lg:h-[17.8vw]"
                  src="https://assets.website-files.com/61f981dc0f719d7071d7826c/620146dffd7b262cc0983291_duplex-rustic-cabin-main-image-rental-webflow-ecommerce-template.jpg"
                  alt=""
                />
                <div className="px-6 pt-8 pb-7 font-dmSans">
                  <h3 className="text-xl font-semibold">Title Property</h3>
                  <div className="text-base text-gray-600 my-2">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                  <div className="flex flex-wrap my-5">
                    <div className="w-auto flex items-center border rounded-full py-[0.625rem] px-4 text-sm mr-3">
                      <img className="mr-2" src={Environment} alt="" />{" "}
                      Environments
                    </div>
                    <div className="w-auto flex items-center border border-gray-200 rounded-full py-[0.625rem] px-4 text-sm">
                      <img className="mr-2" src={Room} alt="" /> Rooms
                    </div>
                  </div>
                  <hr className="border-t border-gray-300 mb-6 mt-8" />
                  <div className="min-[480px]:w-full min-[480px]:flex min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:justify-between">
                    <div className="flex items-center mb-4 min-[480px]:mb-0">
                      <div className="text-xl font-semibold">$299</div>
                      <div className="text-sm text-gray-400 ml-1">/month</div>
                    </div>
                    <div className="w-full min-[480px]:w-auto">
                      <button
                        className="block bg-primary w-full py-[0.81rem] pl-3 pr-4 rounded-full text-white font-semibold hover:bg-primaryHover min-[480px]:w-auto min-[480px]:px-[1.63rem] md:py-4 md:px-6 md:bg-primary md:w-full md:p-0"
                        href="/home"
                        variant="outline-light "
                      >
                        See more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto border rounded-3xl shadow-card">
                <img
                  className="w-full h-[53.5vw rounded-t-3xl object-cover min-[480px]:h-[48.5vw] sm:h-[55.2vw] md:h-[26.9vw] lg:h-[17.8vw]"
                  src="https://assets.website-files.com/61f981dc0f719d7071d7826c/620146dffd7b262cc0983291_duplex-rustic-cabin-main-image-rental-webflow-ecommerce-template.jpg"
                  alt=""
                />
                <div className="px-6 pt-8 pb-7 font-dmSans">
                  <h3 className="text-xl font-semibold">Title Property</h3>
                  <div className="text-base text-gray-600 my-2">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                  <div className="flex flex-wrap my-5">
                    <div className="w-auto flex items-center border rounded-full py-[0.625rem] px-4 text-sm mr-3">
                      <img className="mr-2" src={Environment} alt="" />{" "}
                      Environments
                    </div>
                    <div className="w-auto flex items-center border border-gray-200 rounded-full py-[0.625rem] px-4 text-sm">
                      <img className="mr-2" src={Room} alt="" /> Rooms
                    </div>
                  </div>
                  <hr className="border-t border-gray-300 mb-6 mt-8" />
                  <div className="min-[480px]:w-full min-[480px]:flex min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:justify-between">
                    <div className="flex items-center mb-4 min-[480px]:mb-0">
                      <div className="text-xl font-semibold">$299</div>
                      <div className="text-sm text-gray-400 ml-1">/month</div>
                    </div>
                    <div className="w-full min-[480px]:w-auto">
                      <button
                        className="block bg-primary w-full py-[0.81rem] pl-3 pr-4 rounded-full text-white font-semibold hover:bg-primaryHover min-[480px]:w-auto min-[480px]:px-[1.63rem] md:py-4 md:px-6 md:bg-primary md:w-full md:p-0"
                        href="/home"
                        variant="outline-light "
                      >
                        See more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto border rounded-3xl shadow-card">
                <img
                  className="w-full h-[53.5vw rounded-t-3xl object-cover min-[480px]:h-[48.5vw] sm:h-[55.2vw] md:h-[26.9vw] lg:h-[17.8vw]"
                  src="https://assets.website-files.com/61f981dc0f719d7071d7826c/620146dffd7b262cc0983291_duplex-rustic-cabin-main-image-rental-webflow-ecommerce-template.jpg"
                  alt=""
                />
                <div className="px-6 pt-8 pb-7 font-dmSans">
                  <h3 className="text-xl font-semibold">Title Property</h3>
                  <div className="text-base text-gray-600 my-2">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                  <div className="flex flex-wrap my-5">
                    <div className="w-auto flex items-center border rounded-full py-[0.625rem] px-4 text-sm mr-3">
                      <img className="mr-2" src={Environment} alt="" />{" "}
                      Environments
                    </div>
                    <div className="w-auto flex items-center border border-gray-200 rounded-full py-[0.625rem] px-4 text-sm">
                      <img className="mr-2" src={Room} alt="" /> Rooms
                    </div>
                  </div>
                  <hr className="border-t border-gray-300 mb-6 mt-8" />
                  <div className="min-[480px]:w-full min-[480px]:flex min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:justify-between">
                    <div className="flex items-center mb-4 min-[480px]:mb-0">
                      <div className="text-xl font-semibold">$299</div>
                      <div className="text-sm text-gray-400 ml-1">/month</div>
                    </div>
                    <div className="w-full min-[480px]:w-auto">
                      <button
                        className="block bg-primary w-full py-[0.81rem] pl-3 pr-4 rounded-full text-white font-semibold hover:bg-primaryHover min-[480px]:w-auto min-[480px]:px-[1.63rem] md:py-4 md:px-6 md:bg-primary md:w-full md:p-0"
                        href="/home"
                        variant="outline-light "
                      >
                        See more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto border rounded-3xl shadow-card">
                <img
                  className="w-full h-[53.5vw rounded-t-3xl object-cover min-[480px]:h-[48.5vw] sm:h-[55.2vw] md:h-[26.9vw] lg:h-[17.8vw]"
                  src="https://assets.website-files.com/61f981dc0f719d7071d7826c/620146dffd7b262cc0983291_duplex-rustic-cabin-main-image-rental-webflow-ecommerce-template.jpg"
                  alt=""
                />
                <div className="px-6 pt-8 pb-7 font-dmSans">
                  <h3 className="text-xl font-semibold">Title Property</h3>
                  <div className="text-base text-gray-600 my-2">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                  <div className="flex flex-wrap my-5">
                    <div className="w-auto flex items-center border rounded-full py-[0.625rem] px-4 text-sm mr-3">
                      <img className="mr-2" src={Environment} alt="" />{" "}
                      Environments
                    </div>
                    <div className="w-auto flex items-center border border-gray-200 rounded-full py-[0.625rem] px-4 text-sm">
                      <img className="mr-2" src={Room} alt="" /> Rooms
                    </div>
                  </div>
                  <hr className="border-t border-gray-300 mb-6 mt-8" />
                  <div className="min-[480px]:w-full min-[480px]:flex min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:justify-between">
                    <div className="flex items-center mb-4 min-[480px]:mb-0">
                      <div className="text-xl font-semibold">$299</div>
                      <div className="text-sm text-gray-400 ml-1">/month</div>
                    </div>
                    <div className="w-full min-[480px]:w-auto">
                      <button
                        className="block bg-primary w-full py-[0.81rem] pl-3 pr-4 rounded-full text-white font-semibold hover:bg-primaryHover min-[480px]:w-auto min-[480px]:px-[1.63rem] md:py-4 md:px-6 md:bg-primary md:w-full md:p-0"
                        href="/home"
                        variant="outline-light "
                      >
                        See more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Rent;
