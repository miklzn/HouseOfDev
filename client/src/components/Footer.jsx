import { Link } from "react-router-dom";
import HOD from "../utils/HOD.svg";
import Facebook from "../utils/Facebook.svg";
import Twitter from "../utils/Twitter.svg";
import Instagram from "../utils/Instagram.svg";
import Youtube from "../utils/Youtube.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer class="border-t">
      <div class="mx-[5vw] pt-6 md:pt-8">
        <div class="md:flex md:items-center md:justify-between xl:mx-[4.5vw]">
          <div className="md:w-[40vw]">
            <Link to="/">
              <img className="my-6" src={HOD} alt="HouseOfDev" />
            </Link>
            <p className="font-dmSans text-gray-600 md:text-lg">
              Lorem ipsum dolor sit amet consect adipiscing elit phasellus amet.
            </p>
            <div className="flex items-center space-x-3 my-5">
              <Link>
                <div className="border border-gray-200 shadow-button rounded-full flex w-[1.875rem] h-[1.875rem] justify-center items-center sm:w-[2.25rem] sm:h-[2.25rem]">
                  <img
                    className="w-[0.875rem] h-[1.25rem] sm:w-[1rem] sm:h-[1.375rem]"
                    src={Facebook}
                    alt=""
                  />
                </div>
              </Link>
              <Link>
                <div className="border border-gray-200 shadow-button rounded-full flex w-[1.875rem] h-[1.875rem] justify-center items-center sm:w-[2.25rem] sm:h-[2.25rem]">
                  <img
                    className="w-[0.875rem] h-[1.25rem] sm:w-[1rem] sm:h-[1.375rem]"
                    src={Twitter}
                    alt=""
                  />
                </div>
              </Link>
              <Link>
                <div className="border border-gray-200 shadow-button rounded-full flex w-[1.875rem] h-[1.875rem] justify-center items-center sm:w-[2.25rem] sm:h-[2.25rem]">
                  <img
                    className="w-[0.875rem] h-[1.25rem] sm:w-[1rem] sm:h-[1.375rem]"
                    src={Instagram}
                    alt=""
                  />
                </div>
              </Link>
              <Link>
                <div className="border border-gray-200 shadow-button rounded-full flex w-[1.875rem] h-[1.875rem] justify-center items-center sm:w-[2.25rem] sm:h-[2.25rem]">
                  <img
                    className="w-[0.875rem] h-[1.25rem] sm:w-[1rem] sm:h-[1.375rem]"
                    src={Youtube}
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="min-[480px]:flex min-[480px]:space-x-32 md:space-x-24">
            <div className="font-dmSans font-semibold my-8">
              <h2 className="text-lg mb-4 md:text-xl">Pages</h2>
              <ul class="flex flex-col items-start text-md font-medium text-gray-600 space-y-2 sm:mb-0">
                <li>
                  <a href="#" class="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="font-dmSans font-semibold my-8">
              <h2 className="text-lg mb-4 md:text-xl">Legal</h2>
              <ul class="flex flex-col items-start text-md font-medium text-gray-600 space-y-2 sm:mb-0">
                <li>
                  <a href="#" class="hover:underline">
                    License
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-0 lg:mt-8" />
        <span class="block text-sm text-gray-600 text-center my-5">
          © {year} House of Dev. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
