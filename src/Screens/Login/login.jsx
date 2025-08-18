import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
// COMPONENTS
import Inputs from "../../Components/InputFields/Inputs";
// IMAGES
import Image from "../../assets/RegisterPage.jpg";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const ApiKey = import.meta.env.VITE_API_KEY;

  // STATES
  const [Loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from || "/admin";
  // Modal visibility state
  const [showModal, setShowModal] = useState(false);
  // State to track if user agreed in modal
  const [modalAgreed, setModalAgreed] = useState(false);

  // Store form data temporarily until modal agreement
  const [tempFormData, setTempFormData] = useState(null);
  const [googleUserData, setGoogleUserData] = useState(null);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);

  const GoogleLogin = async (e) => {
    const idToken = e.credential;
    const userData = decodeJwt(idToken);

    // Store data and show modal
    setGoogleUserData(userData);
    setIsGoogleLogin(true); // Indicate this is a Google login
    setShowModal(true);
  };



  // LOGIN FORM
  const LoginForm = async (Data) => {
    try {
      setLoading(true);
      const Response = await axios.post(`${ApiKey}/login`, {
        email: Data.Email,
        password: Data.Password,
      });
      console.log(Response);
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
        navigate(from, { replace: true });
        reset();
      } else {
        navigate("/admin/account-setting");
      }
      console.log(Response);
    } catch (error) {
      const errorMsg = error?.response?.data?.message || "Login failed";
      const errorDetail = error?.response?.data?.message;
      setError("Password", {
        type: "manual",
        message: "Invalid Email or Password",
      });
    } finally {
      setLoading(false);
    }
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
  const GooglesubmitAfterAgreement = async () => {
    if (!googleUserData) return;

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
          }
        }
      );

      const response = Response.data;
      localStorage.setItem("token", response.token);
      localStorage.setItem("status", response.subscription?.status || "inactive");
      localStorage.setItem("User", JSON.stringify(Response.data.user));

      if (Response.data.profile_complete) {
        localStorage.setItem("ProfileComplete", JSON.stringify(Response.data.profile_complete));
        navigate("/admin", { replace: true });
      } else {
        navigate("/admin/account-setting");
      }
    } catch (error) {
      console.log(error);
      setError("Password", {
        type: "manual",
        message: error.response?.data?.message || "Google login failed",
      });
    } finally {
      setLoading(false);
      setShowModal(false);
      setModalAgreed(false);
      setGoogleUserData(null);
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
              Welcome to Newlista
            </h1>
            <p className="font-Urbanist text-Paracolor font-[600] max-[380px]:text-[12px] text-[13px] sm:text-[13.5px] lg:text-[15px] lg:pl-2">
              Log in to access exclusive real estate listings, connect with
              investors, and explore off-market deals.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(LoginForm)}
            className="flex flex-col gap-4"
          >
            {/* Email  */}
            <div className="flex flex-col gap-4">
              <span className="">
                <Inputs
                  name={"Email"}
                  register={register("Email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Enter a valid email address",
                    },
                  })}
                  labels={"Email"}
                  placeholder={"Enter your registered email"}
                  error={errors.Email?.message}
                ></Inputs>
              </span>
              {/* PASSOWRD  */}
              <span className="relative">
                <Inputs
                  name={"Password"}
                  register={register("Password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                  labels={"Password"}
                  type={showPassword ? "text" : "password"}
                  placeholder={"Enter your password"}
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
              <span>
                <p className="font-Urbanist text-Paracolor font-[600] text-[14px] text-end">
                  <Link to={"/reset-password"}>Forgot Password?</Link>
                </p>
              </span>
            </div>

            {/* Sign Up Button */}
            <div className="mt-1">
              <button
                type="submit"
                disabled={Loading}
                className={`bg-PurpleColor w-full h-11 cursor-pointer mt-3 text-white font-Urbanist rounded-[6px] font-[700] ${Loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                {Loading ? "Logging in..." : "Log In"}
              </button>
              <p className="font-Urbanist text-Paracolor font-[600] max-[380px]:text-[12.5px] text-[13.5px] sm:text-[14.5px] lg:text-[15px] text-center mt-3">
                Don't have an account?{" "}
                <Link to={"/register"} className="font-bold">
                  Sign Up now
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
            <div
              id="google-login-button"
              aria-label="Google login button"
            ></div>
          </div>
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

            <label className="flex items-center space-x-2 mb-8">
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

                onClick={GooglesubmitAfterAgreement}
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

export default Login;
