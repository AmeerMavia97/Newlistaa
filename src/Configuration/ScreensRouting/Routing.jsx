import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// SCREENS 
import Home from "../../Screens/Home/Home";
import Admin from "../../Screens/Admin/Admin";
import Login from "../../Screens/Login/login";
import AboutUs from "../../Screens/AboutUs/AboutUs";
import Pricing from "../../Screens/Pricing/Pricing";
import Register from "../../Screens/Register/register";
import Footer from "../../Components/Footer/Footer.jsx";
import ContactUs from "../../Screens/ContactUs/ContactUs.jsx";
import MiniFooter from "../../Components/Footer/MiniFooter.jsx";
import ViewProperty from "../../Screens/ViewProperty/ViewProperty";
import ProtectiveRoute from "../ProtectiveRoute/ProtectiveRoute.jsx";
import AddProperty3 from "../../Screens/AddProperty/AddProperty3.jsx";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop.jsx";
import PropertyDetails from "../../Screens/ViewProperty/PropertyDetails";
import ForgetPassword from "../../Screens/Authentication/ForgetPassword.jsx";
import SetNewPassword from "../../Screens/Authentication/SetNewPassword.jsx";
import OptVerification from "../../Screens/Authentication/OptVerification.jsx";
import ForgetPassOtp from "../../Screens/Authentication/ForgetPassOpt.jsx";
import ChangePassword from "../../Screens/Authentication/ChangePassword.jsx";
import TransparentNavbar from "../../Components/Navbar/TransparentNavbar.jsx";
import useUnreadMessageListener from "../../CustomHook/useUnreadMessageListener/useUnreadMessageListener.js";
import Cookie from "../../Components/Cookie/Cookie.jsx";
import Accessibility from "../../Screens/Accessibility/Accessibility.jsx";
import PrivacyPolicy from "../../Screens/Privacy/PrivacyPolicy.jsx";
import TermsAndCondition from "../../Screens/Terms/TermsAndConditon.jsx";
import RegisterCopy from "../../Screens/Register/register copy.jsx";


const Layout = ({ children }) => {
  const location = useLocation();

  const showNavbar = ["/", "/about-us", "/pricing", "/contact-us", "/properties" , "/create-property" , "/accessibility" , "/privacy-policy" , "/terms-of-use"].includes(location.pathname);
  const showMiniFooter = ["/", "/about-us", "/contact-us", "/properties" , "/create-property" , "/accessibility" , "/privacy-policy" , "/terms-of-use"].includes(location.pathname);
  const showFooter = ["/", "/about-us", "/pricing", "/contact-us", "/properties" , "/create-property" , "/accessibility" , "/privacy-policy" , "/terms-of-use"].includes(location.pathname);

  return (
    <>
      {showNavbar && <TransparentNavbar />}
      {children}
      {showMiniFooter && <MiniFooter />}
      {showFooter && <Footer />}
    </>
  );
};


const Routing = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    if (user) setCurrentUser(user);
  }, []);

  useUnreadMessageListener(currentUser);


  return (
    <>
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about-us"} element={<AboutUs />} />
            <Route
              path={"/create-property"}
              element={<ProtectiveRoute component={<AddProperty3 />} />}
            />
            <Route path={"/properties"} element={<ViewProperty />} />
            <Route path={"/properties/:id"} element={<PropertyDetails />} />
            <Route path={"/pricing"} element={<Pricing />} />
            <Route path={"/contact-us"} element={<ContactUs />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/verify-otp"} element={<OptVerification />} />
            <Route path={"/forget-otp"} element={<ForgetPassOtp />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/registercopy"} element={<RegisterCopy />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsAndCondition />} />
            <Route path={"/reset-password"} element={<ForgetPassword />} />
            <Route path={"/set-new-password"} element={<SetNewPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route
              path={"/admin/*"}
              element={<ProtectiveRoute component={<Admin />} />}
            />
          </Routes>
          <Cookie></Cookie>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Routing;
