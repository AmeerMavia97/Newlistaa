import React from "react";
import { Link } from "react-router-dom";
// IMAGES
import WhiteLogo from "../../assets/WhiteLogo.png";
import FooterIcon from "../../assets/FooterIcon.png";
import FooterIcon2 from "../../assets/FooterIcon2.png";

const Footer = () => {
  return (
    <footer>
      {/* Footer Section START  */}
      <div className="">
        <div className="flex flex-col justify-center items-center bg-[#0F0F0F]">
          <div className="py-12 px-8 lg:flex lg:justify-between bg-[#0F0F0F] sm:px-10 md:px-14 lg:px-20 lg:py-20 gap-10 w-full xl:w-[92%] 2xl:w-[80%]">
            {/* SECTION 1  */}
            <div className="mb-6 md:mb-0 flex flex-col gap-10 lg:w-[35%] ">
              <div>
                <Link to={"/"} className="flex items-center">
                  <img
                    src={WhiteLogo}
                    className="h-[65px] sm:h-[80px] me-3"
                    alt="FlowBite Logo"
                  />
                </Link>
              </div>

              <form className="w-[90%] bg-[#262626] rounded-lg  py-0.5 border-[1px] border-solid border-[#5f5f5f] sm:w-[80%] md:w-[55%] lg:w-[90%]">
                <div className="relative flex justify-center items-center">
                  <div className=" inset-y-0  start-0 flex items-center pl-4 pointer-events-none">
                    <img src={FooterIcon} alt="" />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block  w-full p-3.5  ps-4 text-sm font-Urbanist font-semibold placeholder:text-[#999999]  text-[#ffffff] outline-none rounded-lg"
                    placeholder="Subscribe To Our Newsletter "
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-4 bottom-3 "
                  >
                    <img className="w-6 h-6" src={FooterIcon2} alt="" />
                  </button>
                </div>
              </form>
            </div>
            {/* SECTION 2  */}
            <div className="flex flex-col lg:justify-end grid-cols-2 gap-5 sm:gap-7 sm:flex-row sm:grid-cols-5 sm:mt-10 lg:w-[65%] md:gap-12">
              {/* TAB 1  */}
              <div>
                <h2 className="mb-4 text-[15px] font-semibold font-Urbanist text-[#999999] uppercase dark:text-white">
                  Quick Links
                </h2>
                <ul className="text-white flex flex-col gap-2 sm:gap-4 dark:text-gray-400 text-[15px] font-[500] font-Urbanist">
                  <li className=" hover:text-[#c4c4c4]">
                    <Link to={"/about-us"}>About Us</Link>
                  </li>
                  <li className=" hover:text-[#c4c4c4]">
                    <Link to={"//terms-of-use"}>Terms of Usage</Link>
                  </li>
                  <li className=" hover:text-[#c4c4c4]">
                    <Link to={"/privacy-policy"}>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              {/* TAB 2  */}
              <div>
                <h2 className="mb-4 text-[15px] font-semibold font-Urbanist text-[#999999] uppercase dark:text-white">
                  Properties
                </h2>
                <ul className="text-white flex flex-col gap-2 sm:gap-4 dark:text-gray-400 font-[500] text-[15px] font-Urbanist">
                  <a href={"/#featurelisting"}>
                    <li className=" hover:text-[#c4c4c4]">Featured Listings</li>
                  </a>
                  <a href={"/#OffMarketingListing"}>
                    <li className=" hover:text-[#c4c4c4]">
                      Off-Market Listings
                    </li>
                  </a>
                </ul>
              </div>
              {/* TAB 3
            <div>
              <h2 className="mb-4 text-[15px] font-semibold font-Urbanist text-[#999999] uppercase dark:text-white">
                Secure
              </h2>
              <ul className="flex flex-col gap-2 sm:gap-4 text-white text-[15px] dark:text-gray-400 font-[500] font-Urbanist">
                <li className="hover:text-[#c4c4c4]">
                  <Link to={"/login"}>Login</Link>
                </li>
                <li className="hover:text-[#c4c4c4]">
                  <Link to={"/register"}>Register</Link>
                </li>
                <li className=" hover:text-[#c4c4c4]">
                  <Link to={"/our-plans"}>Our Plans</Link>
                </li>
              </ul>
            </div> */}
              {/* TAB 5 */}
              <div>
                <h2 className="mb-4 text-[15px] font-semibold font-Urbanist text-[#999999] uppercase dark:text-white">
                  Contact Us
                </h2>
                <ul className="flex flex-col gap-2 sm:gap-4 text-white dark:text-gray-400 text-[15px] font-[500] font-Urbanist">
                  <li className=" hover:text-[#c4c4c4]">
                    <Link to={"/contact-us"}>Contact Form</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* COPYRIGHT AND SOCIAL MEDIA  */}
        <div className="bg-[#1A1A1A]">
          <div className=" px-6 sm:flex sm:items-center sm:px-8 sm:justify-between  py-6 md:p-4 lg:py-8 mx-auto w-full md:px-20 xl:w-[92%] 2xl:w-[80%]">
            <span className="text-[15px] text-white font-Urbanist sm:text-center dark:text-gray-400">
              © 2025{" "}
              <Link to={"/"} className="hover:underline">
                Newlista
              </Link>
              . All Rights Reserved..
            </span>
            <div className="flex  mt-4 gap-4 sm:justify-center sm:mt-0">
              <Link
                title="Facebook"
                className="text-white hover:bg-PurpleColor bg-[#141414] px-2 py-2 rounded-full dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                title="Discord community"
                className="text-white hover:bg-PurpleColor bg-[#141414] px-2 py-2 rounded-full dark:hover:text-white "
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord</span>
              </Link>
              <Link
                title="Twitter"
                className="text-white hover:bg-PurpleColor bg-[#141414] px-2 py-2 rounded-full dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link
                title="GitHub"
                className="text-white hover:bg-PurpleColor bg-[#141414] px-2 py-2 rounded-full dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </Link>
              <Link
                title="Dribbble"
                className="text-white hover:bg-PurpleColor bg-[#141414] px-2 py-2 rounded-full dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section END  */}
    </footer>
  );
};

export default Footer;
