import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// SCREENS 
import Home from "../../Screens/Home/Home";
import Admin from "../../Screens/Admin/Admin";
import Login from "../../Screens/Login/login";
import Terms from "../../Screens/Terms/Terms.jsx";
import AboutUs from "../../Screens/AboutUs/AboutUs";
import Pricing from "../../Screens/Pricing/Pricing";
import Register from "../../Screens/Register/register";
import Privacy from "../../Screens/Privacy/Privacy.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import FreeYear from "../../Screens/Pricing/FreeYear.jsx";
import ContactUs from "../../Screens/ContactUs/ContactUs.jsx";
import FreeMontlhy from "../../Screens/Pricing/FreeMontly.jsx";
import PremiumYear from "../../Screens/Pricing/PremiumYear.jsx";
import MiniFooter from "../../Components/Footer/MiniFooter.jsx";
import ViewProperty from "../../Screens/ViewProperty/ViewProperty";
import ProtectiveRoute from "../ProtectiveRoute/ProtectiveRoute.jsx";
import AddProperty3 from "../../Screens/AddProperty/AddProperty3.jsx";
import PremiumMonthly from "../../Screens/Pricing/PremiumMontlhy.jsx";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop.jsx";
import PropertyDetails from "../../Screens/ViewProperty/PropertyDetails";
import ForgetPassword from "../../Screens/ProtectedScreen/ForgetPassword";
import SetNewPassword from "../../Screens/ProtectedScreen/SetNewPassword";
import OptVerification from "../../Screens/ProtectedScreen/OptVerification";
import ForgetPassOtp from "../../Screens/ProtectedScreen/ForgetPassOpt.jsx";
import ChangePassword from "../../Screens/ProtectedScreen/ChangePassword.jsx";
import TransparentNavbar from "../../Components/Navbar/TransparentNavbar.jsx";
import useUnreadMessageListener from "../../CustomHook/useUnreadMessageListener/useUnreadMessageListener.js";
import Cookie from "../../Components/Cookie/Cookie.jsx";
import Accessibility from "../../Screens/Accessibility/Accessibility.jsx";


const Layout = ({ children }) => {
  const location = useLocation();

  const showNavbar = ["/", "/about-us", "/pricing", "/contact-us", "/properties" , "/create-property" , "/accessibility"].includes(location.pathname);
  const showMiniFooter = ["/", "/about-us", "/contact-us", "/properties" , "/create-property" , "/accessibility"].includes(location.pathname);
  const showFooter = ["/", "/about-us", "/pricing", "/contact-us", "/properties" , "/create-property" , "/accessibility"].includes(location.pathname);

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
            <Route path={"/premiumyear"} element={<PremiumYear />} />
            <Route path={"/freemontlhy"} element={<FreeMontlhy />} />
            <Route path={"/premiummontlhy"} element={<PremiumMonthly />} />
            <Route path={"/freeyear"} element={<FreeYear />} />
            <Route path={"/contact-us"} element={<ContactUs />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/reset-password"} element={<ForgetPassword />} />
            <Route path={"/verify-otp"} element={<OptVerification />} />
            <Route path={"/forget-otp"} element={<ForgetPassOtp />} />
            <Route path={"/set-new-password"} element={<SetNewPassword />} />
            <Route path={"/register"} element={<Register />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/terms-of-use" element={<Terms />} />
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
