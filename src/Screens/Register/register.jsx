import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
// COMPONENTS
import CountrySelector from "../../Components/RegisterCountrySelector/CountrySelection";
import Inputs from "../../Components/InputFields/Inputs";
// IMAGES
import Image from "../../assets/LoginPage.jpg";
import { useDispatch } from "react-redux";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setError,
    reset,
  } = useForm();

  const [PolicyConfirm, setPolicyComfirm] = useState(false)

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const ApiKey = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();

  // STATES
  const [Loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  // Modal visibility state
  const [showModal, setShowModal] = useState(false);
  // State to track if user agreed in modal
  const [modalAgreed, setModalAgreed] = useState(false);

  // Store form data temporarily until modal agreement
  const [tempFormData, setTempFormData] = useState(null);
  const [googleUserData, setGoogleUserData] = useState(null);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);

  const RegisterForm = async (Data) => {
    // Instead of submitting directly, show modal first
    setTempFormData(Data);
    setShowModal(true);
  };


  const GoogleLogin = async (e) => {
    const idToken = e.credential;
    const userData = decodeJwt(idToken);

    // Store data and show modal
    setGoogleUserData(userData);
    setIsGoogleLogin(true); // Indicate this is a Google login
    setShowModal(true);
  };


  const submitAfterAgreement = async (Data) => {
    setShowModal(false);

    if (isGoogleLogin && googleUserData) {
      try {
        setLoading(true);
        const Response = await axios.post(
          `${ApiKey}/social-login`,
          {
            email: googleUserData.email,
            first_name: googleUserData.given_name,
            last_name: googleUserData.family_name,
            profile_photo: googleUserData.picture,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const response = Response.data;
        localStorage.setItem("token", response.token);
        localStorage.setItem(
          "status",
          response.subscription?.status || "inactive"
        );
        localStorage.setItem("User", JSON.stringify(response.user));
        if (response.profile_complete) {
          localStorage.setItem("ProfileComplete", JSON.stringify(response.profile_complete));
          navigate("/admin");
        } else {
          navigate("/admin/account-setting");
        }

      } catch (error) {
        console.log(error);
        alert(error?.response?.data?.errors?.[0]?.msg || "Google sign-in failed.");
      } finally {
        setLoading(false);
        setIsGoogleLogin(false);
        setGoogleUserData(null);
      }

      return;
    }

    // ... EXISTING normal form registration (for non-Google users)
    // This is your current submitAfterAgreement logic
    // Just keep it here as it is
    if (Data.Password.length < 8) {
      setError("Password", {
        type: "manual",
        message: "Password must be 8 characters long",
      });
      return;
    }
    if (Data.Password !== Data.ConfirmPassword) {
      setError("ConfirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }
    if (!/[!@#$%^&*()<>,."]/.test(Data.Password)) {
      setError("Password", {
        type: "manual",
        message: "Password must contain any special character (!@#$%^&*_+-=?) ",
      });
      return;
    }
    if (!/[A-Z]/.test(Data.Password)) {
      setError("Password", {
        type: "manual",
        message: "Password must contain any capital letter",
      });
      return;
    }

    try {
      setLoading(true);
      const Response = await axios.post(
        `${ApiKey}/register`,
        {
          first_name: Data.FirstName,
          last_name: Data.LastName,
          email: Data.Email,
          phone: Data.phone,
          password: Data.Password,
        },
        {
          contenttype: "application/json",
        }
      );
      console.log(Response.data);
      const UserEmail = Response.data.user.email;
      localStorage.setItem("UserEmail", UserEmail);
      navigate("/verify-otp");
      reset();
    } catch (error) {
      const message = error?.response?.data?.message;
      if (message?.toLowerCase().includes("email")) {
        setError("Email", {
          type: "manual",
          message: "Email already exists",
        });
      } else {
        alert(message || "An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }

    setErrorMessage("");
  };


  // DECODE JWT CODE
  // BCZ GOOGLE DOES NOT PROVIDE DIRECT DATA
  function decodeJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  }

  // GOOGLE LOGIN
  const GooglesubmitAfterAgreement = async (e) => {
    const idToken = e.credential;
    const userData = decodeJwt(idToken);
    try {
      setLoading(true);
      const Response = await axios.post(
        `${ApiKey}/social-login`,
        {
          email: userData.email,
          first_name: userData.given_name,
          last_name: userData.family_name,
          profile_photo: userData.picture,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const response = Response.data;
      localStorage.setItem("token", response.token);
      localStorage.setItem(
        "status",
        response.subscription?.status || "inactive"
      );
      localStorage.setItem("User", JSON.stringify(Response.data.user));
      if (Response.data.profile_complete) {
        localStorage.setItem(
          "ProfileComplete",
          JSON.stringify(Response.data.profile_complete)
        );
        navigate("/admin");
      } else {
        navigate("/admin/account-setting");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      console.log(error.response.data.errors[0].msg);
      alert(error.response.data.errors[0].msg);
    } finally {
      setLoading(false);
    }
  };

  // CHECK GOOGLE API AND RENDER BUTTON
  useEffect(() => {
    const loadGoogleScript = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.google) {
          window.google.accounts.id.initialize({
            client_id: clientId,
            callback: GoogleLogin,
          });

          window.google.accounts.id.renderButton(
            document.getElementById("google-login-button"),
            {
              theme: "outline",
              size: "large",
              shape: "pill",
            }
          );
        }
      };
      document.body.appendChild(script);
    };

    // Check if script already loaded
    if (!window.google || !window.google.accounts) {
      loadGoogleScript();
    } else {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: GoogleLogin,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-login-button"),
        {
          theme: "outline",
          size: "large",
          shape: "pill",
        }
      );
    }
  }, []);


  return (
    <>
      <div className=" md:flex ">
        {/* IMAGE SECTION  */}
        <div className="md:w-[30%] min-[900px]:!w-[45%] lg:!w-[43%] xl:!w-[48%]">
          <img
            className="w-[100%] object-cover h-[20vh] sm:h-[30vh] md:h-full"
            src={Image}
            alt=""
          />
        </div>

        {/* LOGIN FOR SECTION  */}
        <div className="flex flex-col justify-center gap-7 py-10 max-[380px]:px-6 px-8 sm:px-16 md:py-20 md:w-[70%] lg:w-[55%] lg:px-20 lg:py-20 xl:py-24 xl:px-24  2xl:px-32">
          {/* Heading Info  */}
          <div>
            <h1 className="font-Poppins font-[700] text-[32px] max-[380px]:text-[28px] sm:text-[35px] md:text-[38px] lg:text-[44px]">
              Join Newlista
            </h1>
            <p className="font-Urbanist text-Paracolor font-[600] max-[380px]:text-[12px] text-[13px] sm:text-[13.5px] lg:text-[15px] lg:pl-2">
              Sign up to list properties, connect with top investors, and
              explore off-market deals.
            </p>
          </div>

          {/* Important Notice for Investors */}

          <form
            onSubmit={handleSubmit(RegisterForm)}
            className="flex flex-col gap-4"
          >
            {/* Name  */}
            <div className="grid  min-[400px]:grid-cols-2 gap-5 w-[100%]">
              <span className="">
                <Inputs
                  name={"FirstName"}
                  register={register("FirstName", {
                    required: "First name is required",
                  })}
                  labels={"First Name"}
                  error={errors.FirstName?.message}
                  placeholder={"Enter your first name"}
                ></Inputs>
              </span>
              <span className="">
                <Inputs
                  name={"LastName"}
                  register={register("LastName", {
                    required: "Last name is required",
                  })}
                  labels={"Last Name"}
                  error={errors.LastName?.message}
                  placeholder={"Enter your last name"}
                ></Inputs>
              </span>
            </div>

            {/* Email  */}
            <div className="flex flex-col gap-4">
              <span className="">
                <Inputs
                  name={"Email"}
                  register={register("Email", {
                    required: "Email is required",
                  })}
                  labels={"Email"}
                  placeholder={"Enter your email"}
                  error={errors.Email?.message}
                ></Inputs>
              </span>

              {/* Phone Number*/}
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <CountrySelector
                    phone={field.value}
                    setPhone={field.onChange}
                    error={errors.phone?.message}
                  />
                )}
              />
              {/* LOCATION */}
              {/* <span className="">
                <Inputs
                  name={"address"}
                  register={register("address", {
                    required: "Location is required",
                  })}
                  labels={"Location"}
                  placeholder={"Enter your city"}
                  error={errors.address?.message}
                ></Inputs>
              </span> */}
              {/* PASSOWRD  */}
              <span className="relative">
                <Inputs
                  name={"Password"}
                  register={register("Password", {
                    required: "Password is required",
                  })}
                  labels={"Password"}
                  type={showPassword ? "text" : "password"}
                  placeholder={"Create a strong password"}
                  error={errors.Password?.message}
                ></Inputs>
                <button
                  type="button"
                  onClick={() => {
                    setShowPassword((prev) => !prev);
                  }}
                  className="absolute right-6 text-[#747474] top-[50px] transform -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </span>
              {/* CONFIRM PASSWORD  */}
              <span className="relative">
                <Inputs
                  name={"ConfirmPassword"}
                  register={register("ConfirmPassword", {
                    required: "Please confirm your password",
                  })}
                  labels={"ConfirmPassword"}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={"Re-enter your password"}
                  error={errors.ConfirmPassword?.message}
                ></Inputs>
                <button
                  type="button"
                  onClick={() => {
                    setshowConfirmPassword((prev) => !prev);
                  }}
                  className="absolute right-6 text-[#747474] top-[50px] transform -translate-y-1/2 cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </span>
            </div>
            {/* <div className="flex items-start gap-2 mt-2">
              <input
                type="checkbox"
                {...register("termsAgreement", {
                  required: "You must agree to the terms to register",
                })}
                className="mt-1"
              />
              <label className="text-sm sm:text-[15px] text-gray-700 leading-snug">
                I agree to{" "}
                <Link to="/terms-of-use" className="underline text-blue-600">
                  Newlista’s Terms of Use
                </Link>{" "}
                and{" "}
                <Link to="/privacy-policy" className="underline text-blue-600">
                  Privacy Policy
                </Link>
                , and confirm I am a real estate investor using this platform
                for investment purposes only.
              </label>
            </div>
            {errors.termsAgreement && (
              <p className="text-red-600 text-sm">
                {errors.termsAgreement.message}
              </p>
            )} */}

            {/* Sign Up Button */}
            <div className="mt-1">
              <button
                type="submit"
                disabled={Loading}
                className={`bg-PurpleColor w-full h-11 cursor-pointer mt-3 text-white font-Urbanist rounded-[6px] font-[700] ${Loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                {Loading ? "Signing Up..." : "Sign Up"}
              </button>
              <p className="font-Urbanist text-Paracolor font-[600] max-[380px]:text-[12.5px] text-[13.5px] sm:text-[14.5px] lg:text-[15px] text-center mt-3">
                Already have an account?{" "}
                <Link to={"/"} className="font-bold">
                  Sign in now
                </Link>
              </p>
            </div>

            {/* Other Info */}
            <div className="flex justify-center items-center gap-3 mt-2">
              <div className="bg-[#a5a5a5] h-0.5 max-[380px]:w-[70px]  w-[80px] sm:w-[90px]"></div>
              <p className="font-Urbanist text-Paracolor font-[600] max-[380px]:text-[13px] text-[15px] sm:text-[16px] text-center">
                or continue with{" "}
              </p>
              <div className="bg-[#a5a5a5] h-0.5 max-[380px]:w-[70px] w-[80px] sm:w-[90px]"></div>
            </div>
          </form>
          <div className="flex justify-center gap-2">
            <div id="google-login-button"></div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Disclaimer: Newlista is a networking platform for real estate
            investors. We do not broker deals, provide investment advice, or vet
            listings or users. All users are responsible for their own due
            diligence. Use of this platform is at your own risk.
          </p>
        </div>
      </div>

      {/* Modal Section */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-[#000000a2] bg-opacity-50 z-50"
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white rounded-lg shadow-lg pt-10 pb-7  px-6.5 max-w-[37%] mx-4 no-scrollbar ">
            <h2 className="text-[30px] leading-[34px] font-semibold mb-4 font-Urbanist">Important Notice for Investors</h2>
            <div className="bg-red-50 border border-red-200 mb-4 rounded-md -4"><div className=" text-red-700 text-sm sm:text-[14px] rounded-md p-4  max-h-[300px] overflow-auto  no-scrollbar ">
             <p className="font-semibold">
              Newlista is exclusively for bona fide real estate investors. Soliciting, wholesaling, or marketing to other users is prohibited. We do not facilitate syndications. Investors must follow all SEC rules. Users misusing the platform will be suspended or banned without refund. By signing up, you agree to these terms.
             </p>
             
              {/* <p className="mb-2 font-semibold">
                Newlista is a platform exclusively for real estate investors
                seeking off-market properties. To maintain the integrity and focus
                of our community:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>All users must be bona fide investors.</li>
                <li>
                  Soliciting services, including brokerage, wholesaling, or
                  marketing to other users, is strictly prohibited.
                </li>
                <li>
                  Users found soliciting or misusing the platform for
                  non-investment purposes will have their accounts suspended or
                  banned without refund.
                </li>
                <li>
                  We reserve the right to verify user eligibility and enforce
                  these policies to protect the quality of our network.
                </li>
              </ul>
              <p className="mt-2">
                By signing up, you agree to comply with these terms and
                acknowledge that Newlista is designed for investors only.
              </p> */}
            </div></div>

            <label className="flex items-start space-x-2 mb-8">
              <input
                type="checkbox"
                checked={modalAgreed}
                onChange={(e) => setModalAgreed(e.target.checked)}
                className="w-10 h-10 -mt-2"
              />
              <span className="text-sm sm:text-[13.5px] font-Inter font-semibold">
                I have read and agree to the Important Notice above, as well as the <Link to={'/terms-of-use'} className="text-blue-500">Terms & Conditions</Link>  and  <Link to={'/privacy-policy'} className="text-blue-500">Privacy Policy.</Link>
              </span>
            </label>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setGoogleUserData(null);
                  setModalAgreed(false);
                }}
                className="px-4 py-2 border rounded hover:bg-gray-100 font-Urbanist text-[14px] font-semibold hover-btn hover-btn-black"
              >
                <span>Cancel</span>
              </button>
              <button
                disabled={!modalAgreed || Loading}

                onClick={() => submitAfterAgreement(tempFormData)}
                className={`px-4 py-2 hover-btn hover-btn-purple disabled:cursor-not-allowed font-Urbanist font-semibold text-[14.5px]`}
              >
                <span>{Loading ? "Processing..." : "Agree & Continue"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;